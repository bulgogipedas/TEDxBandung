export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="min-h-screen grid place-items-center bg-success-200"
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-[900] text-base-white text-shadow-lg shadow-shadow-title leading-[80px] uppercase font-montserrat text-center">
            Ideas Worth <br /> Spreading
          </h1>
          <button className="btn w-fit mx-auto btn-base-white mt-10">
            Upcoming Events
          </button>
        </div>
      </section>
    </main>
  );
}
