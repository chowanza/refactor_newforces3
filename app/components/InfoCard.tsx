import React from "react";
import { Card } from "flowbite-react";

interface InfoCardProps {
  iconSrc: string; // Image source for the icon
  title: React.ReactNode;   // Text below the card
}

const InfoCard: React.FC<InfoCardProps> = ({ iconSrc, title }) => {
  return (
    <div className="flex flex-col items-center">
      <Card className="flex flex-col items-center justify-center h-40 w-60 shadow-md rounded-lg border border-gray-200">
        <div className="w-32 h-32 flex items-center justify-center rounded-full">
          <img src={iconSrc} alt="icon" className="w-25 h-25 border-gray-200" />
        </div>
      </Card>
      <p className="mt-4 text-center text-base md:text-lg font-medium text-gray-700">
        {title}
      </p>
    </div>
  );
};

export default InfoCard;
