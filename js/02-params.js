/**
 * Деструктуризація об'єкта в параметрах функції
 */

/* Паттерн "Обʼєкт параметрів" - коли параметри очікуються у вигляді обʼєктів і відповідно ми можемо зручно їх деструктуризувати. Це корисна практика, так як при передачі аргументу у вигляді обʼєкту ви точно знаєте який параметр за що відповідає(маю на увазі наступну ситуацію: someFn(10, true, "primary", null)) і вам все одно на їх порядок.

someFn({
  amount: 10, 
  isVisible: true, 
  buttonType: "primary", 
  parentContainer: null
})

*/

const user = {
  username: "Jacob",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// З деструктуризацією
function getUserName({ username, skills: { html, css, js } }) {
  console.log(
    `Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`
  );
}

getUserName(user);

const arr = [
  { name: "name1", age: 1 },
  { name: "name2", age: 2 },
  { name: "name3", age: 3 },
];

arr.forEach(({ name, age }) =>
  console.log(`Hello my name is ${name}. I am ${age} y.o.`)
);
