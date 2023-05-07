import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import why from '../assets/WHY.jpg';
import { TiTick } from 'react-icons/ti';

const Why_us = () => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1500, once: false });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white ">
      <div className=" p-6 text-center flex flex-col">
        <h1 className="font-bold text-3xl py-3">WHAT MAKES US STAND OUT</h1>
        <div className="flex flex-col md:flex-row  md:gap-4">
          <div className="md:w-[50%]">
            <img
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              src={why}
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-4 mt-4 md:mt-0 md:w-[50%] md:gap-[3.2em]">
            {/* reason 1 */}
            <div className="flex flex-row  ">
              <a href="">
                <button
                  class="text-white bg-[#ff0000] shadow-lg text-2xl h-10 w-10 items-center justify-center  rounded-full outline-none focus:outline-none mr-2 p-2 font-bold"
                  type="button"
                >
                  <TiTick />
                </button>
              </a>
              <p>
                <span className="font-bold">Versatility:</span>
                Our music library is a compilation of the finest dance tunes
                from various genres and decades, guaranteed to get crowds up and
                dancing every time. Our live band seamlessly blends these songs
                together, with the same energy, style, and sound quality that
                you'd expect from a top-notch DJ.
              </p>
            </div>
            {/* reason 2 */}

            {/* reason 2 */}
            <div className="flex flex-row  ">
              <a href="">
                <button
                  class="text-white bg-[#ff0000] shadow-lg text-2xl h-10 w-10 items-center justify-center  rounded-full outline-none focus:outline-none mr-2 p-2 font-bold"
                  type="button"
                >
                  <TiTick />
                </button>
              </a>
              <p>
                <span className="font-bold"> PARTY PLANNING:</span>
                With years of experience in the high-end event industry, we take
                the burden off our clients' shoulders by expertly handling all
                the details. Our stress-free party planning approach ensures
                that each event is tailored to our clients' specific needs, with
                all the perfect touches to make it truly unique!
              </p>
            </div>
            {/* reason 3 */}

            {/* reason 3 */}
            <div className="flex flex-row  ">
              <a href="">
                <button
                  class="text-white bg-[#ff0000] shadow-lg text-2xl h-10 w-10 items-center justify-center  rounded-full outline-none focus:outline-none mr-2 p-2 font-bold"
                  type="button"
                >
                  <TiTick />
                </button>
              </a>
              <p>
                <span className="font-bold">TOP LEVEL PRODUCTION :</span>
                Top of the line sound and lighting in-house rivaling the biggest
                touring acts, scaled to fit any size event!
              </p>
            </div>
            {/* reason 4 */}

            {/* reason 4 */}
            <div className="flex flex-row  ">
              <a href="">
                <button
                  class="text-white bg-[#ff0000] shadow-lg text-2xl h-10 w-10 items-center justify-center  rounded-full outline-none focus:outline-none mr-2 p-2 font-bold"
                  type="button"
                >
                  <TiTick />
                </button>
              </a>
              <p>
                <span className="font-bold">INTERACTIVITY:</span> We knows how
                to engage with the crowd and get them involved in the music. You
                encourage singing and dancing, and may even
              </p>
            </div>
            {/* END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why_us;
