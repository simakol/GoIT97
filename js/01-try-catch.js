/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 * - ❌ помилки парсингу (parsing errors)
 * - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 * - Об'єкт помилки
 * - name
 * - message
 * - stack
 * - Блок catch без об'єкта помилки
 */

// try {
//   console.log("Початок блоку try");

//   const a = 5;

//   a = 6;

//   console.log("Кінець блоку try");
// } catch (err) {
//   console.log("Блок catch");
//   console.log(err);
// }

// console.log("Виконуємо код далі");

//! =================================================

// в асинхронних операціях обробка помилок робиться всередині, а не зовні

// setTimeout(() => {
//   try {
//     console.log("Початок блоку try");

//     a;

//     console.log("Кінець блоку try");
//   } catch (err) {
//     console.log("Блок catch");
//     console.log(err);
//     console.dir(err);
//     console.log("name - назва помилки:", err.name);
//     console.log("message - повідомлення про помилку:", err.message);
//     console.log("stack - рядок з назвою і повідомленням про помилку:", err.stack);
//   }
// }, 1000);

// console.log("Виконуємо код далі");

//! =================================================

// try {
//   console.log("Початок блоку try");
//   a;
//   console.log("Кінець блоку try");
// } catch {
//   console.log("Блок catch");
// }

//! =================================================

// try {
//   console.log("try start");

//   const throwErrorOrNot = confirm("Чи варто мені викинути помилку?");

//   if (throwErrorOrNot) {
//     throw new Error("користувач вирішив що помилка буде!");
//   }

//   console.log("try end");
// } catch (err) {
//   console.log(err);
// }
