import React from 'react';

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.trim()); // Met à jour la recherche, en supprimant les espaces inutiles
  };

  return (
    <div className="absolute top-[280px] flex justify-center items-center">
      <div className="relative w-[404px]">
        <input
          type="text"
          placeholder="Rechercher un fond d'écran"
          value={searchQuery} 
          className="ml-[130px] sm:ml-[80px] md:ml-[30px] lg:ml-[0px] xl:ml-[0px] w-[150px] sm:w-[250px] md:w-[350px] lg:w-full xl:w-full h-[40px] border border-[#E4E4EB] rounded-full bg-white pl-[16px] pr-[40px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleSearchChange}
        />
        <button
          className="absolute top-1/2 right-[128px] sm:right-[78px] md:right-[28px] lg:right-[5px] xl:right-[5px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={() => setSearchQuery("")} // vide l'input
        >
          <img src="./Frame 119.svg" alt="Search Icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
