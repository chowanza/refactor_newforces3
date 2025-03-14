import React from 'react';
import './Mission.css';

// Define the props interface
interface MissionProps {
  title: string;
  text: string;
  image: string;
  scale?: number;
}

const Mission: React.FC<MissionProps> = ({ title, text, image, scale }) => {
  return (
    <div className="mission-component">
      <div className="mission-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="mission-image">
        <img src={image} alt="House illustration" style={{ transform: `scale(${scale})` }} />
      </div>
    </div>
  );
};

export default Mission;
