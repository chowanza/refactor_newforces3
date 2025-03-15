import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  iconSrc: string; // Image source for the icon
  title: string; // Title of the service
  description: string; // Description of the service
}

// Componente de carga diferida de imágenes
const LazyImage: React.FC<{
  src: string;
  alt?: string;
  className?: string;
}> = ({ src, alt = '', className }) => {
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
      className={className}
      style={{ opacity: loaded ? 1 : 0 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    />
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <motion.div
      className='flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='w-32 h-32 flex items-center justify-center rounded-full bg-gray-100'>
        <LazyImage src={iconSrc} alt='icon' className='w-20 h-20' />
      </div>

      <h3 className='text-lg md:text-xl font-bold text-norange mt-4'>
        {title}
      </h3>
      <p className='text-gray-700 text-xs md:text-sm mt-2'>{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
