/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

/*
1. запускаємо цикл на перебір елементів масиву (фор оф)
    1.1. перевіряємо умову парності, якщо парне - то додаємо до тоталу, якщо непарне - нічого не робимо
*/

// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i] % 2 === 0 ? numbers[i] : 0;
// }

// for (const number of numbers) {
//   //   if (number % 2 === 0) {
//   //     total += number;
//   //   }

//   total += number % 2 === 0 ? number : 0;
// }

// console.log(total);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";
// const namesArr = names.split(",");
// const phonesArr = phones.split(",");
// console.log(namesArr);
// console.log(phonesArr);

// let result = ""

// for(const i in namesArr){
//     result += `${namesArr[i]} - +${phonesArr[i]}\n`
// }

// console.log(result)

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "Welcome to the future";
// const strArr = string.trim().split(" ");
// // const result = strArr.slice(1, strArr.length - 1);
// const result = strArr.slice(1, -1).join(" ").trim();
// console.log(result);

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

/*
1. задаємо початково мінімальне значення(наприклад, перший елемент масиву)
2. запускаємо перебір масиву
    2.1. порівнюємо поточний елемент з мінімальним, якщо поточний менше за мінімальний, значить поточний стає мінімальним

*/

// const values = [2, 17, 0, 94, 1, 23, -6, 37];

// let min = values[0];

// for (let i = 1; i < values.length; i += 1) {
//   if (values[i] < min) {
//     min = values[i];
//   }

//   //   min = values[i] < min ? values[i] : min;
// }

// console.log(min);

// Покажіть, як видалити з масиву кожний третій елемент, в кожному другому елементі видалити перший символ, а в кожному першому елементі замінити кожний другий символ на довільний

// const fruits = [
//   "apple",
//   "banana",
//   "mango",
//   "orange",
//   "papaya",
//   "kiwi",
//   "grape",
//   "lemon",
// ];

// for (let i = 2; i < fruits.length; i += 3) {
//   fruits.splice(i, 1);
//   i -= 1;
// }

// for (const i in fruits) {
//   const wordArr = fruits[i].split("");
//   wordArr[1] = "*";

//   if ((Number(i) + 1) % 2 === 0) {
//     wordArr.shift();
//   }
//   fruits[i] = wordArr.join("");
// }

// console.log(fruits);

//* Яким чином вивести числа в масив по порядку, якщо відомо тільки початкове і кінцеве значення?       Наприклад з 7 по 16?

// const start = 8;
// const end = 16;
// const arr = [];

// for (let i = start; i <= end; i += 1) {
//   arr.push(i);
// }

// console.log(arr)