/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// .reduce(callback, initialAcc) - initialAcc це початкове значення акумулятора
// callback(acc, el, i arr), acc - це і є ваша зовнішня змінна за межами вашого циклу, яка доступна на кожній ітерації і її можна змінювати
// наступні значення акумуляторів отримують своє значення від того, що повернула callback функція на попередній ітерації
// Результат роботи методу reduce це завжди останнє значення акумулятора

// Якщо ви не задаєте початкове значення акумулятора, то акумулятором стане пеший елемент масиву і ви пропустите першу ітерацію

// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((sum, num) => sum + num, 0);
// console.log(total);

/*
!1 var
1. numbers.reduce((sum = 0, num = 5) => sum + num = 5, 0); return 5
2. (sum = 5, num = 10) => sum + num = 15 | return 15
3. (sum = 15, num = 15) => sum + num = 30 | return 30
4. (sum = 30, num = 20) => sum + num = 50 | return 50
5. (sum = 50, num = 25) => sum + num = 75 | return 75
*/

/*
! 2 var
2. numbers.reduce((sum = 5, num = 10) => sum + num = 15); return 15
3. (sum = 15, num = 15) => sum + num = 30 | return 30
4. (sum = 30, num = 20) => sum + num = 50 | return 50
5. (sum = 50, num = 25) => sum + num = 75 | return 75
*/

// let sum = 0;

// for (const num of numbers) {
//   sum += num;
// }

// console.log(sum);

/**
 * Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((sum, num) => sum + num, 0);

// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// const totalTimePlayed = players.reduce(
//   (total, player) => total + player.timePlayed,
//   0
// );
// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (total, good) => total + good.quantity * good.price,
  0
);

console.log(totalAmount);
