import Link from "next/link";

export default function Home() {
  return (
    <section id="hero" className="min-h-screen grid place-items-center">
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-[900] text-base-white text-shadow-lg shadow-shadow-title leading-[80px] uppercase font-montserrat text-center">
          Coming Soon!!
        </h1>
        <Link
          href="/example"
          className="btn btn-type-default btn-red btn-size-default mx-auto mt-10"
        >
          see example
        </Link>
      </div>
    </section>
  );
}
