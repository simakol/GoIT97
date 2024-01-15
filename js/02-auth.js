/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "33291155-7539ac0bf1c0d1be65bb6c22f";

const url = `${BASE_URL}?key=${API_KEY}&q=green+car`;

fetch(url)
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
