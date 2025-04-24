import {
    faBackward,
    faExpand,
    faForward,
    faForwardStep,
    faGaugeHigh,
    faListUl,
    faMessage,
    faPause,
    faPlay,
    faVolumeHigh,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useState, useEffect } from "react";
  
  export const WatchFilm = () => {
    const [showControls, setShowControls] = useState(false);
    const [controlsTimeout, setControlsTimeout] = useState(null);
  
    const hideControls = () => {
      if (controlsTimeout) clearTimeout(controlsTimeout);
      setControlsTimeout(setTimeout(() => setShowControls(false), 3000));
    };
  
    const handleScreenTap = () => {
      setShowControls(!showControls);
      hideControls();
    };
  
    useEffect(() => {
      hideControls();
      return () => {
        if (controlsTimeout) clearTimeout(controlsTimeout);
      };
    }, []);
  
    return (
      <main 
        className="bg-[url('/tonton/tontonfilm.png')] w-full h-screen bg-cover bg-center overflow-hidden fixed touch-none group"
        onClick={handleScreenTap}
      >
        <div className="text-white text-3xl md:text-5xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
          <FontAwesomeIcon icon={faPause} />
        </div>
  
        <button className="bg-white text-black absolute right-4 md:right-20 bottom-24 md:bottom-30 rounded-full px-3 py-1 md:px-6 md:py-2 text-sm md:text-base opacity-0 md:group-hover:opacity-100 transition duration-300">
          Lewati intro
        </button>
  
        <div className={`
          bg-[#181A1C99] w-full h-[70px] md:h-[96px] flex items-center justify-between py-3 px-4 md:py-7 md:px-10 text-white absolute 
          transition-all duration-300
          ${showControls ? 'bottom-0' : '-bottom-[70px] md:-bottom-[96px]'}
          md:group-hover:bottom-0
        `}>
          <div className="flex gap-2 md:gap-4 text-lg md:text-xl items-center">
            <span className="text-xl md:text-2xl">
              <FontAwesomeIcon icon={faPlay} />
            </span>
            <div className="flex items-center">
              <span className="text-xs">10s</span>
              <FontAwesomeIcon icon={faBackward} className="text-base md:text-xl" />
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faForward} className="text-base md:text-xl" />
              <span className="text-xs">10s</span>
            </div>
            <FontAwesomeIcon icon={faVolumeHigh} className="text-base md:text-xl" />
          </div>
  
          <div className="text-sm md:text-lg hidden sm:block">
            A man Called Otto
          </div>
  
          <div className="flex gap-3 md:gap-5 text-lg md:text-2xl items-center">
            <div className="opacity-100 lg:opacity-0 flex gap-3">
            <FontAwesomeIcon icon={faForwardStep} /> 
            <FontAwesomeIcon icon={faListUl} /> 
            </div>
            <FontAwesomeIcon icon={faMessage} className="text-base md:text-xl" />
            <FontAwesomeIcon icon={faGaugeHigh} className="text-base md:text-xl" />
            <FontAwesomeIcon icon={faExpand} className="text-base md:text-xl" />
          </div>
        </div>
      </main>
    );
  };