"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

async function LazyComponent() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
      method: "get",
    })
      .then(async (result) => {
        setPokemons(await result.json());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div>{JSON.stringify(pokemons)}</div>;
}
export default function PokemonPage() {
  return (
    <section className="page__container">
      <Link href="/example" className="flex items-center gap-5 mt-10">
        <FaArrowLeft size={30} />
        <h1 className="text-title">CSR</h1>
      </Link>
      <p className="text-paragraph">
        This page demonstrates client-side rendering by fetching data from the
        Pokémon API directly in the browser. Using React&apos;s useEffect and
        useState hooks, the data loaded <b>after</b> the component rendered
        first
      </p>
      <div className="mt-10">
        <Suspense fallback={<p>loading...</p>}>
          <LazyComponent />
        </Suspense>
      </div>
    </section>
  );
}
