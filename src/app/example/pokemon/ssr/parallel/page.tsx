import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

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
    <section className="page__container">
      <Link href="/example" className="flex items-center gap-5 mt-10">
        <FaArrowLeft size={30} />
        <h1 className="text-title">Parallel fetching</h1>
      </Link>
      <p className="text-paragraph">
        Parallel fetching will fetch data from both endpoints. The data
        doesn&apos;t have to be in order and will be fetched in parallel. So
        there is no dependency on each other.
      </p>
      <p className="mt-10">{JSON.stringify(pokemon)}</p>
      <h1>Placeholder</h1>
      <p>{JSON.stringify(placeholder)}</p>
    </section>
  );
}
