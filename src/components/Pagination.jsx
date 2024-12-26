import React from 'react'
import left from '../assets/chevron-left.svg';
import right from '../assets/chevron-right.svg';

const Pagination = () => {
  return (
    <>

    <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center px-4 py-20'>

    <div className='flex text-[14px] gap-5 flex items-center'>
    <div className='text-[#252525B2]'>Total par page</div>
    <select className="border rounded p-2 bg-white cursor-pointer rounded-[10px]" defaultValue={9}>
      {Array.from({ length: 24 }, (_, i) => i + 1).map((number) => (
        <option key={number} value={number}>
          {number}
        </option>
      ))}
    </select>
    </div>

    <div className='text-[#252525] flex gap-1 text-[16px]'>
        <button
                className="points-button flex items-center justify-center border border-solid rounded-[12px] w-[36px] h-[36px] relative bg-white ease-in-out shadow-[inset_0px_-1px_1px_rgba(0,0,0,0.1)] focus:outline focus:outline-2 focus:outline-offset-2"
                > <img src={left} alt="" />
                </button>
            <button
                className="points-button flex items-center justify-center rounded-[12px] w-[36px] h-[36px] relative bg-[#252525] text-white ease-in-out shadow-[inset_0px_-1px_0px_rgba(153,153,153,0.8)] border border-[#999999]/50 focus:outline focus:outline-2 focus:outline-offset-2"
                > 1
                </button>
                <button
                className="points-button flex items-center justify-center border border-solid rounded-[12px] w-[36px] h-[36px] relative bg-white ease-in-out shadow-[inset_0px_-1px_1px_rgba(0,0,0,0.1)] focus:outline focus:outline-2 focus:outline-offset-2"
                > 2
                </button>
                <button
                className="points-button flex items-center justify-center border border-solid rounded-[12px] w-[36px] h-[36px] relative bg-white ease-in-out shadow-[inset_0px_-1px_1px_rgba(0,0,0,0.1)] focus:outline focus:outline-2 focus:outline-offset-2"
                > 3
                </button>
                <button
                className="points-button flex items-center justify-center border border-solid rounded-[12px] w-[36px] h-[36px] relative bg-white ease-in-out shadow-[inset_0px_-1px_1px_rgba(0,0,0,0.1)] focus:outline focus:outline-2 focus:outline-offset-2"
                > 4
                </button>
                <div>...</div>
                <button
                className="points-button flex items-center justify-center border border-solid rounded-[12px] w-[36px] h-[36px] relative bg-white ease-in-out shadow-[inset_0px_-1px_1px_rgba(0,0,0,0.1)] focus:outline focus:outline-2 focus:outline-offset-2"
                > 24
                </button>
                <button
                className="points-button flex items-center justify-center border border-solid rounded-[12px] w-[36px] h-[36px] relative bg-white ease-in-out shadow-[inset_0px_-1px_1px_rgba(0,0,0,0.1)] focus:outline focus:outline-2 focus:outline-offset-2"
                > <img src={right} alt="" />
                </button>
            </div>

            <div className='flex text-[14px] text-[#252525B2]'>Résultat 1-9 sur 216</div>

            </div>

    </>
  )
}

export default Pagination