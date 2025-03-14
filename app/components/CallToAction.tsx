import React, { useState } from 'react';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  isActive: boolean;
  onSelect: () => void;
}

const CardCTA: React.FC<CardProps> = ({
  icon,
  title,
  description,
  buttonText,
  isActive,
  onSelect,
}) => {
  return (
    <div
      className={`w-1/3 min-h-64 p-4 bg-white shadow-[0px_0px_50px_1px_#00000024] flex flex-col justify-evenly rounded-lg cursor-pointer ${
        isActive ? 'border-[2px] border-[#f97316]' : 'border-[1px]'
      }`}
      onClick={onSelect}
    >
      <div
        className={`self-start rounded-full w-[3.25rem] h-[3.25rem] grid place-items-center shadow-[0px_0px_50px_1px_#00000024] ${
          isActive ? 'bg-[#f97316] text-white' : 'text-[#1b355b]'
        }`}
      >
        {icon}
      </div>
      <h2 className='self-center text-xl text-[#1b355b]'>{title}</h2>
      <p className='self-center text-center text-sm text-[#3b557b]'>
        {description}
      </p>
      <button className='bg-[#12233d] py-2 px-4 flex justify-between text-base rounded-lg group hover:bg-[#22334d]'>
        {buttonText}{' '}
        <span className='group-hover:translate-x-2 transition-all'>&gt;</span>
      </button>
    </div>
  );
};

const CallToAction: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section className='flex flex-col items-center justify-evenly h-[90vh] p-8'>
      <div className='flex flex-col items-center justify-between gap-6'>
        <h1 className='text-5xl font-bold text-[#1b355b]'>
          Build Your{' '}
          <span className='bg-gradient-to-r from-[#f97316] to-[#1b355b] text-transparent bg-clip-text'>
            Dream Home
          </span>
        </h1>
        <p className='w-[38rem] text-lg text-center text-[#3b557b]'>
          Expert craftsmanship, innovative designs, and exceptional quality.
          Choose your path to begin the journey.
        </p>
      </div>
      <div className='flex flex-row items-center justify-evenly w-full px-10 gap-10'>
        <CardCTA
          icon='1'
          title='Free Quote'
          description='Get an accurate estimate for your dream home project without any obligation.'
          buttonText='Get a Free Quote Today!'
          isActive={activeIndex === 0}
          onSelect={() => setActiveIndex(0)}
        />
        <CardCTA
          icon='2'
          title='Project Estimate'
          description='Detailed breakdown of costs and timeline for your custom home construction.'
          buttonText='Request Your Free Estimate Now!'
          isActive={activeIndex === 1}
          onSelect={() => setActiveIndex(1)}
        />
        <CardCTA
          icon='3'
          title='Start Building'
          description='Ready to begin? Our expert team is standing by to discuss your vision.'
          buttonText='Start Your Project – Contact Us!'
          isActive={activeIndex === 2}
          onSelect={() => setActiveIndex(2)}
        />
      </div>
    </section>
  );
};

export default CallToAction;
