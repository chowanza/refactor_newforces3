import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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

// Componente de carga diferida de imágenes
const LazyImage: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : ''}
      alt={alt}
      className={`${className} transition-opacity duration-700 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
};

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({
  title,
  services,
}) => {
  return (
    <div className='relative flex flex-col items-center justify-center px-4 py-8'>
      <h2 className='text-center text-4xl font-bold text-norange mb-6'>
        {title}
      </h2>

      {/* Botones personalizados de navegación */}
      <div className='swiper-button-prev-custom cursor-pointer'>&larr;</div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className='w-full max-w-4xl bg-white shadow-lg rounded-lg'
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col md:flex-row items-center gap-4 p-6'>
              <LazyImage
                src={service.image}
                alt={service.title}
                className='w-full md:w-1/2 rounded-lg shadow-md'
              />
              <div className='text-center md:text-center md:w-1/2'>
                <h3 className='text-xl md:text-4xl font-bold text-norange'>
                  {service.title}
                </h3>
                <button
                  className='mt-4 px-6 py-2 bg-norange text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300'
                  onClick={service.buttonOnClick}
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='swiper-button-next-custom cursor-pointer'>&rarr;</div>
    </div>
  );
};

export default ServiceCarousel;
