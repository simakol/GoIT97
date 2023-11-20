/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// for(const num of numbers){
//   total += num
// }

// numbers.forEach((el, i, arr) => console.log(el, i, arr))
/*
el - поточний елемент масиву
i - індекс поточного елементу масиву
arr - це масив з яким ми працюємо
*/

// numbers.forEach((el) => (total += el));
/*
1. numbers.forEach((el = 5) => (total += el)); total = 5
2. numbers.forEach((el = 10) => (total += el)); total = 5 + 10
3. numbers.forEach((el = 15) => (total += el)); total = 15 + 15
4. numbers.forEach((el = 20) => (total += el)); total = 30 + 20
5. numbers.forEach((el = 25) => (total += el)); total = 50 + 25
*/

// console.log(total);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function logItems(items) {
//   console.log(items);
//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }
//   items.forEach((el, i) => console.log(`${i + 1} - ${el}`));
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   // for (let i = 0; i < nameList.length; i += 1) {
//   //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//   // }

//   nameList.forEach((_, i) => console.log(`${nameList[i]}: ${phoneList[i]}`));
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function calculateAverage(...args) {
//   let total = 0;
//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }

//   args.forEach((el) => (total += el));

//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// const sumAll = (...args) => {
//   console.log(args);
// };

// console.log(sumAll(1, 2, 3));
// console.log(sumAll(1, 2, 3, 4, 5));
// console.log(sumAll(1, 2, 3, 4, 5, 6, 7));
