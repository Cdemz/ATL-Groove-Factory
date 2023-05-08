import React from 'react';
import logo1 from '../assets/ATL groove factory 3.png';
import { TiThMenu } from 'react-icons/ti';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="bg-white w-full h-20  flex items-center justify-center z-10 ">
        {/* main box  */}
        <div className="bg-white w-full h-20 fixed flex items-center justify-center z-[17] ">
          <div className="flex justify-between items-center h-16 text-black bg-white  shadow-sm w-[92%] mx-auto md:px-4 rounded-2xl  fixed top-3 ">
            <div className="flex items-center font-extrabold gap-2 text-[#000000] ">
              <img src={logo1} alt="" className="h-10 font-[poppins]" />
              <h1>ATL GROOVE FACTORY</h1>
            </div>

            <ul className="md:flex hidden text-black">
              <a href="/">
                <li className="p-2">Home</li>
              </a>

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
                <a href="songs">Songs</a>
              </li>

              <li className="p-2">
                <a
                  href="https://www.weddingwire.com/biz/atl-groove-factory-jonesboro/0de62cbd9f32f2ff.html"
                  target="_blank"
                >
                  Reviews
                </a>
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
                ? 'fixed right-0 top-[4.2rem] w-[60%] rounded-2xl border-r border-r-gray-900  bg-black ease-in-out duration-500 shadow-lg shadow-black z-20'
                : 'fixed left-[-100%] '
            }
          >
            <ul class=" p-4 text-center text-white">
              <a href="/">
                <li className="p-2">Home</li>
              </a>
              <li className="p-4 border-b border-gray-600">
                <a href="">Weddings</a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="">Corporate</a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="songs">Songs</a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="">Gallery</a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a
                  href="https://www.weddingwire.com/biz/atl-groove-factory-jonesboro/0de62cbd9f32f2ff.html"
                  target="_blank"
                >
                  Reviews
                </a>
              </li>{' '}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
