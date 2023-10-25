/**
 * Перетворення типів: числа
 *
 * - Явне перетворення типів: Number(), String(), Boolean()
 * - Неявне перетворення типів: 5 + "5" -> "55"
 */

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result); // 712false

/*
a + d + c + b
1. 6 + 1 + "12" + false
2. 7 + "12" + false
3. "712" + false
4. "712false"

a + b + c + d
1. 6 + false + "12" + 1
2. 6 + 0 + "12" + 1
3. 6 + "12" + 1
4. "612" + 1
5. "6121"
*/

// console.log(5 - false); // 5 - 0
// console.log(5 + true); // 5 + 1
// console.log("10" / 5); // 10 / 5 = 2
// console.log(true * false); // 1 * 0 = 0
// console.log(15 - "5"); // 15 - 5 = 10
// console.log(false - "5"); // 0 - 5 = -5
// console.log(+"10" + +"4"); // +"10" -> 10 + 4 = 14
// // +"10" - неявне | Number("10") - явне
// console.log(true / false); // 1 / 0 -> Infinity
// console.log((-1 * true) / false); // 1 / 0 -> -Infinity
// console.log(Infinity + 1);
// console.log(true + "5" - 1) // true + "5" -> "true5" - 1 -> NaN
// console.log(true * "55") // 1 * 55 -> 55
// console.log(NaN - false) // NaN
// console.log(NaN + "1") // "NaN1"
// console.log(null - true) // 0 - 1 = -1
// console.log(NaN + null) // NaN
// console.log(10 / false); // 10 / 0 = Infinity
