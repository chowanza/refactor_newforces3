import React from "react";

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
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(27, 53, 91, 0.95) 75%, rgba(255, 255, 255, 1) 100%)'
        }}
      ></div> {/* Gradient overlay */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-20">
        {home && <p className="text-3xl">We are</p>}
        <h1 className="text-6xl text-norange md:text-5xl lg:text-6xl font-bold  mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-6">
          {subtitle}
        </p>
        <p className="text-sm md:text-base lg:text-lg text-white mb-8">
          {description}
        </p>
        <button
          className="px-6 py-3 bg-orange-500 text-white text-sm md:text-base rounded-lg hover:bg-orange-600 transition-all focus:ring focus:ring-orange-300 focus:outline-none"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;