async function fetchPokemon(pokemonId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  return response.json();
}

export { fetchPokemon }; // named export
