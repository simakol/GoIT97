/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems() {
//   let result = "";

//   for (const i in arguments) {
//     result += `${Number(i) + 1} - ${arguments[i]}\n`;
//   }

//   console.log(result);
// }

// logItems("Mango", "Poly", "Ajax");
// logItems("🍎", "🍇", "🍑", "🍌", "🍋");

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
//  */

// function printInfo() {
//   console.log(arguments);
//   const names = arguments[0].split(",");
//   const phones = arguments[1].split(",");
//   console.log(names);
//   console.log(phones);

//   let result = "";

//   for (const i in names) {
//     result += `${names[i]}: ${phones[i]}\n`;
//   }

//   console.log(result);
// }

// printInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const resultHours = String(hours).padStart(2, 0);
//   const resultMinutes = String(minutes).padStart(2, 0);

//   return `${resultHours}:${resultMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// console.log(formatTime(10)); // "00:10"

//! ==============================
// повернути суму всіх чисел по порядку до параметру n

// ітеративний спосіб
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumTo(5)); // 1 + 2 + 3 + 4 + 5 = 15

// рекурсивний спосіб
// function sumTo(n) {
//   if (n === 0) {
//     return 0;
//   }

//   return n + sumTo(n - 1);
// }

// console.log(sumTo(5)); // 1 + 2 + 3 + 4 + 5 = 15

/*
stack: sumTo(3), sumTo(2), sumTo(1), sumTo(0) 

=======
1. function sumTo(3) {
  if (3 === 0) {
    return 0;
  }

  return 3 + sumTo(3 - 1); // 3 + 3
}

2. function sumTo(2) {
  if (2 === 0) {
    return 0;
  }

  return 2 + sumTo(2 - 1); // 2 + 1
}
3.  function sumTo(1) {
  if (1 === 0) {
    return 0;
  }

  return 1 + sumTo(1 - 1); // 1 + 0
}
4.  function sumTo(0) {
  if (0 === 0) {
    return 0;
  }

  return 1 + sumTo(1 - 1);
}


*/

// // пошук нного числа фібоначі

// // ітеративний спосіб

// function findFibonacci1(n) {
//   let fib1 = 0;
//   let fib2 = 1;

//   if (n === 0) return [fib1];

//   if (n === 1) return [fib1, fib2];

//   const fibArr = [fib1, fib2];

//   for (let i = 1; i <= n; i += 1) {
//     const fib = fib1 + fib2;
//     fibArr.push(fib);

//     fib1 = fib2;
//     fib2 = fib;
//   }

//   return fibArr
// }

// console.log(findFibonacci1(5))
// console.log(findFibonacci1(10))
// console.log(findFibonacci1(20))

// // рекурсивний метод

// function findFibonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return findFibonacci(n - 1) + findFibonacci(n - 2);
// }

// console.log(findFibonacci(5));
// console.log(findFibonacci(10));
// console.log(findFibonacci(20));

// !=======

// const arr = [1, 2, 3];
// console.log(arr);
// const revercedArr = arr.toReversed(); // не мутує оригінальний масив! на відміну від старого методу .reverse()
// console.log(revercedArr);
// console.log(arr);
