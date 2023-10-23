/**
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

let a = 5; // number

a = "hello"; //string

a = true; //boolean

//* Явне перетворення типів
//Основні функції для явного перетворення типів:
// String - перетворює будь-що в строку
// Number - перетворює будь-що в число
// Boolean - перетворює будь-що в логічний тип

// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"

// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN - not a number - спеціальне значення в джс яке ви можете отримати в тому випадку коли ви намагаєтесь перетворити на число те, що не може бути перетворено на число
// console.log(Number("hello")); // NaN
// console.log(Number("123a")); // NaN
// console.log(typeof NaN); // number

/*
True: будь-яке число крім 0(відʼємні також тру), будь-яка строка у якій є символи, true
False: 0, пуста строка, false, null, undefined, NaN
*/
// console.log(Boolean(-5)) // true
// console.log(Boolean(0)) // false
// console.log(Boolean("hello")) // true
// console.log(Boolean("")) // false
// console.log(Boolean(" ")) // true
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(NaN)) // false

//* - Неявне перетворення типів
// неявне перетворення це коли один тип перетворюється на інший без нашого втручання. Завжди надавайте перевагу явному перетворенню, тому що його можливо контролювати, на відміну від неявного

// console.log("5" + 3); // "53"
/*
"5" + 3 -> "5" + "3" -> "53"
*/

// console.log("5" + true); // "5true"
// console.log("5" + false); // "5false"
// console.log("5" + null); // "5null"
// console.log("5" + undefined); // "5undefined"

// console.log(5 + "3")

// console.log(true + null); // 1 + 0 = 1
// console.log(true - null)

// console.log("5" - 3) // 5 - 3 = 2

// console.log("hello" - 3) // NaN

// console.log(5 - -2);
