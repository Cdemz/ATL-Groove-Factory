import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import show from '../assets/show.png';
import fine from '../assets/fine.png';
import dance from '../assets/dance.png';

const ContactUs = () => {
  return (
    <div>
      <section>
        <Nav />
      </section>
      <main className="p-4">
        <h1 className="text-2xl font-semibold">
          Securing live music for your event has never been simpler.
        </h1>
        <p>
          With our skilled musicians, your dance floor will be packed, and our
          customized planning page ensures easy event coordination. From booking
          to the final chord, we strive for a seamless experience. Reach out to
          us to learn more or start your booking today!
        </p>
        <div className=""></div>
      </main>
      {/* form  */}
      <section className=" flex">
        <div className="p-4 flex flex-col gap-3 ">
          {/* first name  */}
          <div class="relative w-full mb-3 flex items-center gap-2">
            <label class="block uppercase t text-xs font-bold mb-2" for="email">
              First Name
            </label>
            <input
              type="email"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder=" First Name"
            />
          </div>
          {/* last name  */}

          <div class="relative w-full mb-3 flex items-center ">
            <label class=" uppercase text-xs font-bold mb-2" for="email">
              Last Name
            </label>
            <input
              type="email"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder=" Last Name"
            />
          </div>

          {/* email  */}
          <div class="relative w-full mb-3 flex items-center gap-2">
            <label class="block uppercase t text-xs font-bold mb-2" for="email">
              Email
            </label>
            <input
              type="email"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Email"
            />
          </div>
          {/* last name  */}

          {/* phone */}
          <div class="relative w-full mb-3 flex items-center gap-2">
            <label class=" uppercase t text-xs font-bold mb-2" for="email">
              Phone
            </label>
            <input
              type="email"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Phone"
            />
          </div>
          {/* event date */}
          <div class="relative w-full mb-3 flex items-center gap-2">
            <label class=" uppercase t text-xs font-bold mb-2" for="email">
              Event Date
            </label>
            <input
              type="email"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Select a date"
            />
          </div>
          {/* about your event  */}
          <div class="relative w-full mb-3 flex items-center gap-2">
            <label
              class=" uppercase t text-xs font-bold mb-2"
              for="email"
            ></label>
            <input
              type="email"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full h-[8em] placeholder-top"
              placeholder="Feed us with a little more detail"
            />
          </div>
          <button className="bg-[#d6cbab] mx-auto py-3 px-[8rem] rounded-2xl">
            Submit
          </button>
          <p className="text-xs">
            In case you encounter any difficulties submitting an inquiry through
            the form, please don't hesitate to reach out to us via email at
            atlgroovefactory2011@yahoo.com.
          </p>
        </div>
        <div className="hidden  md:flex md:w-[40%]">
          <img src={show} alt="" className="w-full h-full" />
        </div>
      </section>
      {/* copy copy  */}
      <div className="p-4 flex justify-around ">
        <img src={fine} alt="" className="md:w-[47%] md:h-[30%] " />
        <img src={dance} alt="" className="hidden md:flex md:w-[47%]  " />
      </div>
      <div className="py-[4em] bg-black text-white px-4 text-xs font-bold text-center md:text-2xl">
        <h1 className="">
          When Party Entertainment Matters... ATL Groove Factory!
        </h1>
      </div>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default ContactUs;
