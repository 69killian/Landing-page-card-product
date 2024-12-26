import React, { useState, useEffect } from 'react';
import filterIcon from '../assets/list-filter.svg';

const Filters = ({ setSearchQuery, setFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState('Filtres');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setFilter(event.target.value); // Met à jour le filtre dans App
  };

  const handleCleanFilters = () => {
    setSelectedFilter('All Challenges');
    setFilter('All Challenges');
    setSearchQuery('');
  };

  return (
    <div 
      className={` flex justify-between mt-10 flex justify-center px-4 items-center gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
      style={{ transition: 'opacity 0.5s ease-out' }}
    >

      
      {/* Select Filter */}
      <div className="relative w-full sm:w-[124px]">
  {/* Dropdown */}
  <select
    value={selectedFilter}
    onChange={handleFilterChange}
    className="cursor-pointer font-inter font-medium text-[14.78px] flex items-center justify-center gap-2 border border-solid rounded-[9.83px] w-full h-[41px] bg-white p-[9px] pr-[40px] appearance-none focus:outline focus:outline-2 focus:outline-offset-2"
    style={{ backgroundImage: 'none' }} // Supprime toute image par défaut
  >
    <option value="All Challenges">Filtres</option>
    <option value="Premium">Premium</option>
    <option value="Free">Free</option>
  </select>

  {/* Filter Icon */}
  <img
    src={filterIcon}
    alt="Filter Icon"
    className="absolute right-[12px] top-1/2 transform -translate-y-1/2 w-[16px] h-[16px] pointer-events-none"
  />
</div>



      {/* Clean Filters Button */}
      <button
        onClick={handleCleanFilters}
        className="font-inter font-medium text-[14.78px] flex items-center justify-center gap-2 border border-solid rounded-[9.83px] w-full sm:w-[170px] h-[41px] relative bg-white transition-all duration-200 ease-in-out hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] p-[9px]"
      >
        Supprimer les filtres
      </button>
    </div>
  );
};

export default Filters;
