import React from 'react';
import bg from '../assets/bg-gangan.jpg';
import { FaRegPlayCircle } from 'react-icons/fa';

const Song_List = () => {
  return (
    <div
      id="songs"
      className="relative flex flex-col justify-center items-center "
    >
      <img src={bg} alt="" className="w-[100vw] md:h-[46em]" />
      <div className="absolute top-4 h-[97.3%] w-[90%] bg-white my-auto flex flex-col items-center ">
        <h1 className="font-extrabold mt-4">ATL GROOVE FACTORY SONG LIST</h1>
        <div className=" flex flex-col items-center mt-4 gap-4">
          {/* SONG 1 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4 " />
            <h2 className="font-bold">
              De Ja’ Vu - <span className="font-light">Beyonce</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 2 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Love On Top - <span className="font-light">Beyonce</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 3 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              I Gotta Feeling -{' '}
              <span className="font-light">Black Eyed Peas</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 4 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Don’t Be Cruel - <span className="font-light">Bobby Brown</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 5 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Every Little Step -{' '}
              <span className="font-light">Bobby Brown</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 6 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              24 Karat Magic / Hot in Here -{' '}
              <span className="font-light">Bruno Mars</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 7 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Locked Out Of Heaven -
              <span className="font-light">Bruno Mars</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 7 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              That’s What I Like -<span className="font-light">Bruno Mars</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 8 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Treasure -<span className="font-light">Bruno Mars</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 9 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Uptown Funk -<span className="font-light">Bruno Mars</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 10 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Versace on the Floor -
              <span className="font-light">Bruno Mars</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 11 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Call Me Maybe -
              <span className="font-light">Carly Rae Jepsen</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 12 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Lady Marmalade -
              <span className="font-light">Christina Aguilera</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 13 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Get Lucky -<span className="font-light">Daf Punk</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 14 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Independent Woman -
              <span className="font-light">Destiny’s Child</span>
            </h2>
          </div>
          {/* SONG End  */}

          {/* SONG 16 */}
          <div className="flex flex-row items-center">
            <FaRegPlayCircle className="mr-4" />
            <h2 className="font-bold">
              Bootylicious -<span className="font-light">Destiny’s Child</span>
            </h2>
          </div>
          {/* SONG End  */}
        </div>
        <button className="bg-[#d6cbab] px-4 py-2 rounded-3xl mt-2 z-[8]">
          Explore our Songs & Media
        </button>
      </div>
    </div>
  );
};

export default Song_List;
