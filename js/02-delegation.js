/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

// == антиприклад ==

const allBoxes = document.querySelectorAll(".box");
const container = document.querySelector(".container");

container.addEventListener("click", () => alert("Обробник контейнеру"));

for (const box of allBoxes) {
  box.addEventListener("click", (event) => {
    // console.log("color ->", event.currentTarget.dataset.color);

    //! stopPropagation
    // const isConfirm = confirm(
    //   `Відбувся клік на ${event.currentTarget.dataset.color} квадратику. Викликати stopPropagation?`
    // );

    // if (isConfirm) {
    //   event.stopPropagation(); // зупиняє сплиття події
    // }

    //! stopImmediatePropagation
    const isConfirm = confirm(
      `Відбувся клік на ${event.currentTarget.dataset.color} квадратику. Викликати stopImmediatePropagation?`
    );

    if (isConfirm) {
      event.stopImmediatePropagation(); // зупиняє сплиття події та зупиняє інші обробники на поточному елементі на однаковий тип події
    }
  });

  box.addEventListener("click", () => alert("Другий обробник!"));
}

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

// const container = document.querySelector(".container");

// container.addEventListener("click", handleBoxClick);

// function handleBoxClick(event) {
//   if (event.target === event.currentTarget) {
//     return;
//   }

//   //   if (!event.target.classList.contains("box")) {
//   //     return;
//   //   }

//   console.log("event.currentTarget -> ", event.currentTarget);
//   console.log("event.target -> ", event.target);
//   console.log("color ->", event.target.dataset.color);
// }
