import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'flowbite-react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  iconSrc: string; // Image source for the icon
  title: React.ReactNode; // Text below the card
}

const LazyImage: React.FC<{
  src: string;
  alt?: string;
  className?: string;
}> = ({ src, alt = '', className = '' }) => {
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

const InfoCard: React.FC<InfoCardProps> = ({ iconSrc, title }) => {
  return (
    <motion.div
      className='flex flex-col items-center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Card className='flex flex-col items-center justify-center h-40 w-60 shadow-md rounded-lg border border-gray-200'>
        <div className='w-32 h-32 flex items-center justify-center rounded-full'>
          <LazyImage
            src={iconSrc}
            alt='icon'
            className='w-25 h-25 border-gray-200'
          />
        </div>
      </Card>
      <p className='mt-4 text-center text-base md:text-lg font-medium text-gray-700'>
        {title}
      </p>
    </motion.div>
  );
};

export default InfoCard;
