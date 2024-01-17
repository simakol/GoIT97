/**
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

// const BASE_URL = "https://65a8136794c2c5762da83d99.mockapi.io";
// const ENDPOINT = "books";

// function checkResponse(res) {
//   if (!res.ok) {
//     throw new Error(res.statusText);
//   }
//   return res.json();
// }

/**
 * Read (GET)
 */

// function fetchBooks() {
//   return fetch(`${BASE_URL}/${ENDPOINT}`).then(checkResponse);
// }

// function fetchBookById(bookId) {
//   return fetch(`${BASE_URL}/${ENDPOINT}/${bookId}`).then(checkResponse);
// }

// fetchBooks().then(console.log).catch(console.error);

// fetchBookById(2).then(console.log).catch(console.error);
// fetchBookById(4).then(console.log).catch(console.error);

/**
 * Create (POST)
 */

// function addBook(book) {
//   return fetch(`${BASE_URL}/${ENDPOINT}`, {
//     method: "POST",
//     body: JSON.stringify(book),
//     headers: {
//       "Content-Type": "application/json", // MIME-type
//     },
//   }).then(checkResponse);
// }

// addBook({
//   title: "Тестова книга з CSS",
//   author: "Я",
//   genres: ["CSS"],
//   Rating: 9,
// })
//   .then((book) => {
//     console.log("Прийшла відповідь від бекенда можна малювати");
//     console.log(book);
//   })
//   .catch((error) => console.log(error));

// addBook({
//   title: "Тестова книга з HTML",
//   author: "Я",
//   genres: ["HTML"],
//   Rating: 7,
// }).then((book) => {
//   console.log("Прийшла відповідь від бекенда можна малювати");
//   console.log(book);
// });

/**
 * Update (PUT/PATCH)
 */

/*
все залежить від серверу, тому читайте документацію!

PUT - повне оновлення ресурсу
{
  title: "title 1",
  rating: 5,
  author: "author 1"
}

PUT -> body: { rating: 7 }

DB: { rating: 7 }

PATCH - часткове оновлення ресурсу
{
  title: "title 1",
  rating: 5,
  author: "author 1"
}

PATCH -> body: { rating: 7 }

DB: {  
  title: "title 1",
  rating: 7,
  author: "author 1" 
    }
*/

// function updateBookById(update, bookId) {
//   return fetch(`${BASE_URL}/${ENDPOINT}/${bookId}`, {
//     method: "PUT",
//     body: JSON.stringify(update),
//     headers: {
//       "Content-Type": "application/json", // MIME-type
//     },
//   }).then(checkResponse);
// }

// updateBookById({ title: "Велика нова книга по NODEJS" }, 19).then((res) => {
//   console.log("Книга успішно оновлена!");
//   console.log(res);
// });

// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: "Манго" }, 3);

/**
 * Delete (DELETE)
 */

// function removeBook(bookId) {
//   return fetch(`${BASE_URL}/${ENDPOINT}/${bookId}`, {
//     method: "DELETE",
//   }).then(checkResponse);
// }

// removeBook(15).catch((err) => {
//   console.log("Такої книги не існує!");
//   console.log(err);
// });

//! =================

const BASE_URL = "http://api.weatherapi.com/v1";
const ENDPOINT = "forecast.json";
const API_KEY = "66f9e81543404d02beb160521230808";

const refs = {
  form: document.getElementById("form"),
  resultContainer: document.getElementById("resultContainer"),
};

refs.form.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const city = form.elements.city.value;

  serchWeatherByCity(city)
    .then((data) => {
      const forecast = data.forecast.forecastday;

      let markup = "";
      for (const day of forecast) {
        console.log(day);
        markup += createWeatherCardMarkup(day);
      }

      refs.resultContainer.innerHTML = markup;
    })
    .finally(() => form.reset());
}

function serchWeatherByCity(city) {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: city,
    days: 3,
  });
  
  //key=${API_KEY}&q=${city}&days=3
  return fetch(`${BASE_URL}/${ENDPOINT}?${urlParams}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

function createWeatherCardMarkup({
  date,
  day: {
    avgtemp_c,
    condition: { text },
  },
}) {
  return `
  <div>
    <h2>${date}</h2>
    <p>${text}</p>
    <p>Av temp: ${avgtemp_c} C</p>
  </div>`;
}
