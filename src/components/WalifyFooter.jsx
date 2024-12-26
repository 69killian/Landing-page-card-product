import React from 'react';
import Line from '../assets/Line 1.svg';
import Walify from '../assets/Wallify(1).svg';

const WalifyFooter = () => {
  return (
    <div className=" flex justify-center">
      
      <div className="bg-[#252525] w-[1456px] h-[591px] rounded-t-[24px] relative shadow-[inset_0px_0px_1px_rgba(153,153,153,1)] border-2 border-[#999999]/50">
        <div className='flex justify-center gap-2 relative top-[157.9px]'>
        <div className='w-[58px] h-[67.55px] sm:w-[58px] sm:h-[67.55px] md:w-[78px] md:h-[87.55px] lg:w-[78px] lg:h-[87.55px] xl:w-[78px] xl:h-[87.55px] bg-white flex justify-center items-center text-[62.62px] text-[#252525] rounded-[19.1px] border-[#5F5F5F]'>2</div>
        <div className='w-[58px] h-[67.55px] sm:w-[58px] sm:h-[67.55px] md:w-[78px] md:h-[87.55px] lg:w-[78px] lg:h-[87.55px] xl:w-[78px] xl:h-[87.55px] bg-white flex justify-center items-center text-[62.62px] text-[#252525] rounded-[19.1px] border-[#5F5F5F]'>2</div>
        <div className='w-[58px] h-[67.55px] sm:w-[58px] sm:h-[67.55px] md:w-[78px] md:h-[87.55px] lg:w-[78px] lg:h-[87.55px] xl:w-[78px] xl:h-[87.55px] bg-white flex justify-center items-center text-[62.62px] text-[#252525] rounded-[19.1px] border-[#5F5F5F]'>2</div>
        <div className='w-[58px] h-[67.55px] sm:w-[58px] sm:h-[67.55px] md:w-[78px] md:h-[87.55px] lg:w-[78px] lg:h-[87.55px] xl:w-[78px] xl:h-[87.55px] bg-white flex justify-center items-center text-[62.62px] text-[#252525] rounded-[19.1px] border-[#5F5F5F]'>2</div>
        <div className='w-[58px] h-[67.55px] sm:w-[58px] sm:h-[67.55px] md:w-[78px] md:h-[87.55px] lg:w-[78px] lg:h-[87.55px] xl:w-[78px] xl:h-[87.55px] bg-white flex justify-center items-center text-[62.62px] text-[#252525] rounded-[19.1px] border-[#5F5F5F]'>2</div>
        <div className='w-[58px] h-[67.55px] sm:w-[58px] sm:h-[67.55px] md:w-[78px] md:h-[87.55px] lg:w-[78px] lg:h-[87.55px] xl:w-[78px] xl:h-[87.55px] bg-white flex justify-center items-center text-[62.62px] text-[#252525] rounded-[19.1px] border-[#5F5F5F]'>2</div>
        </div>

            <div className='flex justify-center'>
                <img src={Line} alt="line" className='w-[1270px] relative top-[250.9px]' />
            </div>

            <div className='flex justify-center'>
                <img src={Walify} alt="" className='relative top-[450.9px] sm:top-[410.9px] md:top-[364.9px] lg:top-[302.9px] xl:top-[302.9px]'/>
            </div>
      </div>
    </div>
  );
};

export default WalifyFooter;
