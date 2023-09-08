import { refs } from './refs';
import { historyX } from './playerWin';
import { historyO } from './playerWin';
import { calculatesWinningCombinations, returnWinSymbol } from './playerWin';

export let result = false;
export let symbol = 'X';

export function resetsPlayer() {
  symbol = 'X';
  result = false;
}

export function renderSymbol(e) {
  const { target } = e;

  if (!target.classList.contains('item') || target.textContent || result) {
    return;
  }

  const id = Number(target.dataset.id);

  if (symbol === 'X') {
    refs.titleEl.textContent = 'Turn O';
    historyX.push(id);
    result = calculatesWinningCombinations(historyX);
  } else {
    refs.titleEl.textContent = 'Turn X';
    historyO.push(id);
    result = calculatesWinningCombinations(historyO);
  }

  target.textContent = symbol;

  returnWinSymbol();

  symbol = symbol === 'X' ? 'O' : 'X';
}
