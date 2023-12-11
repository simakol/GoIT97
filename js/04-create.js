/*
 * Створення та додавання елементів
 */

/*
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');
console.log(titleEl);
titleEl.textContent = 'Це заголовок!';
titleEl.classList.add('page-title');
// document.body.append(titleEl);
// document.body.prepend(titleEl);

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 320;

console.log(imageEl);
const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imageEl);

/*
 * Створюємо та додаємо новий пункт меню
 */

const navListEl = document.querySelector('.site-nav');
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.href = '/team';
navLinkEl.textContent = 'Our team';

navItemEl.append(navLinkEl);
console.log(navItemEl);

navListEl.append(navItemEl);
