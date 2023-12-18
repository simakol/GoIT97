/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);

// function onParentClick(event) {
//   console.log("=== onParentClick ===");
//   console.log("event.currentTarget -> ", event.currentTarget);
//   console.log("event.target -> ", event.target);
//   console.log("========================");
// }

// function onChildClick(event) {
//   console.log("=== onChildClick ===");
//   console.log("event.currentTarget -> ", event.currentTarget);
//   console.log("event.target -> ", event.target);
//   console.log("========================");
// }

// function onInnerChildClick(event) {
//   console.log("=== onInnerChildClick ===");
//   console.log("event.currentTarget -> ", event.currentTarget);
//   console.log("event.target -> ", event.target);
//   console.log("========================");
// }

// == пояснення процесу занурення і сплиття (антиприклад) ==

// const allElems = document.querySelectorAll("*");

// for (const elem of allElems) {
//   elem.addEventListener("click", () =>
//     alert(`Сплиття: ${elem.tagName} | ${elem.textContent}`)
//   );
//   elem.addEventListener(
//     "click",
//     () => alert(`Занурення: ${elem.tagName} | ${elem.textContent}`),
//     true
//   );
// }
