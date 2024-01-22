/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 * Переписуємо на async/await
 */
import { fetchPokemon } from "./services/pockemonApi.js"; // named import
import renderPokemonCard from "./templates/pockemonCard.js"; // default import

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", onSearch);

async function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  try {
    const data = await fetchPokemon(searchQuery);
    renderPokemonCard(data, cardContainer);
  } catch (err) {
    console.log(err);
    onFetchError();
  } finally {
    form.reset();
  }

  // fetchPokemon(searchQuery)
  //   .then(renderPokemonCard)
  //   .catch(onFetchError)
  //   .finally(form.reset);
}

function onFetchError() {
  cardContainer.innerHTML = "";
  alert("Упс, щось пішло не так і ми не знайшли вашого покемона!");
}
