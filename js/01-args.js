/**
 * Псевдомасив arguments и Array.from
 */

// function foo() {
//   // arguments - локальна змінна, яка зберігає псевдомасив з усіх аргументів, які ви передали у функцію

//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// }

// foo(1, 2, 3, "hello");

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// function add() {
//   let total = 0;

//   for (const num of arguments) {
//     if (typeof num === "number") {
//       total += num;
//     }
//   }

//   return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, "e", 5, 6, "r"));

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

// function calAverage() {
//   let total = 0;

//   for (const num of arguments) {
//     if (typeof num === "number") {
//       total += num;
//     }
//   }

//   return total / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
