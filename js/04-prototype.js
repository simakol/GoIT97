/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal); // створює новий пустий обʼєкт і вказує обʼєкт animal прототипом (тобто, нам будуть доступні всі властивості і методи обʼєкту animal)
// dog.name = "Oskar";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));
// console.log(Object.hasOwn(dog, "name"));
// console.log(Object.hasOwn(dog, "legs"));

// console.log("name" in dog);
// console.log("legs" in dog); // оператор in не бачить різниці між тим чи є властивість власна, чи прототипна, тому коли ми перебираємо обʼєкти за допомогою циклу for in, завжди треба робити перевірку на те чи є ця властивіть власна

// for (const key in dog) {
//   if (Object.hasOwn(dog, key)) {
//     console.log(dog[key]);
//   }
// }

/**
 * ----------------------------------------
 */

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty("a")); //
// console.log(Object.hasOwn(objA, "a")); // true
// console.log(objA.a); //

// console.log(objA.hasOwnProperty("b"));
// console.log(Object.hasOwn(objA, "b")); // false
// console.log(objA.b);

// console.log(objA.hasOwnProperty("c"));
// console.log(Object.hasOwn(objA, "c")); // false
// console.log(objA.c);

// console.log(objA.hasOwnProperty("x"));
// console.log(Object.hasOwn(objA, "x")); // false
// console.log(objA.x); // undefined
