/**
 * Псевдомасив arguments и Array.from
 */

function foo() {
  console.log(arguments);
  const args = Array.from(arguments);
  console.log(args);
}

foo(1, 2, 3);
foo(1, 2, 3, 4, 5);
foo(1, 2, 3, 4, 5, 6, 7);

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

function add() {}

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calAverage() {}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
