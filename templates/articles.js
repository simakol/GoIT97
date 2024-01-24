export default function appendArticlesMarkup(articles, articlesContainer) {
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
