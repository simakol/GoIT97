/**
 * Оператор switch
 */
// фактично оператор світч кейс працює тільки на суворе порівння двох значень і все

// const username = "Mike";

// switch (username) {
//   case "Mango": // if username === "Mango"
//     console.log("case 1, username is Mango");
//     break; // він зупиняє подальшу обробку кейсів, якщо його не написати, то будуть виконуватись всі кейси послідовно поки не зустрінеться оператор брейк, або поки не закінчиться код конструкції
//   case "Poly": // if username === "Poly"
//     console.log("case 2, username is Poly");
//     break;
//   case "Mike": // if username === "Mike"
//     console.log("case 3, username is Mike");
//     break;
//   default: // else
//     console.log("default, unknown username");
// }
/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 2;
// let result = "";

// switch (daysUntilDeadline) {
//   case 0: // daysUntilDeadline === 0
//     result = "Today";
//     break;
//   case 1: // daysUntilDeadline === 1
//     result = "Tomorrow";
//     break;
//   case 2: // daysUntilDeadline === 2
//     result = "Overmorrow";
//     break;
//   default: // else
//     result = "Date in the future";
// }

// // if (daysUntilDeadline === 0) {
// //   result = "Today";
// // } else if (daysUntilDeadline === 1) {
// //   result = "Tomorrow";
// // } else if (daysUntilDeadline === 2) {
// //   result = "Overmorrow";
// // } else {
// //   result = "Date in the future";
// // }

// console.log(result);

/*
Напиши скрипт вибору опції доставки товару.
Опція зберігається у змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта

У змінну message запиши повідомлення в залежності від опції.
- 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
- 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
- 'Відправка буде здійснена сьогодні'
- 'Вам зателефонує менеджер'

 */

// const option = 1;
// let message = "";

// switch (option) {
//   case 1: // option === 1
//     message = "Ви зможете забрати товар завтра з 12:00 у нашому офісі";
//     break;
//   case 2: // option === 2
//     message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//     break;
//   case 3: // option === 3
//     message = "Відправка буде здійснена сьогодні";
//     break;
//   default: // else
//     message = "Вам зателефонує менеджер";
// }

// console.log(message);
