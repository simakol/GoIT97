/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

// const numbers = [1, 2, 3];
// const numbers2 = [6, 7, 8]
// const numbersCopy = [...numbers, 4, 5, ...numbers2];
// const numbersRev = [...numbers2, ...numbers]
// numbersCopy[1] = 22
// console.log(numbers);
// console.log(numbersCopy);
// console.log(numbersRev);

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];
// const minTemp = Math.min(...temps)
// const maxTemp = Math.max(...temps)

// console.log(minTemp)
// console.log(maxTemp)

/**
 * Створення масиву і тип за посиланням
 */
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log("a: ", a);
// console.log("b: ", b);
// console.log(a === b)
// a[0].x = 100
// console.log(a[0] === b[0])

/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// const matrix = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

/*
 * Створення об'єкта
 */
// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {...objA, ...objB};

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
// const defaultSettings = {
//   theme: "light",
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings
// };

// console.log(finalSettings);

// * rest

// function sumAll(...numbers) {
//   console.log(numbers);

//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }

//   return sum;
// }

// console.log(sumAll(3, 5, 9));
// console.log(sumAll(4, 6));
// console.log(sumAll(1, 6, 3, 2, 5, 2, 4, 55, 9));
// console.log(sumAll(5, 4, 3, 63, 66, 3));
