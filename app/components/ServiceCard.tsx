import React from "react";

interface ServiceCardProps {
  iconSrc: string; // Image source for the icon
  title: string;   // Title of the service
  description: string; // Description of the service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 flex items-center justify-center rounded-full">
          <img src={iconSrc} alt="icon" className="w-25 h-25 border-gray-200" />
        </div>
      <h3 className="text-lg md:text-xl font-bold text-norange mt-4">{title}</h3>
      <p className="text-gray-700 text-xs md:text-sm mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
