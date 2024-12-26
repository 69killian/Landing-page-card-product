import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[53px] sm:h-[53px] md:h-[53px] lg:h-[53px] xl:h-[53px] text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] w-[390px] sm:w-[582px] md:w-[682px] lg:w-[882px] xl:w-[882px] bg-[#FFFFFF] border border-[#E4E4EB] fixed z-[10] top-[24px] rounded-[18px] pr-1 pl-2">
      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img className="h-[36px] w-[36px] sm:h-[36px] sm:w-[36px] md:h-[36px] md:w-[36px] lg:h-[36px] lg:w-[36px] xl:h-[36px] xl:w-[36px]" src="./logo.svg" alt="Logo" />
        <img className="hidden sm:block w-[40px] h-[16px] sm:w-[68px] sm:h-[26px] md:w-[68px] md:h-[26px] lg:w-[68px] lg:h-[26px] xl:w-[68px] xl:h-[26px] relative top-[1px] sm:top-[3px] md:top-[3px] lg:top-[3px] xl:top-[3px]" src="./Wallify.svg" alt="Wallify" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 ">
        <div className="cursor-pointer hover:text-gray-600">Découvrir</div>
        <div className="cursor-pointer hover:text-gray-600">Catégories</div>
        <div className="cursor-pointer hover:text-gray-600">Upload</div>
      </div>

      {/* Collection Access */}
      <div className="cursor-pointer hover:text-gray-600 flex items-center justify-center gap-1 w-[110px] sm:w-[151px] md:w-[211px] lg:w-[211px] xl:w-[211px] h-[41px] py-[12px] px-[14px] rounded-[12px] bg-[#252525] text-white border border-[#3E3E3E]">
  <span>Accéder à ma collection</span>
  <img className="hidden sm:block" src="./move-right.svg" alt="Flèche" />
</div>

    </div>
  );
};

export default Navbar;
