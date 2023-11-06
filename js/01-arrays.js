/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 * - Перевизначення
 */

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL", "Next.js"];
console.table(courses);
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);
console.log(courses[4]);

courses[3] = "Angular.js";
courses[4] = "MongoDB";

console.table(courses);

console.log(`length: ${courses.length}`);

const lastIndex = courses.length - 1;
console.log(lastIndex);
console.log(courses[lastIndex])
console.log(courses[courses.length - 1])
