/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

const date1 = Date.now();
console.log("date1", date1);

const today = new Date();
const someday = new Date("3 September 2006");
const diff =  today - someday;

console.log(diff / 1000 / 60 / 60 / 24);

console.log(today);
console.log("Рік", today.getFullYear());
console.log("Число (день)", today.getDate());
console.log("День тижня", today.getDay());
console.log("Кількість мілісекунд з 1 січня 1970 року", today.getTime());
console.log("Поточна година", today.getHours());
console.log(today.toLocaleTimeString("en-US"));
console.log(today.toLocaleTimeString("ua-UK"));
console.log(`${today.getHours()}:${today.getMinutes()}`);
