/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// // user.premium = !user.premium

// console.log(user);

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salariesValues = Object.values(salaries);

// let sum = 0;

// console.log(salariesValues);

// for (const value of salariesValues) {
//   console.log(value);
//   sum += value;
// }

// console.log(`Сума усіх зарплат: ${sum}`);

// ======

// const salaries = [
//   { user: "Alex", salary: 100 },
//   { user: "Vika", salary: 200 },
//   { user: "Oleg", salary: 220 },
// ];

// let sum = 0;

// for (const user of salaries) {
//   console.log(user.salary);
//   sum += user.salary;
// }

// console.log(`Сума усіх зарплат: ${sum}`);
