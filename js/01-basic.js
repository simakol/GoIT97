/**
 * Деструктуризація об'єкта (збереження значень полів обʼєкту в відповідні константи)
 */

// const user = {
//   username: "Jacob name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log(user.username);

// const username = user.username;
// const skills = user.skills;
// const { username, skills, surname } = user;

// console.log(username, skills, surname);
// деструктуруючи неіснуюче поле в обʼєкті ми отримаємо undefined завжди!

/**
 * Іменована деструктуризація об'єкта
 */

// const user = {
//   username: "Jacob name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// // const name = user.username;
// const { username: name } = user;
// // const { назва поля: нова назва константи } = обʼєкт

// console.log(name);

/**
 * Глибока деструктуризація об'єкта
 */

// const user = {
//   username: "Jacob name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// // const html = user.skills.html
// // const css = user.skills.css
// // const js = user.skills.js

// const {
//   skills: { html, css, js },
// } = user;

// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

//! =========

// const user = {
//   username: "Jacob name",
//   skills: {
//     soft: {
//       english: true,
//       communication: true,
//       scrum: false,
//     },
//     hard: {
//       html: true,
//       css: false,
//       js: true,
//     },
//   },
// };

// const {
//   skills: {
//     soft: { english, communication, scrum },
//     hard: { html, css, js },
//   },
// } = user;

// console.log(english, communication, scrum);
// console.log(html, css, js);

/**
 * Деструктуризація масива
 */

const arr = [1, 2, 3, 4, 5];

// const firstEl = arr[0];
// const thirdEl = arr[2];

const [firstEl, , thirdEl, , fifthEl] = arr;

console.log(firstEl, thirdEl, fifthEl);

// const arr1 = [{ a: 1 }, { b: 2 }];

// const [firstObj, secondObj] = arr1;
// const { a } = firstObj;
// const { b } = secondObj;

// console.log(a, b);
