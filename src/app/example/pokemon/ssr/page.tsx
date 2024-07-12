async function getPokemon() {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
    method: "get",
  });

  return pokemons.json();
}

export default async function PokemonPage() {
  const pokemons = await getPokemon();

  return (
    <main>
      <h1>Pokemon</h1>
      {JSON.stringify(pokemons)}
    </main>
  );
}
