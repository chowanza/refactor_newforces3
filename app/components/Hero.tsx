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
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center h-full">
        {home && <p className="text-3xl">We are</p>}
        <h1 className="text-6xl text-norange md:text-5xl lg:text-6xl font-bold  mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-6">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-sm md:text-base lg:text-lg text-white mb-8">
            {description}
          </p>
        )}
        <div>
          <h2 className="text-bold text-2xl">Get a Free Quote Today!</h2>
          <div className="flex items-center justify-center m-4">
            <input className="border-none px-6 py-3 min-w-96 rounded-l-lg text-black focus:border-[#f97316]" type="text" placeholder="Enter Your Email" />
            <input className="px-6 py-3 rounded-r-lg bg-[#f97316] hover:bg-[#f86306] h-full cursor-pointer" type="submit" value="Submit" />
          </div>
        </div>
        <button
          className="px-4 py-2 border border-[#f97316] text-white text-sm md:text-base rounded-lg hover:bg-[#f97316] transition-all focus:ring focus:ring-orange-300 focus:outline-knone"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;