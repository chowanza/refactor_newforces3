import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ContactoModal from './ContactoModal';  // Asegúrate de importar el modal
import '../components/Carousel.css';

interface ServiceCarouselProps {
  title: string;
  services: {
    image: string;
    title: string;
    buttonText: string;
    buttonOnClick: () => void;
  }[];
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ title, services }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const openModal = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-center text-4xl font-bold text-norange mb-6">
        {title}
      </h2>

      {/* Botones personalizados de navegación */}
      <div className="swiper-button-prev-custom cursor-pointer">&larr;</div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
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
                  className="mt-4 px-6 py-2 bg-norange text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
                  onClick={() => openModal(service.title)}  // Abre el modal al hacer clic
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next-custom cursor-pointer">&rarr;</div>

      {/* Condición para mostrar el modal de contacto */}
      {isModalOpen && selectedProduct && (
        <ContactoModal
          selectedProduct={selectedProduct}
          closeContactPanel={closeModal}
        />
      )}
    </div>
  );
};

export default ServiceCarousel;
