/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

// Ці методи потрібні нам для того щоб мати змогу змінити контекст виконання функції(наприклад, під час передачі фукнції як колбека). call/apply - викликають фукнцію на місці, відрізняються варіантами передачі аргументів. bind - не викликає функцію, а лише повертає її копію з новим this

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log("showThis -> this", this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10
// };

// func.call(newThis, ...args)
// // func.apply(newThis, [...args])
// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//   x: 788,
//   y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

/**
 * -------------------------------
 */

// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };

// changeColor.call(hat, "orange");
// console.log(hat);

// const sweater = {
//   color: "green",
// };

// changeColor.call(sweater, "blue");
// console.log(sweater);

/**
 * -------------------------------
 */

//* func.bind(newThis, ...args) - поверне копію функції з новим this

// const jacob = {
//   tag: "Jacob",
//   showTag() {
//     // метод, який являється колбек фукнцією (тому що нижче ми його передамо як аргумент)
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// // invokeAction - функція вищого порядку
// function invokeAction(action) {
//   console.log(action);
//   action(); // викликаємо колбек фукнцію showTag без контексту, тому що він втратився під час передачі цієї фукнції як колбеку, відповідно this = undefined
// }

// invokeAction(jacob.showTag.bind(jacob));

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor("yellow");
// console.log(hat);

// changeSweaterColor("red");
// console.log(sweater);

/**
 * -------------------------------
 */

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

// const incrementValue = counter.increment.bind(counter);
// const decrementValue = counter.decrement.bind(counter);

// incrementValue(150)
// decrementValue(48)
// decrementValue(42)


// console.log(counter);
