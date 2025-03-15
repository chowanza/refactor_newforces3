import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Mission.css';

// Define the props interface
interface MissionProps {
  title: string;
  text: string;
  image: string;
  scale?: number;
}

// Componente para carga diferida de la imagen
const LazyImage: React.FC<{ src: string; alt?: string; scale?: number }> = ({
  src,
  alt = '',
  scale = 1,
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
      className='transition-opacity duration-500'
      style={{
        opacity: loaded ? 1 : 0,
        transform: `scale(${scale})`,
      }}
      initial={{ opacity: 0, scale: scale * 0.9 }}
      animate={{ opacity: loaded ? 1 : 0, scale: loaded ? scale : scale * 0.9 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    />
  );
};

const Mission: React.FC<MissionProps> = ({ title, text, image, scale = 1 }) => {
  return (
    <motion.div
      className='mission-component'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='mission-text'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className='mission-image'>
        <LazyImage src={image} alt='House illustration' scale={scale} />
      </div>
    </motion.div>
  );
};

export default Mission;
