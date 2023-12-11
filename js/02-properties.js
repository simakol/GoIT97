/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image');
console.dir(imageEl);
imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imageEl.alt = 'Новий котик';

const heroTitleEl = document.querySelector('.hero__title');
console.dir(heroTitleEl);
heroTitleEl.textContent = 'Новий текст для нового котика';

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

console.log(imageEl.getAttribute('src'));
imageEl.setAttribute('alt', 'new alt text');
imageEl.removeAttribute('alt');
console.log(imageEl.hasAttribute('alt'));

/*
 * Data-атрибути
 */
const actions = document.querySelectorAll('.actions button');

console.log(actions[0].dataset);
console.log(actions[2].dataset);
console.log(actions[1].dataset.action);

// [{}, {}] -> div data-id="0" div