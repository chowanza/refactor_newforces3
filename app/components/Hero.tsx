import React from 'react';
import LeadCapture from './LeadCapture';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText: string;
  onButtonClick: () => void;
  backgroundImage: string;
  home?: boolean;
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
  // Handler for the "Start Your Project!" button
  const handleStartProjectClick = () => {
    // Find the section with ID "call-to-action" and scroll to it
    const callToActionSection = document.getElementById('call-to-action');
    if (callToActionSection) {
      callToActionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para copiar el número de teléfono al portapapeles
  const handleCopyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText('(941) 337-0680');
      alert('Phone number copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <section
      className='relative flex flex-col min-h-screen bg-cover bg-center pt-10 pb-16 mb-16'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Capa de fondo para efecto de oscurecimiento */}
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(to bottom, rgba(27, 53, 91, 0.95) 75%, rgba(255, 255, 255, 1) 100%)',
        }}
      ></div>

      {/* Número de teléfono en la esquina superior derecha */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full shadow-md">
        <img
          src="/phone.svg" // Reemplaza con el icono de teléfono
          alt="Phone icon"
          className="w-6 h-6 object-contain"
        />
        <p className="text-lg md:text-xl font-bold">(941) 337-0680</p>
        <button
          className="text-white ml-2 p-1 rounded bg-[#f97316] hover:bg-[#f86306] text-sm"
          onClick={handleCopyPhoneNumber}
        >
          Copy
        </button>
      </div>

      {/* Logo responsivo */}
      <div className="relative z-50 md:absolute md:top-4 md:left-4 flex justify-center md:justify-start mb-8 md:mb-0">
        <div className="w-[140px] sm:w-[160px] md:w-[100px] lg:w-[120px] xl:w-[140px]">
          <img
            src="/logo-newforce.webp"
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Contenido del Hero */}
      <div className='flex items-center md:justify-center justify-evenly md:flex-row flex-col gap-16 flex-grow'>
        <div className='md:w-[60vw] w-full relative z-10 text-center px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center'>
          {home && <p className='text-3xl text-white'>We are</p>}
          <h1 className='text-5xl text-norange md:text-4xl lg:text-5xl font-bold mb-4'>
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
            <h2 className='font-bold text-2xl text-white'>Get a Free Quote Today!</h2>
            <div className='flex items-center justify-center m-4'>
              <button 
                className='px-10 py-3 rounded-lg bg-[#f97316] hover:bg-[#f86306] h-full cursor-pointer md:text-2xl text-xl text-white'
                onClick={handleStartProjectClick}
              >
                Start Your Project!
              </button>
            </div>
          </div>
          <button
            className='px-3 py-1 border border-[#f97316] text-white text-sm md:text-base rounded-lg hover:bg-[#f97316] transition-all focus:ring focus:ring-orange-300 focus:outline-none'
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
        <LeadCapture />
      </div>
    </section>
  );
};

export default Hero;
