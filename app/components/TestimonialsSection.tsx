import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'flowbite-react';

interface Testimonial {
  name: string;
  title: string;
  testimonial: string;
  imageUrl: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

// Componente para carga diferida de imágenes
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

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  return (
    <section className='px-6 py-20 bg-gray-100'>
      <p className='text-center text-gray-700'>New Force Construction</p>
      <h2 className='text-center text-4xl font-bold text-norange mb-8'>
        What our clients say
      </h2>

      <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='w-full flex flex-col justify-between items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300'
          >
            <p className='text-sm text-gray-700 text-justify'>
              "{testimonial.testimonial}"
            </p>
            <div className='flex items-center mt-4'>
              <LazyImage
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className='w-12 h-12 rounded-full mr-3'
              />
              <div>
                <h5 className='text-lg text-norange font-semibold'>
                  {testimonial.name}
                </h5>
                <p className='text-sm text-gray-500'>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
