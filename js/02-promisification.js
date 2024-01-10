/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// const makeOrder = (dish) => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Ваше замовлення: ${dish}`);
//       }

//       reject("❌ Упс, у нас закінчилися продукти");
//     }, 1000);
//   });
// };

// makeOrder("пиріжок")
//   .then((result) => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   });

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

const prepareDish = (dish) => {
  const passed = Math.random() > 0.5;

  return passed
    ? Promise.resolve(`✅ Ваше замовлення: ${dish}`)
    : Promise.reject("❌ Упс, у нас закінчилися продукти");
};

prepareDish("пиріжок")
  .then((result) => {
    console.log("onMakeOrderSuccess");
    console.log(result);
  })
  .catch((error) => {
    console.log("onMakeOrderError");
    console.log(error);
  });
