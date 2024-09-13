import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

import { AboutCard } from "@/components/card";
import { ImageCarousel } from "@/components/carousel";

export default function Home() {
  return (
    <div>
      <section id="hero" className="min-h-screen page__container relative">
        <div className="absolute inset-0 z-20 backdrop"></div>
        <div className="absolute inset-0 z-10 overflow-hidden">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video autoPlay muted loop className="hero__video">
            <source src="/video/home/videoplayback.webm" type="video/webm" />
          </video>
        </div>
        <div className="absolute md:left-16 md:bottom-16 left-10 bottom-10 z-30 lg:w-2/5 w-2/3">
          <h1 className="text-title text-white mb-3">Lorem Ipsum</h1>
          <p className="text-paragraph text-white mb-7">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan,
          </p>
          <div className="button-group flex items-center gap-3 flex-wrap">
            <Link
              href="/example"
              className="btn btn-type-default btn-red btn-size-default"
            >
              <p className="font-semibold">Daftar Sekarang</p>
            </Link>
            <Link
              href="#flashback"
              scroll
              className="btn btn-type-default btn-red btn-size-default"
            >
              <p className="font-semibold">Cari tahu lebih</p>{" "}
              <FaArrowDown size={20} />
            </Link>
          </div>
        </div>
      </section>
      <section
        id="flashback"
        className="grid lg:grid-cols-2 grid-cols-1 section__container page__container gap-10"
      >
        <div>
          <h2 className="text-heading">Jejak Inspirasi</h2>
          <h3 className="text-subheading mt-5">Kilas Balik Acara Kami</h3>
          <p className="text-paragraph mt-10">
            (Paragraph) Vorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
            <br />
            <br />
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent Class aptent taciti
            sociosqu ad litora Class aptent taciti sociosqu ad litora
          </p>
        </div>
        <div className="lg:col-start-2 row-start-1">
          <ImageCarousel />
        </div>
      </section>
      <section
        id="perspective"
        className="grid lg:grid-cols-2 grid-cols-1 section__container page__container gap-10"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-rows-2 gap-4">
            <div className="image__cover__wrapper">
              <Image
                src="/images/image_placeholder.png"
                alt="placeholder image"
                width={150}
                height={150}
                className="object-contain featured__image"
              />
            </div>
            <div className="image__cover__wrapper">
              <Image
                src="/images/image_placeholder.png"
                alt="Image 2"
                width={150}
                height={150}
                className="object-contain featured__image"
              />
            </div>
          </div>
          <div className="bg-gray-200 image__cover__wrapper">
            <Image
              src="/images/image_placeholder.png"
              alt="Image 3"
              width={150}
              height={150}
              className="featured__image"
            />
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-heading">Merubah Perspektif</h2>
            <h3 className="text-subheading mt-5">
              Pengalaman yang Harus Anda Rasakan
            </h3>
            <p className="text-paragraph mt-10">
              (Paragraph) Vorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nunc vulputate libero et velit interdum, ac aliquet odio
              mattis. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
              turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam
              quam, semper iaculis condimentum ac, vestibulum eu nisl.
              <br />
              <br />
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent Class aptent taciti
              sociosqu ad litora Class aptent taciti sociosqu ad litora
            </p>
          </div>
        </div>
      </section>
      <section className="page__container section__container mt-10">
        <h2 className="text-heading text-center mb-20">Gotong Royong Kami!</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <AboutCard
            image={
              <Image
                src="/images/home/home_volunteer.png"
                alt="logo"
                width={70}
                height={70}
                className="card-about__image"
              />
            }
            title="Volunteer"
            body="(Paragraph) Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per"
          />
          <AboutCard
            image={
              <Image
                src="/images/home/home_speaker-submission.png"
                alt="logo"
                width={70}
                height={70}
                className="card-about__image"
              />
            }
            title="Volunteer"
            body="(Paragraph) Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per"
          />
          <AboutCard
            image={
              <Image
                src="/images/home/home_partnering.png"
                alt="logo"
                width={70}
                height={70}
                className="card-about__image"
              />
            }
            title="Volunteer"
            body="(Paragraph) Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per"
          />
        </div>
      </section>
      <section className="page__container section__container">
        <h2 className="text-heading mb-5">
          What is <span className="text-red-500">TEDx</span>
        </h2>
        <p className="text-paragraph mb-5">
          In the spirit of ideas worth spreading, TED has created a program
          called TEDx. TEDx is a program of local, self-organized events that
          bring people together to share a TED-like experience.  Our event is
          called TEDxBandung, where x = independently organized TED event. At
          our TEDxBandungevent, TEDTalks video and live speakers will combine to
          spark deep discussion and connection in a small group.  The TED
          Conference provides general guidance for the TEDx program, but
          individual TEDx events, including ours, are self-organized.
        </p>
        <p>
          Find out more about TEDx program :{" "}
          <Link className="hover:text-red-500" href="https://tedxbandung.com">
            TEDx Bandung
          </Link>
        </p>
      </section>
    </div>
  );
}
