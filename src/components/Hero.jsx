import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dhero from '../assets/birday.jpg';
import { BrowserRouter, Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1500, once: false });
    AOS.refresh();
  }, []);
  return (
    <div className="flex relative">
      <div>
        {/* picture  */}
        <div>
          <img src={dhero} alt="" className="w-[100vw] h-[30em] md:h-full " />
        </div>
        {/* hero content  */}
        <div className="absolute top-0 text-white h-[30em] flex flex-col items-center gap-8 md:pt-[50%] pt-[12em] text-center  px-8 md:px-[6em] font-bold md:text-2xl bg-black bg-opacity-40 md:h-full ">
          <p>
            Elevate your event with the best live music around. Our band plays
            all your favorite songs with high-energy flair, perfect for weddings
            and corporate events.
          </p>
          <div data-aos="fade-right" className=" flex gap-7">
            <BrowserRouter>
              <Link to="/src/components/See_us.jsx">
                <button className="bg-[#cab262] px-4 rounded-2xl py-2 hover:filter hover:drop-shadow-md hover:opacity-80  drop-shadow-[#fdd844] filter-300ms  transition duration-300 ease-in-out transform text-black">
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
