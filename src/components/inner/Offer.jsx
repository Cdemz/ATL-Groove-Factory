import React from 'react';
import thebg from '../../assets/new bg.png';
const Offer = () => {
  return (
    <div className=" flex flex-col md:flex-row">
      <div className="md:w-[80%]">
        <img src={thebg} alt="" className="md:w-[100%] md:h-[100%]" />
      </div>
      <div className="text-white bg-black p-4 flex flex-col gap-4 md:pt-[8em] md:pl-[2.5em] md:pr-[4em]">
        <p className="text-2xl">
          Confused about our offers and pricing? <br /> we are here to answer
          any questions you may have about booking the band.
        </p>
        <p className="text-lg">
          Many answers can be found under our{' '}
          <span className="font-bold text-[#ff0000]">FAQs</span>, but we know
          every event is unique so don’t hesitate to reach out!
        </p>
        <button className=" bg-[#d6cbab] text-black mx-auto px-5 py-3 font-semibold rounded-3xl ">
          Request a free Demo Pack
        </button>
      </div>
    </div>
  );
};

export default Offer;
