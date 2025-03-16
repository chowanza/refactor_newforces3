import React from 'react';
import LeadCapture from './LeadCapture';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText: string;
  onButtonClick: () => void;
  backgroundImage: string; // URL for the background image
  home?: boolean; // Optional boolean prop to render the "We are" text
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
  backgroundImage,
  home,
}) => {
  return (
    <section
      className='relative flex items-center md:justify-center justify-evenly min-h-screen bg-cover bg-center md:flex-row flex-col gap-16 pt-10 pb-16 mb-16'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(to bottom, rgba(27, 53, 91, 0.95) 75%, rgba(255, 255, 255, 1) 100%)',
        }}
      ></div>
      <div className='md:w-[60vw] w-full relative z-10 text-center px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center h-full'>
        {home && <p className='text-3xl'>We are</p>}
        <h1 className='text-5xl text-norange md:text-4xl lg:text-5xl font-bold  mb-4'>
          {title}
        </h1>
        {subtitle && (
          <p className='text-lg md:text-xl lg:text-2xl text-white mb-6'>
            {subtitle}
          </p>
        )}
        {description && (
          <p className='text-sm md:text-base lg:text-lg text-white mb-8'>
            {description}
          </p>
        )}
        <div>
          <h2 className='font-bold text-2xl'>Get a Free Quote Today!</h2>
          <div className='flex items-center justify-center m-4'>
            <button className='px-10 py-3 rounded-lg bg-[#f97316] hover:bg-[#f86306] h-full cursor-pointer md:text-2xl text-xl'>
              Start Your Project!
            </button>
          </div>
        </div>
        <button
          className='px-3 py-1 border border-[#f97316] text-white text-sm md:text-base rounded-lg hover:bg-[#f97316] transition-all focus:ring focus:ring-orange-300 focus:outline-knone'
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
      <LeadCapture />
    </section>
  );
};

export default Hero;
