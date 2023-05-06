import React from 'react';
import logo1 from '../assets/ATL groove factory 3.png';
import { TiThMenu } from 'react-icons/ti';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="bg-white w-full">
        {/* main box  */}
        <div className="flex justify-between items-center h-16 text-black bg-white relative shadow-sm w-[92%] mx-auto md:px-4 rounded-2xl ">
          <div className="flex items-center font-extrabold gap-2 text-[#000000]">
            <img src={logo1} alt="" className="h-10 font-[poppins]" />
            <h1>ATL GROOVE FACTORY</h1>
          </div>

          <ul className="md:flex hidden text-black">
            <li className="p-2">
              <a href="">Home</a>
            </li>
            <li className="p-2">
              <a href="">Weddings</a>
            </li>
            <li className="p-2">
              <a href="">Corporate</a>
            </li>
            <li className="p-2">
              <a href="">Gallery</a>
            </li>
            <li className="p-2">
              <a href="">Songs</a>
            </li>
            <li className="p-2">
              <a href="">Gallery</a>
            </li>
            <li className="p-2">
              <a href="">Reviews</a>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden font-bold text-[#000000] mr-4 "
          >
            {!nav ? <TiThMenu size={26} /> : <RiCloseCircleFill size={26} />}
          </div>
        </div>
        <div
          className={
            nav
              ? 'fixed right-0 top-[4.2rem] w-[60%] rounded-2xl border-r border-r-gray-900  bg-black ease-in-out duration-500 shadow-lg shadow-black'
              : 'fixed left-[-100%]'
          }
        >
          <ul class=" p-4 text-center text-white">
            {' '}
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">classes</li>
            <li className="p-4 border-b border-gray-600">about</li>
            <li className="p-4 border-b border-gray-600">schedules</li>
            <li className="p-4">contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
