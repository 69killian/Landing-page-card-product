import React from 'react';
import HeaderCards from './HeaderCards';
import Navbar from './Navbar';
import Title from './Title';
import SearchInput from './SearchInput';

const Hero = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <div className="bg-[#FAFAFA] relative top-[-41px] w-[400px] sm:w-[670px] md:w-[850px] lg:w-[1100px] xl:w-[1486px] h-[451px] sm:h-[451px] md:h-[451px] lg:h-[481px] xl:h-[431px] border rounded-b-[24px] overflow-hidden">
        <HeaderCards />
      </div>
      <Navbar />
      <Title />

      {/* SearchInput with passed props */}
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </>
  );
};

export default Hero;
