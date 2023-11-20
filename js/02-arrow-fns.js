/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

// // declaration
// function add(a, b, c) {
//   return a + b + c;
// }

// // expression
// const addExp = function (a, b, c) {
//   return a + b + c;
// };

// arrow
// const addArrow = (a, b, c) => a + b + c;
// const addArrow = (a, b, c) => {
//   return a + b + c;
// }

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

/**
 * ---------------------------
 */

// function fnA() {
//   return {
//     a: 5,
//   };
// }

// console.log(fnA());

// const arrowFnA = () => ({ a: 5 });

// console.log(arrowFnA());

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, function (x, y) {
//   return x + y;
// });

// calc(10, 8, function (x, y) {
//   return x - y;
// });

// calc(2, 3, (a, b) => a + b); // інлайн стрілочна колбек функція

// calc(10, 8, (x, y) => x - y);
