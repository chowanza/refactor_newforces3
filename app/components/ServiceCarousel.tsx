import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../components/Carousel.css";
import { Navigation } from "swiper/modules";

// Define the prop interface for ServiceCarousel
interface ServiceCarouselProps {
  title: string;
  services: {
    image: string;
    title: string;
    buttonText: string;
    buttonOnClick: () => void; // Function to handle button click
  }[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ title, services }) => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-center text-4xl font-bold text-norange mb-6">{title}</h2>

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
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center gap-4 p-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
              <div className="text-center md:text-center md:w-1/2">
                <h3 className="text-xl md:text-4xl font-bold text-norange">
                  {service.title}
                </h3>
                <button
                  className="mt-4 px-6 py-2 bg-norange text-white rounded-lg"
                  onClick={service.buttonOnClick}
                >
                  {service.buttonText}
                </button>
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

export default ServiceCarousel;
