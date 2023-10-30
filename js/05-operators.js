/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

//* True: будь-яке число крім 0(відʼємні також тру), будь-яка строка у якій є символи, true
//* False: 0, пуста строка, false, null, undefined, NaN

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true

/**
 * --------------------------------
 */
// Логічне І(&&) - воно повертає перше false зі списку, якщо ні один операнд не є false - просто повертає останнє.

// console.log(5 && 4); // true(5) && true(4) -> 4
// console.log(5 && "mango"); // true(5) && true("mango") -> "mango"
// console.log("0" && " " && "hello" && "false" && null && -5 && 8); // null

/**
 * --------------------------------
 */
// Логічне АБО(||) - воно повертає перше true зі списку, якщо ні один операнд не є true - просто повертає останнє.

// console.log(false || 5); //false || true(5) -> 5
// console.log(false || null); // false || false(null) -> null

/**
 * --------------------------------
 */
// Логічне НІ(!) - перевертає логічний тип на зворотній. Якщо було тру - стане фолс. Якщо було фолс - стане тру

// console.log(!5); // !true -> false
// console.log(!false); // true
// console.log(!!" ") // !!true -> !false -> true
// console.log(Boolean(" "))

/**
 * --------------------------------
 */

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && "kiwi"); // "kiwi"

// console.log(true && 0 && "kiwi"); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // null > 0 -> 0 > 0 - false

// console.log(null || (2 && 3) || 4); //3
// 1. (2 && 3) -> 3
// 2. null || 3 || 4 -> 3
