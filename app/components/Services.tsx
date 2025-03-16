import React from 'react';
import { ServicesData } from './ServicesData';
import { LuInfo } from 'react-icons/lu';

interface CardProps {
  title: string;
  Icon: React.FC;
  description: string;
  list: string[];
}

const Card: React.FC<CardProps> = ({ title, Icon, description, list }) => {
  return (
    <div className='px-8 md:py-6 py-6 bg-white border shadow-[0px_0px_20px_1px_#00000024] rounded-lg flex flex-col justify-center items-center text-gray-600 h-96 w-[24rem]'>
      <div className='flex items-start justify-start gap-4'>
        <h3 className='text-[#f97316] text-start text-xl font-semibold'>
          {title}
        </h3>
        <div className='grid place-items-center w-12 h-12 rounded-full bg bg-slate-200 shrink-0 text-lg'>
          <Icon />
        </div>
      </div>
      <p className='text-start mt-2 text-gray-500 text-sm'>{description}</p>
      <ul className='mt-4 flex justify-around items-start flex-col text-sm text-gray-600'>
        {list.map((item, index) => (
          <li
            key={index}
            className='text-start flex items-center justify-around gap-2 py-2'
          >
            <LuInfo className='text-[1.125rem] shrink-0' />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC<{ serviceType: number }> = ({ serviceType }) => {
  const CardsInfo = ServicesData[serviceType] || [];
  const service: Record<number, string> = {
    1: 'Commercial Construction Services',
    2: 'Residential Construction Services',
    3: 'Kitchen & Bath Renovations',
    4: 'Why Choose New Force Construction',
  };

  const serviceDescriptions: Record<number, string> = {
    1: 'We specialize in creating exceptional commercial spaces tailored to your unique requirements.',
    2: 'We build and renovate residential spaces with precision, ensuring comfort, style, and lasting value.',
    3: 'Transform your kitchen and bathroom with high-quality materials and expert craftsmanship.',
    4: 'From start to finish, we handle everything to make your home-building process seamless and stress-free.',
  };

  return (
    <section className='container mx-auto py-12 text-center flex justify-center items-center flex-col gap-6 mt-10'>
      <h1 className='text-4xl font-bold text-[#1b355b]'>
        {service[serviceType] || 'Our Services'}
      </h1>
      <p className='text-[#f97316] max-w-[35rem] text-lg'>
        {serviceDescriptions[serviceType] ||
          'Discover our range of services designed to meet your needs.'}
      </p>
      <div className='w-full flex justify-center items-center gap-6 flex-wrap'>
        <Card
          title={CardsInfo[0].title}
          Icon={CardsInfo[0].Icon}
          description={CardsInfo[0].description}
          list={CardsInfo[0].list}
        />
        <Card
          title={CardsInfo[1].title}
          Icon={CardsInfo[1].Icon}
          description={CardsInfo[1].description}
          list={CardsInfo[1].list}
        />
        <Card
          title={CardsInfo[2].title}
          Icon={CardsInfo[2].Icon}
          description={CardsInfo[2].description}
          list={CardsInfo[2].list}
        />
      </div>
    </section>
  );
};

export default Services;
