/**
 * Синтаксис async/await
 * try...catch
 */

/*
* - async/await - фактично допомагає нам зробити імітацію синхронності виконання асинхронного коду
* - async - оголошення асинхронної функції. Будь-яка асинхронна фукнція повертає Promise!!!
  async function foo() {
    return 5;
  }

  foo().then(data => console.log(data))

* - await - його можна використовувати тільки в асинхронній функції, яка оголошена оператором async. Цей оператор заморожує виконання усієї фукнції, до тих пір поки проміс, який ви напишете справа від оператору не виконається(тобто, не перейде у стан Fullfilled або Rejected). І як тільки проміс виконався - ми можемо повернути результат його виконання (і далі можемо робити з ним те ж саме, що і завжди в синхронному коді, наприклад, зберегти у змінну). Також, важливо памʼятати, якщо проміс виконається неуспішно, то await викине нам помилку, тому не забуваємо її оброблювати за допомогою try catch

*/

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data;
};

async function start() {
  try {
    const todosData = await fetchTodos();
    console.log(todosData);
  } catch (err) {
    console.log(err);
  }
}

start();

// fetchTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const fetchTodos = () => {
//   return fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return;
//     });
// };

// fetchTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
