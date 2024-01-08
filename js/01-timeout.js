/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log("До виклику setTimeout");

// setTimeout(() => {
//   console.log("1 - Всередині зворотного виклику для setTimeout");
// }, 2000);

// setTimeout(() => {
//   console.log("2 - Всередині зворотного виклику для setTimeout");
// }, 1000);

// console.log("Після виклику setTimeout");

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

// const logger = (time) => {
//   console.log(`Лог через ${time} мс, оскільки не скасували таймаут.`);
// };

// const timerId = setTimeout(logger, 2000, 2000);

// clearTimeout(timerId);

// console.log(timerId);

/**
 * Можливість передати параметри для колбеку
 */
// const id = setTimeout(
//   (name, country) => {
//     console.log(`Hello, my name is ${name}, I'm from ${country}`);
//   },
//   1000,
//   "Alex",
//   "Ukraine"
// );
