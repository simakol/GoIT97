/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle - видаляє клас, якщо він є, і додає, якщо його немає
 * - replace
 * - contains
 */

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);

linkEl.classList.add('new-class');
linkEl.classList.remove('site-nav__link');
linkEl.classList.toggle('site-nav__link');
linkEl.classList.replace('new-class', 'replaced-class');
console.log(linkEl.classList.contains('new-class'));
console.log(linkEl.classList.contains('site-nav__link'));

console.log(linkEl);
