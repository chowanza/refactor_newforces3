import React, { useEffect, useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';

interface ComponentProps {
  number: string;
  icon: string;
  descripcion: string;
  imageSrc: string;
}

// Componente para carga diferida de imágenes
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

const Card: React.FC<ComponentProps> = ({
  number,
  icon,
  descripcion,
  imageSrc,
}) => {
  const sanitizedContent = DOMPurify.sanitize(descripcion);

  return (
    <motion.div
      className='max-w-md flex flex-col items-center p-4 rounded-3xl m-auto mb-20'
      style={{ height: '360px' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <LazyImage
        src={imageSrc}
        alt='Excavator'
        className='rounded-3xl rounded-b-none w-full h-auto'
      />

      <div
        className='relative -top-0 w-full overflow-visible text-7xl rounded-b-3xl'
        style={{ backgroundColor: '#001f4c', color: '#001f4c' }}
      >
        &nbsp;
      </div>

      <div className='shadow-2xl relative -top-20 bg-white flex flex-col items-center rounded-3xl p-5 pt-0 pb-3'>
        <div className='w-full flex items-center justify-between'>
          <span className='text-7xl font-bold text-norange'>{number}</span>
          <LazyImage
            src={icon}
            alt='Icon'
            className='relative bottom-10 w-2/5'
          />
        </div>

        <p
          className='relative -top-5 text-md text-gray-600'
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </div>
    </motion.div>
  );
};

export default Card;
