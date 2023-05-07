import React from 'react';
import award1 from '../assets/2014-en_US.png';
import award2 from '../assets/2016-en_US.png';
import award3 from '../assets/badge-weddingawards_en_US.png';
import award4 from '../assets/VendorBadge_AsSeenInMag (1).png';

const Awards = () => {
  return (
    <div className="p-4">
      {/* start  */}
      <h1 className="mb-4 text-center font-bold text-2xl">
        Awards and Prizes.
      </h1>
      {/* all packades  */}
      <div className=" grid grid-cols-2 gap-4 md:flex md:justify-around">
        {/* weddings  */}
        <div className=" relative  ">
          <img src={award1} alt="" />
        </div>
        {/* corporate  */}
        <div className=" relative  ">
          <img src={award2} alt="" />
        </div>
        {/* chaarity  */}
        <div className=" relative  ">
          <img src={award3} alt="" className="md:w-[16em]" />
        </div>
        {/* others  */}
        <div className=" relative  ">
          <img src={award4} alt="" className="md:w-[16em]" />
        </div>
        {/* end  */}
      </div>
      {/* end  */}
    </div>
  );
};

export default Awards;
