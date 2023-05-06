import React from 'react';

import wedd from '../assets/birday.jpg';
import corp from '../assets/wed_560x510.jpg';
import birthday from '../assets/others.jpg';
import others from '../assets/corporrate_560x510.jpg';

const Packages = () => {
  return (
    <div className=" bg-gradient-to-l from-[#66deff] to-[#ffa0e9] p-4 ">
      <h1 className="mb-4">
        Choose a category below to find out how our packages cater to your
        specific event!.
      </h1>
      {/* all packades  */}
      <div className=" grid grid-cols-2 gap-4 md:flex md:justify-between">
        {/* weddings  */}
        <div className=" relative  ">
          <img src={wedd} alt="" />
          <div className="absolute top-[0rem] text-white font-extrabold text-2xl h-full flex w-full bg-black text-center justify-center items-center bg-opacity-40 hover:bg-[#ff0000] hover:bg-opacity-40">
            <h1>WEDDINGS</h1>
          </div>
        </div>
        {/* corporate  */}
        <div className=" relative  ">
          <img src={corp} alt="" />
          <div className="absolute top-[0rem] text-white font-extrabold text-2xl h-full flex w-full bg-black bg-opacity-40 text-center justify-center items-center hover:bg-[#ff0000] hover:bg-opacity-40">
            <h1>CORPORATE</h1>
          </div>
        </div>
        {/* chaarity  */}
        <div className=" relative  ">
          <img src={birthday} alt="" />
          <div className="absolute top-[0rem] text-white font-extrabold text-2xl h-full flex w-full bg-black bg-opacity-40 text-center justify-center items-center hover:bg-[#ff0000] hover:bg-opacity-40">
            <h1>BIRTHDAY</h1>
          </div>
        </div>
        {/* others  */}
        <div className=" relative  ">
          <img src={others} alt="" />
          <div className="absolute top-[0rem] text-white font-extrabold text-2xl h-full flex w-full bg-black bg-opacity-40 text-center justify-center items-center hover:bg-[#ff0000] hover:bg-opacity-40">
            <h1>OTHERS</h1>
          </div>
        </div>
        {/* end  */}
      </div>
    </div>
  );
};

export default Packages;
