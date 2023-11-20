/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// функція вищого порядку(тому що вона очікує в якості параметру колбек функцію)
// function fnA(message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(42);
// }

// // колбек фукнція, тому що ми будемо передавати її в аргументи іншої функції
// function fnB(number) {
//   console.log("Log during fnB execution ", number);
// }

// // fnB - передача колбек фукнції. НІКОЛИ НЕ ВИКЛИКАЙТЕ колбек фукнцію під час передачі, тому що вам треба передати саме посилання на функцію, а якщо ви її будете викликати, то до вас прийде не функція, а результат її виконання!
// fnA("A message", fnB);

// fnB(42)

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, doMath) {
//   const result = doMath(a, b);
//   console.log(result);
// }

// calc(3, 5, sum);

// calc(3, 5, pow);

// calc(3, 5, divide);

// calc(3, 5, function (a, b) {
//   return a * b;
// }); // інлайн колбек функція (повна назва інлайн колбек анонімна функція)

// function sum(a, b) {
//   return a + b;
// }

// function pow(a, b) {
//   return a ** b;
// }

// function divide(a, b) {
//   return a / b;
// }

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

// function each(array, callback) {
//   const resultArr = [];
//   for (const value of array) {
//     resultArr.push(callback(value));
//   }

//   return resultArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
