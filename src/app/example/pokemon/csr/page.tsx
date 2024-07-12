"use client";

import { Suspense, useEffect, useState } from "react";

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
    <main>
      <h1>Pokemons</h1>
      <Suspense fallback={<p>loading...</p>}>
        <LazyComponent />
      </Suspense>
    </main>
  );
}
