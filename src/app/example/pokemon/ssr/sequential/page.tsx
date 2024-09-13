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
  // fetching sekuensial, pokemon dulu lalu placeholder
  // cocok digunakan jika pemanggilan api kedua membutuhkan data dari api pertama
  const pokemons = await getPokemon();
  const placeholders = await getJsonPlaceholder();

  return (
    <section className="page__container">
      <Link href="/example" className="flex items-center gap-5 mt-20">
        <FaArrowLeft size={30} />
        <h1 className="text-title">Sequential fetching</h1>
      </Link>
      <p className="text-paragraph">
        Sequential fetching will fetch data from both endpoints. The{" "}
        <b>data has to be in order</b> and will be fetched in sequence.
        Important to use if you have dependency in other data fetching
      </p>
      <p className="mt-10">{JSON.stringify(pokemons)}</p>
      <h1>Placeholder</h1>
      <p>{JSON.stringify(placeholders)}</p>
    </section>
  );
}
