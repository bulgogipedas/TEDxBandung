import Image from "next/image";
import HeroBg from "@/assets/images/home/bg-hero.png"

export default function Home() {
  return (
    <main className="bg-base-black">
      <section id="hero" className="min-h-screen relative">
        <Image
          src={HeroBg.src}
          alt="hero"
          className="absolute inset-0 object-cover z-10"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />
        <div className="flex flex-col justify-center z-20 relative pt-44">
          <h1 className="hero-title">
            Ideas Worth <br /> Spreading
          </h1>
          <button className="btn w-fit mx-auto btn-base-white mt-10 font-plus-jakarta-sans">
            Upcoming Events
          </button>
        </div>
      <div className="font-plus-jakarta-sans text-center relative z-20 mt-32">
        <h2 className="text-headline-2 space-x-3 font-bold tracking-[2px]">
          <span className="text-brand-500">TEDx</span>
          <span className="text-base-white">Bandung</span>
        </h2>
        <p className="text-base-white tracking-[2px]">
          We are not just a city, we are a vibrant tapestry of <br />
          cultures, ideas, and dreams
        </p>
      </div>
      </section>
    </main>
  );
}
