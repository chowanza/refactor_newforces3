import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  images: string[];
}

const LazyImage: React.FC<{
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
}> = ({ src, alt = '', className = '', onClick }) => {
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
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        WebkitMaskImage: 'linear-gradient(#000, rgba(0,0,0,0.6))',
        maskImage: 'linear-gradient(#000, rgba(0,0,0,0.6))',
      }}
    />
  );
};

const Selector: React.FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className='p-2 md:p-10'>
      {/* Imagen principal con Lazy Loading */}
      <LazyImage src={selectedImage} className='w-full h-full rounded-3xl' />

      {/* Miniaturas con Lazy Loading */}
      <div className='h-64 md:h-24 grid grid-cols-3 grid-rows-2 md:grid-cols-6 gap-2 mt-5'>
        {images.map((image, index) => (
          <LazyImage
            key={index}
            src={image}
            className='rounded-xl cursor-pointer size-24 justify-center mr-auto ml-auto'
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Selector;
