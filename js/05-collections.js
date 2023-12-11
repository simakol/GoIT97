/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

const buttonsArr = options.map(({ label, color }) => {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = label;
  buttonEl.classList.add('color-picker__option');
  buttonEl.style.backgroundColor = color;
  return buttonEl;
});

console.log(buttonsArr);

colorPickerContainerEl.append(...buttonsArr)