import React from 'react';
import DOMPurify from 'dompurify';


interface ComponentProps {
  number: string;
  icon: string;
  descripcion: string;
  imageSrc: string;
}

const Card: React.FC<ComponentProps> = ({ number, icon, descripcion, imageSrc }) => {
  const sanitizedContent = DOMPurify.sanitize(descripcion);
  return (
    <div className=" max-w-md flex flex-col items-center p-4 rounded-3xl m-auto mb-20" style={{height:"360px"}}>
      <img src={imageSrc} alt="Excavator" className="rounded-3xl rounded-b-none size-full" />
      <div className='relative -top-0 w-full overflow-visible text-7xl rounded-b-3xl' style={{backgroundColor:"#001f4c", color:"#001f4c"}}>&nbsp;</div>
      <div className="shadow-2xl relative -top-20 bg-white flex flex-col items-center rounded-3xl p-5 pt-0 pb-3">
        <div className=' w-full flex items-center justify-between'>
            <span className="text-7xl font-bold text-norange">{number}</span>
            <img className='relative bottom-10 w-2/5' src={icon} alt="" />
        </div>
          <p className="relative -top-5 text-md text-gray-600" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
    </div>
  );
};

export default Card;