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
  // fetching sekuensial, pokemon dulu lalu placeholder
  // cocok digunakan jika pemanggilan api kedua membutuhkan data dari api pertama
  const pokemons = await getPokemon();
  const placeholders = await getJsonPlaceholder();

  return (
    <main>
      <h1>Pokemon</h1>
      <p>{JSON.stringify(pokemons)}</p>
      <h1>Placeholder</h1>
      <p>{JSON.stringify(placeholders)}</p>
    </main>
  );
}
