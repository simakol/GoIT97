/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

//* .join(separator) - повертає рядок, який він зібрав з елементів масиву, розділивши кожен елемент символом який ви передали в якості аргументу separator

// const msg = `На курсі ми вивчаємо такі технології: ${courses.join(", ")}`;
// console.log(msg);

//* .split(delimiter) - розбиває строку на масив з символів за розділювачем separator

// const str = "I love JavaScript!"
// const arr = str.split(" ")
// console.log(arr)

//* .slice(start, end) - цей метод повертає копію масиву. Копіювати починає з індексу start до індекса end (НЕ ВКЛЮЧНО). Якщо не передати end, копіювати буде починаючи зі start і до кінця. Якщо не передати аргументів, то масив скопіюється повністю.
// [start, end)

// const fruits = ["apple", "banana", "mango", "orange", "papaya"];

// const fruitsCopy = fruits.slice(); // була зроблена повна копія масиву

// console.log(fruitsCopy);

// const lastFruitsCopy = fruits.slice(2) // була зроблена часткова копія з 2го індексу по останній

// const lastFruitsCopy = fruits.slice(-3); // якщо в якості початку буде відʼємне значення, то копіювати метод почне з кінця, ту кількість значень, яку ви вкажете(зараз буде скопійовано 3 елементи з кінця)

// console.log(lastFruitsCopy);

// const partFruitsCopy = fruits.slice(1, 3) // копіюємо з 1го індексу по 3й не включно, тобто, з 1 по 2 або [1, 3)

// console.log(partFruitsCopy);

//* .concat(...arrs) - повертає новий масив, який складається з інших масивів, які ви передали в якості аргументів (довільна кількість)

// const fruits1 = ["apple", "banana"];
// const fruits2 = ["mango", "orange"];
// const fruits3 = ["papaya"];

// const allFruits = fruits3.concat(fruits1, fruits2);
// console.log(allFruits);

//* indexOf(value) - повертає індекс першого знайденого value в масиві. Якщо такого value не існує - повертає -1

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// const jsIndex = courses.indexOf("JavaScript")
// const postgreSQLIndex = courses.indexOf("PostgreSQL")
// const angularIndex = courses.indexOf("Angular")

// console.log(`JavaScript index is ${jsIndex}`)
// console.log(`PostgreSQL index is ${postgreSQLIndex}`)
// console.log(`Angular index is ${angularIndex}`)

//* push(...values) - додає один або декілька елементів у кінець масиву
//* .pop() - видаляє один елемент з кінця масиву

// const fruits = ["apple", "banana"];

// console.table(fruits);

// fruits.push("orange", "papaya")

// console.table(fruits);

// fruits.push("cucumber")

// console.table(fruits);

// fruits.pop()

// console.table(fruits);



