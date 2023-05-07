import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaGoogle } from 'react-icons/fa';
import logo1 from '../assets/ATL groove factory 3.png';
import cloud1 from '../assets/234 cloud logo.png';

const Footer = () => {
  return (
    <div className="bg-[#a8a59a] flex flex-col gap-2 items-center text-center py-6">
      <div className=" flex gap-8">
        <FaFacebookF />
        <FaInstagram />
        <FaGoogle />
        <FaYoutube />
      </div>
      <div className="">
        <h1>Contact Us:</h1>
        <p className="font-bold">atlgroovefactory2011@yahoo.com</p>
        <p className="font-bold">(404)351-2263</p>
      </div>
      <div className=" flex items-center gap-4">
        <img src={logo1} alt="" className="md:h-[15vh] h-[6rem]" />
        <h1 className="md:text-[2rem] font-bold text-xl">ATL GROOVE FACTORY</h1>
      </div>
      {/* MY SPACE  */}
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full px-4 mx-auto text-center">
          <div class=" text-black font-semibold py-1  justify-center items-center">
            <p>Website Service & Branding By</p>

            <img src={cloud1} alt="" class="h-12 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
