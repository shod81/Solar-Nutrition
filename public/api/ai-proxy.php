<?php
/**
 * (C) Stefan Hodrius - Die Solar Nutrition App unterliegt der GPL GNU General Public License
 * und kann mit Namensnennung und unter Beibehaltung der Lizenzbedingungen frei weiterverwendet werden.
 *
 * Solar AI Chef - PHP Proxy for Shared Hosting
 * 
 * Safely forwards AI inquiries to Google Gemini API without exposing the API key to the client.
 * Store your API key in environment variable GEMINI_API_KEY or set it below.
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 1. Get API Key from Environment or local secret file
$apiKey = getenv('GEMINI_API_KEY');
if (!$apiKey && file_exists(__DIR__ . '/config.php')) {
    include __DIR__ . '/config.php';
    if (defined('GEMINI_API_KEY')) {
        $apiKey = GEMINI_API_KEY;
    }
}

if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['error' => 'GEMINI_API_KEY is not configured on the server.']);
    exit();
}

// 2. Read Request Payload
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['prompt'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required parameter: prompt']);
    exit();
}

$prompt = $data['prompt'];
$model = isset($data['model']) ? $data['model'] : 'gemini-2.5-flash';

// 3. System Context Definition
$systemContext = <<<EOT
You are an expert on the Solar Nutrition diet based on the teachings of Adano Ley and Atom Bergstrom.
Core Rules:
1. "It's not WHAT you eat, but WHEN you eat it".
2. Morning (00:00-12:00): Foods from TREES (fruits, nuts, tree oils).
3. Midday (12:00-18:00): Foods from BUSHES/VINES (4+ inches off ground), grains, 2/4-legged land animals.
4. Evening (18:00-24:00): Foods UNDERGROUND, IN WATER, fungi, algae, seafood.
5. Dawn Transition (11:30-12:30): Morning + Midday foods.
6. Dusk Transition (18:00-19:00): Midday + Evening foods.
7. CRITICAL: Kiwi & Passion fruit are MORNING (tree) exception. Citrus alone 9-11am. Melons alone 3-5pm.
8. FORBIDDEN: Ground black pepper (use cayenne), melted cheese, meat + dairy together, popcorn with hulls, carbonated drinks.
EOT;

$fullPrompt = $systemContext . "\n\nUser Question/Request:\n" . $prompt;

// 4. Construct Gemini API Payload
$url = "https://generativelanguage.googleapis.com/v1beta/models/" . urlencode($model) . ":generateContent?key=" . urlencode($apiKey);

$payload = json_encode([
    'contents' => [
        [
            'parts' => [
                ['text' => $fullPrompt]
            ]
        ]
    ]
]);

// 5. Send HTTPS Request via cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(500);
    echo json_encode(['error' => 'cURL Error: ' . $curlError]);
    exit();
}

if ($httpCode !== 200) {
    http_response_code($httpCode);
    echo json_encode(['error' => 'Gemini API Error (HTTP ' . $httpCode . ')', 'details' => json_decode($response)]);
    exit();
}

$responseData = json_decode($response, true);
$generatedText = isset($responseData['candidates'][0]['content']['parts'][0]['text']) 
    ? $responseData['candidates'][0]['content']['parts'][0]['text'] 
    : '';

echo json_encode([
    'success' => true,
    'text' => $generatedText,
]);
