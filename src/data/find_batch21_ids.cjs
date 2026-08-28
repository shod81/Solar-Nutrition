const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'preloadedRecipes.ts'), 'utf8');
const match = content.match(/export const PRELOADED_RECIPES: Recipe\[\] = (\[[\s\S]*\]);/);
const recipes = JSON.parse(match[1]);

function findNextId(prefix) {
  let i = 1;
  while (true) {
    const num = i < 10 ? `0${i}` : `${i}`;
    const id = `${prefix}-${num}`;
    if (!recipes.some(r => r.id === id)) {
      return id;
    }
    i++;
  }
}

console.log("Next mid-de:", findNextId('mid-de'));
console.log("Next mid-it:", findNextId('mid-it'));
console.log("Next mid-fr:", findNextId('mid-fr'));
console.log("Next mid-es:", findNextId('mid-es'));
console.log("Next mid-mx:", findNextId('mid-mx'));
