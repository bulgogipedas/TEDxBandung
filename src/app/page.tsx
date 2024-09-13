export default function Home() {
  return (
    <section id="hero" className="min-h-screen grid place-items-center">
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-[900] text-base-white text-shadow-lg shadow-shadow-title leading-[80px] uppercase font-montserrat text-center">
          Ideas
        </h1>
        <button className="btn btn-type-default btn-red btn-size-default mx-auto mt-10">
          click me
        </button>
      </div>
    </section>
  );
}
