/**
 * (C) Stefan Hodrius - Die Solar Nutrition App unterliegt der GPL GNU General Public License
 */

let lastNotifiedKey: string | null = null;

export const isNotificationSupported = (): boolean => {
  return typeof window !== 'undefined' && 'Notification' in window;
};

export const getNotificationPermissionState = (): NotificationPermission => {
  if (!isNotificationSupported()) return 'denied';
  return Notification.permission;
};

export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!isNotificationSupported()) return false;
  try {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  } catch (e) {
    console.error('Error requesting notification permission:', e);
    return false;
  }
};

interface PhaseEvent {
  key: string;
  hour: number;
  minute: number;
  titleDE: string;
  titleEN: string;
  bodyDE: string;
  bodyEN: string;
}

const SOLAR_EVENTS: PhaseEvent[] = [
  {
    key: '11:20_Dawn',
    hour: 11,
    minute: 20,
    titleDE: '🌅 SolarNutrition — Dawn Transition in 10 Min.',
    titleEN: '🌅 SolarNutrition — Dawn Transition in 10 min',
    bodyDE: 'Um 11:30 Uhr Wahre Sonnenzeit beginnt die Dawn-Brückenzeit (11:30–12:00) zwischen Zone 1 & 2.',
    bodyEN: 'At 11:30 True Solar Time, the Dawn Bridge window (11:30–12:00) begins.',
  },
  {
    key: '11:50_Midday',
    hour: 11,
    minute: 50,
    titleDE: '☀️ SolarNutrition — Midday-Zone 2 in 10 Min.',
    titleEN: '☀️ SolarNutrition — Midday Zone 2 in 10 min',
    bodyDE: 'Um 12:00 Uhr Wahre Sonnenzeit beginnt die Midday-Zone (Strauch-, Getreide- & Landtier-Nahrung).',
    bodyEN: 'At 12:00 True Solar Time, Midday Zone 2 (bush, grain, and land animal foods) begins.',
  },
  {
    key: '18:20_Dusk',
    hour: 18,
    minute: 20,
    titleDE: '🌆 SolarNutrition — Dusk Transition in 10 Min.',
    titleEN: '🌆 SolarNutrition — Dusk Transition in 10 min',
    bodyDE: 'Um 18:30 Uhr Wahre Sonnenzeit beginnt die Dusk-Brückenzeit (18:30–19:00) zwischen Zone 2 & 3.',
    bodyEN: 'At 18:30 True Solar Time, the Dusk Bridge window (18:30–19:00) begins.',
  },
  {
    key: '18:50_Evening',
    hour: 18,
    minute: 50,
    titleDE: '🌙 SolarNutrition — Evening-Zone 3 in 10 Min.',
    titleEN: '🌙 SolarNutrition — Evening Zone 3 in 10 min',
    bodyDE: 'Um 19:00 Uhr Wahre Sonnenzeit beginnt die Evening-Zone (Wurzelgemüse, Pilze & Meeresfrüchte).',
    bodyEN: 'At 19:00 True Solar Time, Evening Zone 3 (root vegetables, fungi, and seafood) begins.',
  },
  {
    key: '00:20_Night',
    hour: 0,
    minute: 20,
    titleDE: '🌙 SolarNutrition — Night Transition in 10 Min.',
    titleEN: '🌙 SolarNutrition — Night Transition in 10 min',
    bodyDE: 'Um 00:30 Uhr Wahre Sonnenzeit beginnt die Mitternachts-Brückenzeit (00:30–01:00).',
    bodyEN: 'At 00:30 True Solar Time, the Midnight Bridge window (00:30–01:00) begins.',
  },
  {
    key: '00:50_Morning',
    hour: 0,
    minute: 50,
    titleDE: '🌳 SolarNutrition — Morning-Zone 1 in 10 Min.',
    titleEN: '🌳 SolarNutrition — Morning Zone 1 in 10 min',
    bodyDE: 'Um 01:00 Uhr Wahre Sonnenzeit beginnt die Morning-Zone (Baumfrüchte, Nüsse & Baumöle).',
    bodyEN: 'At 01:00 True Solar Time, Morning Zone 1 (tree fruits, nuts, and tree oils) begins.',
  },
];

export const checkAndTriggerSolarPhaseNotification = (
  trueSolarTime: Date | null,
  locale: string = 'de'
) => {
  if (!trueSolarTime || !isNotificationSupported() || Notification.permission !== 'granted') {
    return;
  }

  const hour = trueSolarTime.getHours();
  const minute = trueSolarTime.getMinutes();

  const matchingEvent = SOLAR_EVENTS.find((e) => e.hour === hour && e.minute === minute);

  if (matchingEvent && lastNotifiedKey !== matchingEvent.key) {
    lastNotifiedKey = matchingEvent.key;

    const isEn = locale === 'en';
    const title = isEn ? matchingEvent.titleEN : matchingEvent.titleDE;
    const body = isEn ? matchingEvent.bodyEN : matchingEvent.bodyDE;

    try {
      new Notification(title, {
        body,
        icon: '/favicon.svg',
        tag: matchingEvent.key,
      });
    } catch (e) {
      console.error('Failed to trigger browser notification:', e);
    }
  }
};
