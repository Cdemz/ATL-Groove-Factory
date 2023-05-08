import React from 'react';
import Hero from './Hero';
import Song_List from './Song_List';
import Nav from './Nav';
import Footer from './Footer';
import { GoDash } from 'react-icons/go';
import { ImLocation2 } from 'react-icons/im';
import Offer from './inner/Offer';

const See_us = () => {
  return (
    <div id="sees" className="">
      <section>
        <Nav />
      </section>
      <main className="p-4">
        <div className=" flex flex-col items-start gap-4">
          <h1 className="font-semibold text-2xl">
            Check out our highlight on Youtube.
          </h1>
          <a href="https://youtu.be/9-Tpo3Uayh0" target="_blank">
            <button className="bg-[#ff0000] px-4 py-3 rounded-2xl font-bold text-white ">
              HIGHLIGHTS
            </button>
          </a>
          <p className="md:w-[90%]">
            Experience the electric energy and soulful sounds of our
            unforgettable performances. With a powerful blend of raw talent and
            magnetic stage presence, we are more than just a band - we are a
            force to be reckoned with. Join us on a journey of sonic exploration
            and let us ignite your passion for music. Welcome to our world.
          </p>
        </div>
        {/* upcoming shows  */}
        <div className="">
          <h1 className="font-bold text-2xl">Upcoming Shows</h1>
          <h2 className="text-lg">Where to catch next?</h2>

          {/* content  */}
          <div className="">
            <div className="bg-[#d6cbab] w-full h-[3rem] rounded-3xl flex items-center pl-4 font-bold text-lg gap-4">
              <GoDash />
              <h1>Corporate Event</h1>
            </div>
            {/* Event  */}
            <div className="mt-4 flex flex-col gap-4 md:flex-row">
              {/* card 1 */}
              <div className=" flex border-[#d6cbab] border-2 p-6 gap-2">
                <div className="bg-[#d6cbab] p-2 flex flex-col items-center text-center w-[40%] font-bold gap-2 ">
                  {/* date  */}
                  <h2 className="border-b-2 border-gray-500 text-lg">Tueday</h2>

                  <h1 className="text-2xl font-extrabold">MAY 23</h1>
                  <p>07:30 PM - 08:30 PM</p>
                </div>
                {/* location */}
                <div className=" flex flex-col items-start text-start w-[50%] gap-4">
                  <h1 className="text-2xl font-bold">Peabody Hotel</h1>

                  <p className="flex">
                    {' '}
                    <ImLocation2 className="" />
                    149 Union Ave, Memphis, TN 38103
                  </p>
                </div>
              </div>
              {/* end of card  */}

              {/* card 1 */}
              <div className=" flex border-[#d6cbab] border-2 p-6 gap-2">
                <div className="bg-[#d6cbab] p-2 flex flex-col items-center text-center w-[40%] font-bold gap-2 ">
                  {/* date  */}
                  <h2 className="border-b-2 border-gray-500 text-lg">Tueday</h2>

                  <h1 className="text-2xl font-extrabold">MAY 23</h1>
                  <p>07:30 PM - 08:30 PM</p>
                </div>
                {/* location */}
                <div className=" flex flex-col items-start text-start w-[50%] gap-4">
                  <h1 className="text-2xl font-bold">Peabody Hotel</h1>

                  <p className="flex">
                    {' '}
                    <ImLocation2 className="" />
                    149 Union Ave, Memphis, TN 38103
                  </p>
                </div>
              </div>
              {/* end of card  */}
            </div>
          </div>

          {/* 2 content  */}
          <div className="mt-6">
            <div className="bg-[#d6cbab] w-full h-[3rem] rounded-3xl flex items-center pl-4 font-bold text-lg gap-4">
              <GoDash />
              <h1>Wedding</h1>
            </div>
            {/* Event  */}
            <div className="mt-4 flex flex-col gap-4 md:flex-row">
              {/* card 1 */}
              <div className=" flex border-[#d6cbab] border-2 p-6 gap-2">
                <div className="bg-[#d6cbab] p-2 flex flex-col items-center text-center w-[40%] font-bold gap-2 ">
                  {/* date  */}
                  <h2 className="border-b-2 border-gray-500 text-lg">Tueday</h2>

                  <h1 className="text-2xl font-extrabold">JUNE 03</h1>
                  <p>07:30 PM - 08:30 PM</p>
                </div>
                {/* location */}
                <div className=" flex flex-col items-start text-start w-[50%] gap-4">
                  <h1 className="text-2xl font-bold">Peabody Hotel</h1>

                  <p className="flex">
                    {' '}
                    <ImLocation2 className="" />
                    149 Union Ave, Memphis, TN 38103
                  </p>
                </div>
              </div>
              {/* end of card  */}

              {/* card 1 */}
              <div className=" flex border-[#d6cbab] border-2 p-6 gap-2">
                <div className="bg-[#d6cbab] p-2 flex flex-col items-center text-center w-[40%] font-bold gap-2 ">
                  {/* date  */}
                  <h2 className="border-b-2 border-gray-500 text-lg">Tueday</h2>

                  <h1 className="text-2xl font-extrabold">JULY 13</h1>
                  <p>07:30 PM - 08:30 PM</p>
                </div>
                {/* location */}
                <div className=" flex flex-col items-start text-start w-[50%] gap-4">
                  <h1 className="text-2xl font-bold">Peabody Hotel</h1>

                  <p className="flex">
                    {' '}
                    <ImLocation2 className="" />
                    149 Union Ave, Memphis, TN 38103
                  </p>
                </div>
              </div>
              {/* end of card  */}
            </div>
          </div>
        </div>
      </main>
      <Offer />

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default See_us;
