const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

form.addEventListener("submit", onFormSubmit);
textarea.addEventListener("input", onTextareaInput);

populateTextarea();

/*
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */

function onFormSubmit(event) {
  event.preventDefault();

  console.log("Відправляємо форму");
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    textarea.value = savedMessage;
  }
}

// try {
//   console.log(JSON.parse('{"a": 5}'));
// } catch (err) {
//   console.log("Виникла помилка парсингу", err);
//   console.log(err);
// }

// console.log("end");
