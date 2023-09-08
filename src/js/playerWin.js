import { refs } from './refs';
import { result, symbol } from './renderSymbol';

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
];

export let historyX = [];
export let historyO = [];

export function resetsBeginning() {
  historyX = [];
  historyO = [];
}

export function calculatesWinningCombinations(arr) {
  return wins.some(item => item.every(id => arr.includes(id)));
}

export function returnWinSymbol() {
  if (result) {
    refs.titleEl.textContent = `Winner ${symbol}`;
    refs.btnEl.hidden = false;
    return;
  } else if (historyX.length + historyO.length === 9) {
    refs.titleEl.textContent = `draw`;
    refs.btnEl.hidden = false;
  }
}
