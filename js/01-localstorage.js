/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

localStorage.setItem(LS_KEY, JSON.stringify(names));

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */
const namesFromLS = JSON.parse(localStorage.getItem(LS_KEY));

console.log(namesFromLS);

/**
 * Видалення
 */

localStorage.removeItem(LS_KEY)


/**
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

localStorage.setItem("fn", JSON.stringify(add))

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};

localStorage.setItem("calculator", JSON.stringify(calculator))

