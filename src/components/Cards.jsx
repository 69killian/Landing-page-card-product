import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';
import points from '../assets/points.svg';
import download from '../assets/download.svg';

// Composant Cards
const Cards = ({ cardId, cardImage, cardImageAlt, title, description, buttonText, premium, free, updateTitle, openModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [localTitle, setLocalTitle] = useState(title); // Initialise avec `title` par défaut

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTooltipToggle = () => {
    setIsTooltipVisible((prevState) => !prevState); // Bascule l’état du tooltip
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest('.tooltip-container') && // Vérifie si le clic est hors du tooltip
      !event.target.closest('.points-button') // Vérifie si le clic est hors du bouton points
    ) {
      setIsTooltipVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative flex justify-center items-center">
        <div
          className={`bg-white w-[337px] h-[389px] p-[14.74px] rounded-[19.65px] border border-solid border-[#E4E4EB] flex flex-col justify-between 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} 
          transition-all duration-200 ease-in-out
         `}
        >
          <img
            src={cardImage}
            alt={cardImageAlt}
          />

          <div className="flex flex-cols-2 justify-between items-center">
            <p className="font-inter font-medium text-[17.2px] my-[11.98px]">
              {localTitle}
            </p>
            {premium && (
              <p className="text-[9.83px] font-inter font-medium bg-[#CFD2DD66] p-[4.91px] rounded-[4.91px]">Premium</p>
            )}
            {free && !premium && (
              <p className="text-[9.83px] font-inter font-medium bg-[#D3F9D8] p-[4.91px] rounded-[4.91px]">$ Free</p>
            )}
          </div>

          <p className="text-[12.28px] font-normal text-[#090C1580]">{description}</p>

          <div className="flex flex-cols-2 justify-between items-center mt-auto relative">
            <button className="font-inter font-100 text-[14.78px] flex items-center justify-center gap-2 border border-solid rounded-[9.83px] w-[127px] h-[35px] relative bg-white">
              <img src={download} alt="download" />
              Télécharger
            </button>

            <button
              className="points-button flex items-center justify-center border border-solid rounded-[12px] w-[36px] h-[36px] relative bg-white ease-in-out shadow-[inset_0px_-1px_1px_rgba(0,0,0,0.1)] focus:outline focus:outline-2 focus:outline-offset-2"
              onClick={handleTooltipToggle} // Bascule le tooltip
            >
              <img src={points} alt="points" />
            </button>
          </div>
        </div>

        {isTooltipVisible && (
          <motion.div
            className="absolute top-[0px] left-[0px] z-50 tooltip-container"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Tooltip
              closeTooltip={() => setIsTooltipVisible(false)}
              cardId={cardId}
              currentTitle={localTitle}
              openModal={() => openModal(cardId, localTitle)} // Ouvre le modal
            />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Cards;
