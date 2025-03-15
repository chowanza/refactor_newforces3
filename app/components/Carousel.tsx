import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../components/Carousel.css';
import { Navigation } from 'swiper/modules';

const LazyImage: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className = '',
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
    <motion.img
      ref={imgRef}
      src={loaded ? src : ''}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${
        loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    />
  );
};

const Carousel: React.FC = () => {
  const slides = [
    {
      image: '/contact-form.webp',
      title: 'Unmatched Quality:',
      description:
        'We utilize only the finest materials and employ skilled craftsmen to ensure exceptional results.',
    },
    {
      image: '/contact-form.webp',
      title: 'Trusted Expertise:',
      description:
        'Our team has years of experience in delivering top-notch construction and renovation projects.',
    },
    {
      image: '/contact-form.webp',
      title: 'Customer Satisfaction:',
      description:
        'We work closely with our clients to ensure their vision becomes a reality.',
    },
  ];

  return (
    <div className='relative flex items-center justify-center px-4 py-8'>
      {/* Custom Left Arrow */}
      <div className='swiper-button-prev-custom'></div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={30}
        slidesPerView={1}
        className='w-full max-w-4xl bg-white shadow-lg rounded-lg'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col md:flex-row items-center gap-4 p-6'>
              <LazyImage
                src={slide.image}
                alt={slide.title}
                className='w-full md:w-1/2 rounded-lg shadow-md'
              />
              <div className='text-center md:text-center md:w-1/2'>
                <h3 className='text-xl md:text-4xl font-bold text-norange'>
                  {slide.title}
                </h3>
                <p className='text-gray-700 mt-2 text-sm md:text-base'>
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Right Arrow */}
      <div className='swiper-button-next-custom'></div>
    </div>
  );
};

export default Carousel;
