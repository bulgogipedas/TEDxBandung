async function getPokemon() {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
    method: "get",
  });

  return pokemons.json();
}

async function getJsonPlaceholder() {
  const placeholders = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "get",
    },
  );

  return placeholders.json();
}

export default async function PokemonPage() {
  // fetching secara paralel, tidak berurutan
  // cocok digunakan jika tidak ada ketergantungan data
  const pokemons = getPokemon();
  const placeholders = getJsonPlaceholder();

  const [pokemon, placeholder] = await Promise.all([pokemons, placeholders]);

  return (
    <main>
      <h1>Pokemon</h1>
      <p>{JSON.stringify(pokemon)}</p>
      <h1>Placeholder</h1>
      <p>{JSON.stringify(placeholder)}</p>
    </main>
  );
}
