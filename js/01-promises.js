/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// promis - це обʼєкт, який представляє результат асинхронної операції (створення промісу є синхронною операцією, а його обробка - асинхронною (мікрозадача))

/*
Проміс має 3 стани:
- Pending - стан створення промісу, означає, що проміс поки що не виконався
- Fullfilled - проміс виконався успішно (обролюється методом .then())
- Rejected - проміс виконався неуспішно (обролюється методом .catch())

-- Також між програмістами ви можете почути термін Settled - означає, що проміс виконався (тобто, два стани: Fullfilled, Rejected)
*/

const promise = new Promise((resolve, reject) => {
  //* resolve - фукнція, яка переведе проміс у стан Fullfilled
  //* reject - функція, яка переведе проміс у стан Rejected

  const isPromiseFullfilled = Math.random() > 0.5;

  setTimeout(() => {
    if (isPromiseFullfilled) {
      resolve("Проміс виконався успішно!"); // переводимо проміс у стан Fullfilled
    } else {
      reject("Проміс виконався неуспішно!"); // переводимо проміс у стан Rejected
    }
  }, 1000);
});

console.log(promise); // побачимо обʼєкт промісу у стані пендінг, наголошую увагу на тому, що витягнути результат виконання промісу у синхронний код не можна!!! (можна зробити імітацію через async/await, але це розглянемо пізніше)

// promise
//   .then((value) => {
//     console.log(`✅ ${value}`);
//   })
//   .catch((err) => {
//     console.log(`❌ ${err}`);
//   })
//   .finally(() => {
//     console.log("Проміс завершився!");
//   });

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */


//! Важливо запамʼятати, що в якості значення параметру колбек фукнції then (value) приходить те, що ви передали у функцію resolve, або те, що повернув (return) попердній then в вашому ланцюгу!!!
// then потрібен не тільки для обробки успішного результату виконання асинхронного коду, а й задля імітації синхронності виконання асинхронного коду.
promise
  .then((value) => {
    console.log(`✅ ${value}`);
    return value
  })
  .then((value) => {
    console.log(1, value)
    return 10
  })
  .then((value) => {
    console.log(2, value)
    return "Hello world"
  })
  .then((value) => {
    console.log(3, value)
  })
  .catch((err) => {
    console.log(`❌ ${err}`);
  })
  .finally(() => {
    console.log("Проміс завершився!");
  });