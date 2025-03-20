import React, { useState } from 'react';
import ContactoModal from './ContactoModal'; // Asegúrate de importar el modal
import { LuHouse, LuBuilding, LuPhone } from 'react-icons/lu';

interface CardProps {
  Icon: React.FC;
  title: string;
  description: string;
  buttonText: string;
  isActive: boolean;
  onSelect: () => void;
  onOpenModal: (selectedProduct: string) => void; // Nueva prop para abrir el modal
}

const CardCTA: React.FC<CardProps> = ({
  Icon,
  title,
  description,
  buttonText,
  isActive,
  onSelect,
  onOpenModal, // Se obtiene la función para abrir el modal
}) => {
  return (
    <div
      className={`w-full md:w-4/5 lg:w-1/3 min-h-64 p-4 bg-white shadow-[0px_0px_50px_3px_#00000024] flex flex-col justify-evenly rounded-lg cursor-pointer hover:shadow-[0px_0px_50px_3px_#f9731644] hover:outline-[2px] hover:outline-[#f9731624] ${
        isActive ? 'border-[2px] border-[#f97316]' : 'border-[2px]'
      }`}
      onClick={onSelect}
    >
      <div
        className={`self-start rounded-full w-[3.25rem] h-[3.25rem] grid place-items-center shadow-[0px_0px_50px_1px_#00000024] text-2xl ${
          isActive ? 'bg-[#f97316] text-white' : 'text-[#1b355b]'
        }`}
      >
        <Icon />
      </div>
      <h2 className='self-center text-xl text-[#1b355b]'>{title}</h2>
      <p className='self-center text-center text-sm text-[#3b557b]'>{description}</p>
      <button
        className='bg-[#12233d] text-white py-2 px-4 flex justify-between text-base rounded-lg group hover:bg-[#22334d]'
        onClick={() => onOpenModal(title)} // Abre el modal con el título del producto seleccionado
      >
        {buttonText}{' '}
        <span className='group-hover:translate-x-2 transition-all'>&gt;</span>
      </button>
    </div>
  );
};

const CallToAction: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Estado para controlar la apertura del modal
  const [selectedProduct, setSelectedProduct] = useState<string>(''); // Estado para almacenar el producto seleccionado

  const openModal = (product: string) => {
    setSelectedProduct(product); // Guarda el producto seleccionado
    setIsModalOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  return (
    <section className='flex flex-col items-center justify-evenly min-h-[90vh] gap-5 p-8'>
      <div className='flex flex-col items-center justify-between gap-6'>
        <h1 className='text-4xl md:text-5xl font-bold text-[#1b355b] text-center'>
          Build Your{' '}
          <span className='bg-gradient-to-r from-[#f97316] to-[#1b355b] text-transparent bg-clip-text'>
            Dream Home
          </span>
        </h1>
        <p className='w-full max-w-[38rem] text-lg text-center text-[#3b557b]'>
          Expert craftsmanship, innovative designs, and exceptional quality.
          Choose your path to begin the journey.
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-evenly w-full px-4 md:px-10 gap-6 md:gap-10'>
        <CardCTA
          Icon={LuHouse}
          title='Free Quote'
          description='Get an accurate estimate for your dream home project without any obligation.'
          buttonText='Get a Free Quote Today!'
          isActive={activeIndex === 0}
          onSelect={() => setActiveIndex(0)}
          onOpenModal={openModal} // Pasa la función para abrir el modal
        />
        <CardCTA
          Icon={LuBuilding}
          title='Project Estimate'
          description='Detailed breakdown of costs and timeline for your custom home construction.'
          buttonText='Request Your Free Estimate Now!'
          isActive={activeIndex === 1}
          onSelect={() => setActiveIndex(1)}
          onOpenModal={openModal} // Pasa la función para abrir el modal
        />
        <CardCTA
          Icon={LuPhone}
          title='Start Building'
          description='Ready to begin? Our expert team is standing by to discuss your vision.'
          buttonText='Start Your Project – Contact Us!'
          isActive={activeIndex === 2}
          onSelect={() => setActiveIndex(2)}
          onOpenModal={openModal} // Pasa la función para abrir el modal
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ContactoModal
          selectedProduct={selectedProduct}
          closeContactPanel={closeModal} // Función para cerrar el modal
        />
      )}
    </section>
  );
};

export default CallToAction;
