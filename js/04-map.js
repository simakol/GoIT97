/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини + кожен елемент нового масиву буде змінений за умовою колбек функції
 */

const allCars = [
  { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
  { make: "Honda", model: "Accord", amount: 2, price: 22455 },
  { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
  { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
  { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
  { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
  { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
  { make: "Ford", model: "F-150", amount: 11, price: 27110 },
  { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
  { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
];

/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const getModels = (cars) => {
//   return cars.map((car) => car.model);

//   // const newArr = [];

//   // for (const car of cars) {
//   //   newArr.push(car.model);
//   // }

//   // return newArr;
// };

// console.table(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));
//   // const newArr = [];
//   // for (const car of cars) {
//   //   newArr.push({ ...car, price: car.price * (1 - discount) });
//   // }
//   // return newArr;
// };

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
console.table(players);

/*
 * Збільшуємо кількість годин гравця за id
 */

const playerIdToUpdate = "player-3";

const updatedPlayers = players.map((player) => {
  if (playerIdToUpdate === player.id) {
    return { ...player, timePlayed: player.timePlayed + 100 };
  }
  return player;
});

console.log(updatedPlayers);

/*
Чиста функція:

- функція, яка не мутує дані(тобто, яка не змінює масиви і обʼєкти за посиланням, а навпаки робить їх копії)
- фукнція, яка не звертається до зовнішніх індетифікаторів
- функція, яка при однакових аргументах завжди буде повертати однаковий результат
- функція, яка виконує одну дію

*/

function pureSum(a, b) {
  return a + b;
}

console.log(pureSum(5, 2));
console.log(pureSum(5, 2));
console.log(pureSum(5, 2));
console.log(pureSum(5, 2));

let a = 5;

function dirtySum(b) {
  return a + b;
}

console.log(dirtySum(2));
a = 10;
console.log(dirtySum(2));
