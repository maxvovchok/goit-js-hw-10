import { refs } from './refs';
import { renderField } from './renderField';

import { resetsPlayer } from './renderSymbol';
import { resetsBeginning } from './playerWin';

export function resetGame() {
  resetsBeginning();
  refs.contentEl.innerHTML = renderField();
  refs.titleEl.textContent = 'Turn X';
  refs.btnEl.hidden = true;

  resetsPlayer();
}
