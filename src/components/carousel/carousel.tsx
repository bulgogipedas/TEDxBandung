"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

const ImageCarousel = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const slideNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const images = [
    "/images/image_placeholder.png",
    "/images/image_placeholder.png",
    "/images/image_placeholder.png",
    "/images/image_placeholder.png",
  ]; // Replace with your actual image URLs

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      loop
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: true,
      }}
      pagination={{
        clickable: true,
        el: "#containerForBullets",
        type: "bullets",
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="image__cover__wrapper">
          <div className="absolute top-5 right-5 z-30">
            <p className="text-paragraph">DD/MM/YYYY</p>
          </div>
          <Image
            src={image}
            alt="image"
            className="featured__image"
            width={100}
            height={100}
          />
          <div className="absolute left-5 bottom-5 z-30">
            <h3 className="md:text-heading text-subheading">
              The Brave and The Brilliant
            </h3>
          </div>
        </SwiperSlide>
      ))}
      <div className="flex items-center justify-between mt-3">
        <div id="containerForBullets"></div>
        <button onClick={slideNext}>
          <FaArrowRight
            className="text-[#667085] hover:opacity-70 transition duration-200"
            size={20}
          />
        </button>
      </div>
    </Swiper>
  );
};

export default ImageCarousel;
