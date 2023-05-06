import React from 'react';
import dhero from '../assets/the bg.jpg';
import { BrowserRouter, Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex relative">
      <div>
        {/* picture  */}
        <div>
          <img src={dhero} alt="" className="w-[100vw] h-[30em] " />
        </div>
        {/* hero content  */}
        <div className="absolute top-0 text-white h-[30em] flex flex-col items-center gap-8 pt-[8em] px-8 md:px-[6em] font-bold md:text-2xl">
          <p>
            Elevate your event with the best live music around. Our band plays
            all your favorite songs with high-energy flair, perfect for weddings
            and corporate events.
          </p>
          <div className=" flex gap-7">
            <BrowserRouter>
              <Link to="/src/components/See_us.jsx">
                <button className="bg-[#ecc440] px-4 rounded-2xl py-2 hover:filter hover:drop-shadow-md hover:opacity-80  drop-shadow-[#fdd844] filter-300ms  transition duration-300 ease-in-out transform text-black">
                  {' '}
                  See Us Live
                </button>
              </Link>
            </BrowserRouter>

            <a href="">
              <button className="bg-[#ff0000] px-4 rounded-2xl py-2 hover:filter hover:drop-shadow-md hover: hover:opacity-75  drop-shadow-[#fdd844] filter-300ms  transition duration-300 ease-in-out transform">
                {' '}
                Contact us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
