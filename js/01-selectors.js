/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

const buttonEl = document.querySelector('button');
console.dir(buttonEl);

const ulEl = document.querySelector('.site-nav');
console.dir(ulEl);

const portfolioEl = document.querySelector('#portfolio');
console.dir(portfolioEl);

const allLiEl = document.querySelectorAll('li');
console.log(allLiEl);
