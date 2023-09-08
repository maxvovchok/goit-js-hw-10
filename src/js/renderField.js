export function renderField() {
  let markup = '';

  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  return markup;
}
