// default export

export default function renderPokemonCard(
  { name, sprites, weight, height, abilities },
  cardContainer
) {
  const abilityListItems = abilities
    .map((ability) => `<li class="list-group-item">${ability.name}</li>`)
    .join("");

  const markup = `<div class="card">
     <div class="card-img-top">
       <img src="${sprites.front_default}" alt="${name}">
     </div>
     <div class="card-body">
       <h2 class="card-title">Ім'я: ${name}</h2>
       <p class="card-text">Вага: ${weight}</p>
       <p class="card-text">Зростання: ${height}</p>
  
       <p class="card-text"><b>Уміння</b></p>
       <ul class="list-group">${abilityListItems}</ul>
     </div>
  </div>`;
  cardContainer.innerHTML = markup;
}
