import {
  faAngleDown,
  faAnglesDown,
  faArrowDown,
  faCheck,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { PopupContext } from "../SharedContext";

export const PotraitCard = ({ src, info, rate, genre, duration, info2 }) => {
  const { setDetailClickingSeries, setDetailClickingFilm } =
    useContext(PopupContext);

  const handleClickDetail = () => {
    const theMovie = {
      src: src,
      rate: rate,
      genre: genre,
      duration: duration,
    };
    localStorage.setItem("movie", JSON.stringify(theMovie));
    if (window.location.pathname.includes("/series")) {
      setDetailClickingSeries(true);
    } else {
      setDetailClickingFilm(true);
    }
    setTimeout(() => {
      const popup = document.querySelector('.popup-container');
      if (popup) {
        popup.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleMobileClick = () => {
    if (window.innerWidth < 768) {
      const theMovie = {
        src: src,
        rate: rate,
        genre: genre,
        duration: duration,
      };
      localStorage.setItem("movie", JSON.stringify(theMovie));
      if (window.location.pathname.includes("/series")) {
        setDetailClickingSeries(true);
      } else {
        setDetailClickingFilm(true);
      }
    }
  };

  const handleWatch = () => {
    if (window.location.pathname.includes("/series")) {
      window.location.pathname = "watchseries"
    } else {
      window.location.pathname = "watchfilm"
    }
  }

  return (
    <div
      onClick={handleMobileClick}
      className="flex-shrink-0 w-[120px]  h-[175px] md:w-[200px] md:h-[300px] relative group"
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg transition-all duration-300 group-hover:z-20">
        <div className="relative w-full h-full overflow-hidden">
          <img
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
            src={src}
            alt=""
            loading="lazy"
          />
        </div>

        {/* Event Hover */}
        <div className="absolute hidden md:flex flex-col inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3">
          <div className="flex-grow"></div>
          <div className="mb-2">
            <div className="flex justify-between items-center gap-2 mb-2">
              <div className="flex gap-2">
                <button onClick={handleWatch} className="bg-white cursor-pointer text-black w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
                  <FontAwesomeIcon icon={faPlay} className="text-sm ml-[2px]" />
                </button>
                <button className="text-white cursor-pointer w-8 h-8 border-2 flex items-center justify-center rounded-full  border-gray-400 hover:border-white transition-colors">
                  <FontAwesomeIcon icon={faCheck} className="text-sm" />
                </button>
              </div>
              <button
                onClick={handleClickDetail}
                className="text-white cursor-pointer w-8 h-8 border-2 flex items-center justify-center rounded-full  border-gray-400 hover:border-white transition-colors"
              >
                <FontAwesomeIcon icon={faAngleDown} className="text-sm" />
              </button>
            </div>

            <div className="flex gap-2 text-gray-300 mb-1">
              <span className="text-md rounded-full px-2 py-[2px] border-gray-300 bg-[#CDF1FF4D] ">
                13+
              </span>
              <span className="items-center flex">{duration || "2j 33m"}</span>
            </div>

            <div className="text-white text-sm font-semibold line-clamp-1">
              {genre}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-2 left-2 right-2 text-white text-sm font-medium group-hover:opacity-0 transition-opacity duration-300">
        {info}
      </div>
      <div className="absolute top-2 left-2 right-2 text-white text-sm font-medium group-hover:opacity-0 transition-opacity duration-300">
        {info2}
      </div>
    </div>
  );
};
