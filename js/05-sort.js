/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 11, 3];

// const sorted = numbers.toSorted();
// console.log("sorted ", sorted);

// const letters = ["b", "B", "a", "A"].toSorted();
// console.log("letters", letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

// console.log(numbers);
// const descSortedNumbers = numbers.toSorted((currEl, nextEl) => nextEl - currEl); // формула сортування за спаданням
// const ascSortedNumbers = numbers.toSorted((currEl, nextEl) => currEl - nextEl); // формулу сортування за зростанням
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

// const strings = ["f", "Y", "h", "a", "I", "O", "e", "A"];

// const descSortedStrings = strings.toSorted((currEl, nexEl) =>
//   nexEl.localeCompare(currEl)
// ); // формула сортування строк в зворотньому алфавітному порядку
// const ascSortedStrings = strings.toSorted((currEl, nexEl) =>
//   currEl.localeCompare(nexEl)
// ); // формула сортування строк в алфавітному порядку

// console.log("descSortedNumbers", descSortedStrings);
// console.log("ascSortedNumbers", ascSortedStrings);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// За ігровим часом
const sortedByBestPlayers = players.toSorted(
  (currPlayer, nextPlayer) => nextPlayer.timePlayed - currPlayer.timePlayed
);
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted(
  (currPlayer, nextPlayer) => currPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortedByWorstPlayers);

// По первой букве имени
const byName = players.toSorted((currPlayer, nextPlayer) =>
  currPlayer.name[0].localeCompare(nextPlayer.name[0])
);
console.table(byName);
