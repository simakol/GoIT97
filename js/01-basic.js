/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

const list = document.querySelector(".todo-list");

/**
 * Всередині функції запит, зовні обробка
 */
const fetchTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((resp) => {
    if (!resp.ok) {
      throw new Error(`Error in promise: ${resp.status}`);
      /*
Якщо відповідь сервера не окей(resp.ok === false), то нам треба перевести проміс у стан rejected, для цьго ми робимо перевірку та ручний викид власної помилки за допомогою оператора throw (це оператор викидує помилку і переводить проміс у стан rejected, відповідно, завдяки цьому ми моментально переходимо у блок catch для обробки цієї помилки)
      */
    }

    return resp.json();
  });
};

fetchTodos()
  .then((data) => {
    // data - масив обʼєктів які нам надав сервер в якості відповіді
    console.log(data);
    list.insertAdjacentHTML("beforeend", createMarkup(data));
  })
  .catch((err) => console.log(err));

function createMarkup(data) {
  return data.map(createLI).join("");
}

function createLI({ completed, title }) {
  return `<li>
    <h2>${title}</h2>
    <p>Status completed: ${completed}</p>
    </li>`;
}
