import React from 'react';

const About_us = () => {
  return (
    <div
      id="detr"
      className="p-4 bg-[#d6cbab] flex md:bg-white flex-col gap-4 md:flex-row md:p-0"
    >
      <div className="md:w-[50%] flex flex-col items-center md:pt-8">
        <h2 className="font-bold font-serif md:mr-[8em] md:text-2xl ">
          Who We Are
        </h2>
        <p className="md:w-[55%] md:text-left">
          At our core, we are music aficionados who thrive on creating
          unforgettable experiences for weddings, corporate functions, private
          events, and festivals. Our band is fully customizable, featuring 3 to
          10 talented musicians who specialize in high-energy music that keeps
          the party going. We are dedicated to making every event memorable by
          infusing it with an electric atmosphere and ensuring that the dance
          floors are always full. Our premium services are offered at reasonable
          prices, making us the go-to choice for those looking for top-notch
          live music. <br />
          <h4>I just added an imaginary size</h4>
        </p>
      </div>
      {/* second  */}
      <div className=" bg-[#d6cbab] flex flex-col p-4 gap-4 text-2xl md:items-left justify-center md:w-[50%] md:pr-[4em] md:pt-[3em] md:pb-[2em] md:text-left">
        <h2 className="font-semibold md:text-3xl ">
          Booking live music has never been easier.
        </h2>
        <p className="">Your big day is our top priority.</p>
        {/* weddings  */}
        <button className="bg-[#000000] !px-4 rounded-2xl py-2 hover:filter hover:drop-shadow-md hover: hover:opacity-75  drop-shadow-[#fdd844] filter-300ms  transition duration-300 ease-in-out transform text-white hover:text-[#ff0000] mx-auto md:mx-0 md:w-[9rem] ">
          Weddings
        </button>
        <p>We ensure event runs smoothly.</p>
        {/* corporate  */}
        <button className="bg-[#000000] px-4 rounded-2xl py-2 hover:filter hover:drop-shadow-md hover: hover:opacity-75  drop-shadow-[#fdd844] filter-300ms text-white transition duration-300 ease-in-out transform hover:text-[#ff0000] mx-auto md:mx-0 md:w-[16rem]">
          Corporate Events
        </button>
        <p>Watch us live</p>

        {/* upcoming shows  */}
        <button className="bg-[#ff0000] px-6 rounded-2xl py-2 hover:filter hover:drop-shadow-md hover: hover:opacity-75  drop-shadow-[#fdd844] filter-300ms text-white transition duration-300 ease-in-out transform hover:bg-white hover:text-[#ff0000] mx-auto md:mx-0 md:w-[16rem]">
          Upcoming Shows
        </button>
      </div>
    </div>
  );
};

export default About_us;
