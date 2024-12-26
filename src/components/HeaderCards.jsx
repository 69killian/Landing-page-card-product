import React from 'react';

const HeaderCards = () => {
  return (
    <div className="z-0 relative grid gap-[10px] ml-[-100px] mr-[-100px] top-[-36px]">
      {/* Première ligne de 7 cartes */}
      <div className="grid grid-cols-7 gap-[10px]">
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <div
              key={`row1-card${index}`}
              className="bg-[#E6E6E61A] min-w-[60px] h-[63px] sm:min-w-[112px] sm:h-[63px] md:min-w-[132px] md:h-[73px] lg:min-w-[132px] lg:h-[93px] xl:min-w-[224px] xl:h-[126px] border border-[#E4E4EBCC/80] rounded-[16px] flex-shrink-0"
            ></div>
          ))}
      </div>

      {/* Deuxième ligne de 2 cartes à gauche et 2 à droite */}
      <div className="grid grid-cols-7 gap-[10px] relative left-[-36px]">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={`row2-left-card${index}`}
              className="bg-[#E6E6E61A] min-w-[60px] h-[63px] sm:min-w-[112px] sm:h-[63px] md:min-w-[132px] md:h-[73px] lg:min-w-[132px] lg:h-[93px] xl:min-w-[224px] xl:h-[126px] border border-[#E4E4EBCC/80] rounded-[16px] flex-shrink-0"
            ></div>
          ))}
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={`row2-empty-card${index}`} className="min-w-[60px] h-[63px] sm:min-w-[112px] sm:h-[63px] md:min-w-[132px] md:h-[73px] lg:min-w-[132px] lg:h-[93px] xl:min-w-[224px] xl:h-[126px] flex-shrink-0"></div>
          ))}
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={`row2-right-card${index}`}
              className="bg-[#E6E6E61A] min-w-[60px] h-[63px] sm:min-w-[112px] sm:h-[63px] md:min-w-[132px] md:h-[73px] lg:min-w-[132px] lg:h-[93px] xl:min-w-[224px] xl:h-[126px] border border-[#E4E4EBCC/80] rounded-[16px] flex-shrink-0 relative right-[-70px]"
            ></div>
          ))}
      </div>

      {/* Troisième ligne de même structure que la deuxième ligne */}
      <div className="grid grid-cols-7 gap-[10px] relative left-[36px]">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={`row3-left-card${index}`}
              className="bg-[#E6E6E61A] min-w-[60px] h-[63px] sm:min-w-[112px] sm:h-[63px] md:min-w-[132px] md:h-[73px] lg:min-w-[132px] lg:h-[93px] xl:min-w-[224px] xl:h-[126px] border border-[#E4E4EBCC/80] rounded-[16px] flex-shrink-0"
            ></div>
          ))}
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={`row3-empty-card${index}`} className="min-w-[60px] h-[63px] sm:min-w-[112px] sm:h-[63px] md:min-w-[132px] md:h-[73px] lg:min-w-[132px] lg:h-[93px] xl:min-w-[224px] xl:h-[126px] flex-shrink-0"></div>
          ))}
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={`row3-right-card${index}`}
              className="bg-[#E6E6E61A] min-w-[60px] h-[63px] sm:min-w-[112px] sm:h-[63px] md:min-w-[132px] md:h-[73px] lg:min-w-[132px] lg:h-[93px] xl:min-w-[224px] xl:h-[126px] border border-[#E4E4EBCC/80] rounded-[16px] flex-shrink-0 relative right-[72px]"
            ></div>
          ))}
      </div>

      {/* Quatrième ligne de 7 cartes */}
      <div className="grid grid-cols-7 gap-[10px]">
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <div
              key={`row4-card${index}`}
              className="bg-[#E6E6E61A] min-w-[60px] h-[63px] sm:min-w-[112px] sm:h-[63px] md:min-w-[132px] md:h-[73px] lg:min-w-[132px] lg:h-[93px] xl:min-w-[224px] xl:h-[126px] border border-[#E4E4EBCC/80] rounded-[16px] flex-shrink-0"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default HeaderCards;
