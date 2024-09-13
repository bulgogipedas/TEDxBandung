"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { useDebouncedValue } from "@/hooks";

export default function Debounce() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState<{ title: string }[]>([]);
  const searchFunction = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${debouncedValue}`,
      {
        method: "get",
      },
    );

    if (!res.ok) return;

    setData(await res.json());
  };

  const { debouncedValue, isLoading } = useDebouncedValue(searchValue, 1000);

  useEffect(() => {
    console.log("debouncedvalue : ", debouncedValue);
    if (debouncedValue.length > 0) searchFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <section className="page__container">
      <Link href="/example" className="flex items-center gap-5 mt-10">
        <FaArrowLeft size={30} />
        <h1 className="text-title">Debounce</h1>
      </Link>
      <p className="text-subtitle">
        debounce will start fetching if you stop typing
      </p>
      <form className="mt-10">
        <input
          type="text"
          className="input input-primary"
          placeholder="type: sunt"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <div className="posts mt-5">
        <ul className={`${isLoading ? "opacity-30" : ""}`}>
          {data.length > 0 ? (
            data.map((post, index) => {
              return (
                <li key={index}>
                  {index + 1}. {post.title}
                </li>
              );
            })
          ) : (
            <p className="my-5">data not found</p>
          )}
        </ul>
        <button
          data-loading={isLoading}
          className="btn btn-type-default btn-red mt-5"
        >
          button
        </button>
      </div>
    </section>
  );
}
