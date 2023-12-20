/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: "Kate",
    age: 25,
  },
  {
    name: "Alex",
    age: 28,
  },
  {
    name: "Mark",
    age: 30,
  },
];

/**
 * Без деструктуризації
 */
// const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

/**
 * З деструктуризацією
 */
const names = [];
const ages = [];

for (const { name, age } of users) {
  // const name = user.name
  // const { name } = user
  names.push(name);
  ages.push(age);
}

console.log(names);
console.log(ages);
