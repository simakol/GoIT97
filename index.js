/**
 * Отримуємо ключ https://newsapi.org/
 * Запити робитимемо на http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 * dd82ff3604224bf1b224da3ef75c9135
 * Пагінація: номер групи та кількість елементів групи
 * - Завантажуємо статті при самітті форми
 * - Завантажуємо статті при натисканні на кнопку «Завантажити ще»
 * - Оновлюємо групу в параметрах запиту
 * - Рендерим статті
 * - Скидання значення при пошуку за новим критерієм
 * - Показуємо спинер поки йде запит
 */

import appendArticlesMarkup from "./templates/articles.js";
import { getNews } from "./services/newsApi.js";
import buttonService from "./services/buttonService.js";

const refs = {
  searchForm: document.querySelector(".search-form"),
  articlesContainer: document.querySelector(".articles"),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  preloader: document.getElementById("preloader"),
};

// обʼєкт з інформацією, яка нам потрібна для запиту
const queryParams = {
  query: "",
  page: 1,
  maxPage: 0,
  pageSize: 5,
};

/*
 1. вішаємо слухач подій на сабміт форми
  1.1. превент дефолт
  1.2. отримуємо значення поля інпут
  1.3. робимо перевірки на валідність поля
  1.4. посилаємо запит на сервер з нашим значенням
  1.5. отримуємо дані з серверу і додаємо їх на сторінку
*/

/*
 1. повісити слухач по кліку на кнопку завантажити більше (тоді, коли кнопка покажеться)
 2. робимо інший запит на сервер вказуючи нову сторінку (створимо змінну для каунтеру сторінок)
 3. поки йде запит - показувати лоадер, коли запит закінчився - прибирати лоадер + відключити кнопку під час запиту (disabled)
 4. відмалювати розмітку
 5. перевіряємо, якщо у нас кінець колекції - то ховаємо кнопку + прибирати слухач

*/

refs.searchForm.addEventListener("submit", handleSearch);

async function handleSearch(event) {
  event.preventDefault();

  refs.articlesContainer.innerHTML = ""; // очищуємо контейнер з відповідями перед новим запитом
  queryParams.page = 1; // коли робимо запит на нову тему новин - сторніки очищаються

  const form = event.currentTarget;
  queryParams.query = form.elements.query.value.trim(); // записуємо у обʼєект запит користувача

  // перевіряємо, якщо запит пустий - виходимо з функції
  if (!queryParams.query) {
    return;
  }

  try {
    const { articles, totalResults } = await getNews(queryParams); // посилаємо запит на сервер

    queryParams.maxPage = Math.ceil(totalResults / queryParams.pageSize); // рахуємо і записуємо в обʼєкт максимальну кількість сторінок в нашому запиті, для цього ділимо кількість результатів на кількість обʼєктів, які ми отримуємо за один запит + округляємо догори

    appendArticlesMarkup(articles, refs.articlesContainer); // малюємо розмітку

    // перевірка на те, чи показувати кнопку при першому запиті (при сабміті форми), якщо кількість обʼєктів відповіді більша за нуль та кількість обʼєктів відповіді не рівна загальної кількості результатів, то показуємо кнопку. Інакше - не показуємо
    if (articles.length > 0 && articles.length !== totalResults) {
      buttonService.show(refs.loadMoreBtn); // показуємо кнопку, якщо є результати від серверу і якщо ми не показали всі резульати які є (наприклад, якщо тотал резалст = 100 і кількість артіклів = 100)
      refs.loadMoreBtn.addEventListener("click", handleLoadMore);
    } else {
      buttonService.hide(refs.loadMoreBtn);
    }
  } catch (err) {
    console.log(err);
  } finally {
    form.reset(); // зкидуємо поля форми
  }
}

// обробка натискання на кнопку завантажити більше
async function handleLoadMore() {
  queryParams.page += 1; // перед новим запитом збільшуємо номер сторінки коллекції
  // перед початком запиту - показуємо лоадер і блокуємо кнопку
  buttonService.disable(refs.loadMoreBtn, refs.preloader);

  try {
    const { articles } = await getNews(queryParams); // робимо запит на наступну сторінку новин

    appendArticlesMarkup(articles, refs.articlesContainer); //малюємо розмітку
  } catch (err) {
    console.log(err);
  } finally {
    // після запиту - ховаємо лоадер і розблоковуємо кнопку
    buttonService.enable(refs.loadMoreBtn, refs.preloader);

    // і обовʼязково після натискання на кнопку та закінчення запиту перевіряємо, якщо ми зараз знаходимось на останній сторінці - то ховаємо кнопку і видаляємо обробник подій!
    if (queryParams.page === queryParams.maxPage) {
      buttonService.hide(refs.loadMoreBtn);
      refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
    }
  }
}
