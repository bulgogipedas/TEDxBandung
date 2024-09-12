import Link from "next/link";

export default function Page() {
  return (
    <section className="page__container">
      <h1 className="text-title mt-20">Data fetching</h1>
      <div className="mt-10">
        <Link href="/example/typography" className="btn hover:opacity-60">
          <h2 className="text-subtitle">1.................Client Side</h2>
        </Link>
        <Link href="/example/button" className="btn hover:opacity-60">
          <h2 className="text-subtitle">2.................Server Side</h2>
        </Link>
        <Link href="/example/form-validation" className="btn hover:opacity-60">
          <h2 className="text-subtitle">3.................Form validation</h2>
        </Link>
        <Link href="/example/pokemon" className="btn hover:opacity-60">
          <h2 className="text-subtitle">4.................Fetching Pokemon</h2>
        </Link>
      </div>
    </section>
  );
}
