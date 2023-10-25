/**
 * Оператори
 *
 * - Оператори порівняння
 * - Оператори рівності
 * - Зведення типів операндів
 */

//! результатом усіх порівнянь завжди буде тип даних boolean(true, false)

// console.log(5 > 4); // true

// console.log(10 >= "7"); // 10 >= 7 -> true

// всі строки порівнюються за таблицею юнікодів (спеціальне кодування кожного символу)

// console.log("2" > "12"); // 50 > 49 -> true
// console.log("2".charCodeAt(0))
// console.log("1".charCodeAt(0))
// console.log("7".charCodeAt(0))
// console.log("20" > "21")

// console.log("10" >= "7") // 49 >= 55 - false

// console.log("2" > "20") // false

// console.log("2" >= "20") // false

// console.log("2" < "12"); // 50 < 49 -> false

/*
1. Порівняння зі зведенням типів (або не суворе порівняння)
 ==
воно порівнює два значення, якщо типи даних цих значень відрізняються, то цей оператор спробує привести все до спільного типу і порівняти значення. Не рекомендую його використовувати, тому що під капотом відбувається неявне зведення типів, що може бути небезпечним!

2. Порівняння без зведення типів (або суворе порівняння)
===

Воно спочатку порівнює типи даних, і якщо вони однакові, то порівнює значення. Якщо ж типи даних різні воно відразу поверне false.

*/

// console.log("4" == 4); // string == number -> string == string -> "4" == "4" -> true
// console.log(false == 1); // 0 == 1 - false

// console.log("6" === 6); // string === number -> false

// console.log("false" === false); // false

// console.log(1 == true); // 1 == 1 -> true

// console.log(1 === true); // false

// console.log("0" == false); // 0 == 0 -> true

// console.log("0" === false); // false

// console.log("Papaya" < "papaya"); // true ("P" < "p") 80 < 112

// console.log("Papaya" === "papaya"); // false

// console.log(undefined === null); // false

//! ===========

// В JS при порівнянні(==) значення undefined і null є рівними, тобто, повертають true. В тей самий час, при порівнянні(==) undefined і  null з усим іншим ви будете отримувати false.
// console.log(undefined == null); // true
// console.log(null == "null") // false
// console.log(null == 0); // false

// // При порівнянні через (>, <, >=, <=) null буде приводитись до 0, а undefined буде приводитись до NaN
// console.log(0 > null); // false -> 0 > 0
// console.log(0 >= null); // true -> 0 >= 0

// console.log(null == undefined) // true
// console.log(null == 0) // false
// console.log(null == "0")
// console.log(null == "null")
// console.log(undefined == 0)
// console.log(undefined == "undefined")
// console.log(undefined == undefined) // true

// console.log(null > 0) // 0 > 0 -> false
// console.log(null >= 0) // 0 >= 0 -> true
