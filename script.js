// https://docs.google.com/spreadsheets/d/1dmb5ZZdPxB6Y1k5QTCcoXulYJ7yVRWagMVs87AekawE/edit#gid=1689050312

// *? Поверніть об'єкт, в якому вказано кількість тегів.
// *? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const result = tweets.reduce((obj, currentEl) => {
//   currentEl.tags.forEach((tag) => (obj[tag] = (obj[tag] || 0) + 1));
//   return obj;
// }, {});

// console.log(result);

//! ================================================

// const cars = [
//   { brand: "Lucid", model: "Air", year: 2022 },
//   { brand: "Mersedes", model: "Benz", year: 1995 },
//   { brand: "Mazda", model: "Miata", year: 1985 },
//   { brand: "Toyota", model: "Supra", year: 1980 },
//   { brand: "Nissan", model: "GTR Nismo", year: 2010 },
// ];

// повернути масив моделей автомобілів відсортованих за зростанням року випуску

// function getModelsSortedArr(arr) {
//   return arr.toSorted((a, b) => a.year - b.year).map((car) => car.model);
// }

// console.log(getModelsSortedArr(cars));

// const nums = [1, 2, 3, 4, 5];
// const squaredNums = nums.map((num) => num * num);

// console.log(nums);
// console.log(squaredNums);

//! ================================================

// function simpleMap(arr, callback) {
//   const newArr = [];
//   for (const el of arr) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// const res1 = simpleMap([1, 2, 3], (el) => el * el);
// const res2 = simpleMap([49, 66, 16, 82, 125, 992], (el) =>
//   Number(Math.sqrt(el).toFixed(2))
// );

// console.log(res1);
// console.log(res2);

//! ================================================

// Поясніть ще раз будь ласка різницю між методами call та bind.
// Чому отримуємо різні результати? Для прикладу:

// const person = { name: "Mango" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// const sayHiBind = sayHi.bind(person, 20);

// console.log(sayHi.call(person, 18));
// console.log(sayHi.apply(person, [19]));
// console.log(sayHiBind());

//! ================================================

// const liEls = ["li", "li", "li", "li", "li", "li", "li"];

// let count = 0;

// liEls.forEach(() => (count += 1));

// console.log(count);

//! ================================================

// const cars = [
//   { brand: "Lucid", model: "Air", year: 2022 },
//   { brand: "Mersedes", model: "Benz", year: 1995 },
//   { brand: "Mazda", model: "Miata", year: 1985 },
//   { brand: "Toyota", model: "Supra", year: 1980 },
//   { brand: "Nissan", model: "GTR Nismo", year: 2010 },
// ];

// console.table(cars);

// const updatedCars = deleteCarByModel(cars, "Miata");
// console.table(updatedCars);

// function deleteCarByModel(arr, model) {
//   const arrCopy = [...arr];
//   const index = arrCopy.findIndex((car) => car.model === model);

//   if (index === -1) {
//     return arrCopy;
//   }

//   arrCopy.splice(index, 1);
//   return arrCopy;
// }

//! ================================================

// замикання - це механізм, який дозволяє функції зберегти доступ до змінних з області видимості, в якій вони були створені, навіть після того, як ця область припинила свою роботу

// function counter() {
//   let count = 0;

//   return function () {
//     count += 1;
//     console.log(count);
//   };
// }

// const fnCallCounter = counter();

// fnCallCounter();
// fnCallCounter();
// fnCallCounter();
// fnCallCounter();
// fnCallCounter();

//! ================================================

// А роза упала на лапу Азора.
// Лидер бодро, гордо бредил.

// function isStrPalindrom(str) {
//   const characters = [".", "!", ",", "?", ":", ";", "'", "-", " "];
//   const lowerStr = str.toLowerCase();

//   const strWithoutSymbols = lowerStr
//     .split("")
//     .map((character) => (characters.includes(character) ? "" : character))
//     .join("");

//   const reversedStr = strWithoutSymbols.split("").reverse().join("");

//   console.log(strWithoutSymbols);
//   console.log(reversedStr);
//   return strWithoutSymbols === reversedStr;
// }

// console.log(isStrPalindrom("А роза упала на лапу Азора"));
// console.log(isStrPalindrom("А роза не упала на лапу Азора"));
// console.log(isStrPalindrom("Лидер бодро, гордо бредил."));

//! ================================================

// const arr = [1, 2, 3];
// const arrCopy = [...arr]; // spread

// const obj = {
//   a: "a",
//   b: "b",
// };

// const objCopy = { ...obj }; // spread

// //rest
// function sumAll(...numbers) {
//   console.log(numbers);
// }

// console.log(sumAll(1, 2, 3));
// console.log(sumAll(1, 2, 3, 4, 5, 6));
// console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));

//! ================================================

