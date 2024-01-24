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

const searchForm = document.querySelector(".search-form");
const articlesContainer = document.querySelector(".articles");
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

function appendArticlesMarkup(articles) {
  const markup = articles
    .map(
      ({ url, urlToImage, title, author, description }) => `
   <li>
     <a href="${url}" target="_blank" rel="noopener noreferrer">
       <article>
         <img src="${urlToImage}" alt="" width="480">
         <h2>${title}</h2>
         <p>Posted by: ${author}</p>
         <p>${description}</p>
       </article>
     </a>
   </li>`
    )
    .join("");

  articlesContainer.insertAdjacentHTML("beforeend", markup);
}
