import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/Carousel.css";
import { Navigation } from "swiper/modules";

const Carousel: React.FC = () => {
  const slides = [
    {
      image: "/contact-form.webp", // Replace with your image paths
      title: "Unmatched Quality:",
      description:
        "We utilize only the finest materials and employ skilled craftsmen to ensure exceptional results.",
    },
    {
      image: "/contact-form.webp", // Replace with your image paths
      title: "Trusted Expertise:",
      description:
        "Our team has years of experience in delivering top-notch construction and renovation projects.",
    },
    {
      image: "/contact-form.webp", // Replace with your image paths
      title: "Customer Satisfaction:",
      description:
        "We work closely with our clients to ensure their vision becomes a reality.",
    },
  ];

  return (
    <div className="relative flex items-center justify-center px-4 py-8">
      {/* Custom Left Arrow */}
      <div className="swiper-button-prev-custom"></div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full max-w-4xl bg-white shadow-lg rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center gap-4 p-6">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
              <div className="text-center md:text-center md:w-1/2">
                <h3 className="text-xl md:text-4xl font-bold text-norange">
                  {slide.title}
                </h3>
                <p className="text-gray-700 mt-2 text-sm md:text-base">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Right Arrow */}
      <div className="swiper-button-next-custom"></div>
    </div>
  );
};

export default Carousel;
