/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.toLowerCase()}`).then(
    (resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    }
  );
}

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const query = form.elements.query.value;

  console.log(query);

  fetchPokemon(query)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());

  //.then(data => renderPokemonCard(data))
}

function renderPokemonCard({ name, sprites, weight, height, abilities }) {
  const abilityListItems = abilities
    .map(
      (ability) => `<li class="list-group-item">${ability.ability.name}</li>`
    )
    .join("");
  console.log(abilityListItems);

  const markup = `<div class="card">
   <div class="card-img-top">
     <img src="${sprites.front_default}" alt="${name}">
   </div>
   <div class="card-body">
     <h2 class="card-title">Ім'я: ${name}</h2>
     <p class="card-text">Вага: ${weight} g</p>
     <p class="card-text">Зростання: ${height} ft</p>

     <p class="card-text"><b>Уміння</b></p>
     <ul class="list-group">${abilityListItems}</ul>
   </div>
</div>`;
  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert("Упс, щось пішло не так і ми не знайшли вашого покемона!");
  console.error(error);
}
