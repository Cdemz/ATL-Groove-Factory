import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const data = [
  {
    avatar: <AiFillStar />,
    name: 'Alaina',
    reveiw:
      'Best wedding band I have ever seen! Nonstop performance...they read the crowd perfectly and knew how to get people on the dance floor. We were so proud to have them perform at our wedding! Absolutely would recommend to anyone!.',
    event: 'WEDDING',
  },

  {
    avatar: <AiFillStar />,
    name: 'Aaron ',
    reveiw:
      'Awesome party! The band was fantastic as was the team leading up to the event. Our guests raved about how great the band was and how easy it was to dance and stay on the dance floor. We would definitely recommend ATL Groove factory, they are top notch!.',
    event: 'CORPORATE',
  },

  {
    avatar: <AiFillStar />,
    name: ' Cheryl ',
    reveiw:
      "Atl.Groove Factory played at my daughter's wedding in Knoxville,Tn on June 3. \n Our guests are still raving about what a fantastic band they are.   I would recommend them to anyone and would most certainly use them again.",
    event: 'WEDDING',
  },

  {
    avatar: <AiFillStar />,
    name: 'Kristy ',
    reveiw:
      'ATL Groove Factory performed as a part of our New Years Eve Wedding and they were nothing short of fabulous!. I HIGHLY reccomend ATL Groove Factory if you love to dance, love to smile, and want to have a great time! They are simply world-class!',
    event: 'WEDDING',
  },

  {
    avatar: <AiFillStar />,
    name: 'Caroline',
    reveiw:
      'The Atl Groove Factory are such class acts! They were so energetic and fun and kept the crowd dancing at all times! People were fighting for a spot on the dance floor to get close to them. I highly recommend   if you want amazing music with a fun atmosphere.',
    event: 'WEDDING',
  },

  {
    avatar: <AiFillStar />,
    name: 'Summer',
    reveiw:
      "They were so much fun and so amazing! They kept the party going all night long!   In fact, our families loved them so much they booked them for our brother's wedding as well! Would hire them again in a heart beat!",
    event: 'WEDDING',
  },
];

const Thoughts = () => {
  return (
    <div className="p-4 bg-[#a8a59a]">
      {/* main  */}
      {/* years of experience */}
      <div className=" flex gap-2 bg-white font-bold justify-around text-center p-[3em] rounded-3xl shadow-lg shadow-black">
        <div>
          <h1 className="font-extrabold text-[#ff0000] text-xl ">20+</h1>
          <h5>YEARS</h5>
        </div>
        {/* second  */}
        <div>
          <h1 className="font-extrabold text-[#ff0000] text-xl ">150+</h1>
          <h5>EVENTS</h5>
        </div>
        {/* third  */}
        <div>
          <h1 className="font-extrabold text-[#ff0000] text-xl ">100%</h1>
          <h5>5-STAR</h5>
        </div>
      </div>{' '}
      <div className="text-center mt-8 flex flex-col gap-4">
        <p>
          Come and find out for yourself what a truly memorable event can be...
          Ya’ll get ready! And the fun never stops! ATL Groove plays up to four
          hours with NO BREAKS.
        </p>
        <h1 className="font-bold text-xl">
          WHAT OUR CLIENTS SAY ABOUT ATL GROOVE FACTORY
        </h1>
      </div>
      {/* skills */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        {data.map((review, index) => (
          <div class="">
            <div class="bg-gray-300  flex flex-col items-center  p-6 rounded-3xl mt-4 md:h-[31em]  ">
              <h1 className="font-extrabold text-2xl">{review.name}</h1>
              <h6>{review.event}</h6>
              <div className=" text-[#d4af37] text-3xl flex my-4">
                {review.avatar}
                {review.avatar}
                {review.avatar}
                {review.avatar}
                {review.avatar}
              </div>
              <p className="text-center font-bold mt-2 text-lg">
                {review.reveiw}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" p-1 text-center line md:px-8 md:pt-4">
        <h1 className="font-bold">IT'S PLAIN TO SEE THAT...</h1>
        <p className="indent-4 leading-8">
          Over time, we have established strong connections with our clients,
          many of whom have become lifelong friends. Our passion and purpose is
          to use music to create{' '}
          <span className="font-bold">unforgettable experiences</span> that
          foster meaningful connections, and we look forward to doing the same
          for you.
        </p>
      </div>
    </div>
  );
};

export default Thoughts;
