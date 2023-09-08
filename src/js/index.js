import { refs } from './refs';
import { renderField } from './renderField';
import { renderSymbol } from './renderSymbol';
import { resetGame } from './resetGame';

refs.contentEl.innerHTML = renderField();
refs.contentEl.addEventListener('click', renderSymbol);

refs.btnEl.addEventListener('click', resetGame);

refs.btnEl.hidden = true;
