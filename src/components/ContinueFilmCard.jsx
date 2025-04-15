import { useRef } from "react";
import { ArrowScrollXContinue } from "./ArrowScrollXContinue";
import { LandscapeCardFilm } from "./LandscapeCardFilm";

export const ContinueFilmCard = () => {
  const scrollContainerRef = useRef();

  return (
    <div className="continueWatch flex flex-col gap-4 md:gap-8 relative">
      <h1 className="text-2xl md:text-5xl  font-[600]">
        Melanjutkan Nonton Film
      </h1>
      <div className="relative ">
        <ArrowScrollXContinue
          containerRef={scrollContainerRef}
          width="1215px"
        />
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          <LandscapeCardFilm src="/imglandscape/Type=10.png" rate="4.5/5" />
          <LandscapeCardFilm src="/imglandscape/Type=11.png" rate="4.9/5" />
          <LandscapeCardFilm src="/imglandscape/Type=12.png" rate="4.7/5" />
          <LandscapeCardFilm src="/imglandscape/Type=13.png" rate="4.8/5" />
          <LandscapeCardFilm src="/imglandscape/Type=14.png" rate="4.8/5" />
          <LandscapeCardFilm src="/imglandscape/Type=15.png" rate="4.8/5" />
          <LandscapeCardFilm src="/imglandscape/Type=16.png" rate="4.8/5" />
          <LandscapeCardFilm src="/imglandscape/Type=17.png" rate="4.8/5" />
          <LandscapeCardFilm src="/imglandscape/Type=18.png" rate="4.8/5" />
          <LandscapeCardFilm src="/imglandscape/Type=19.png" rate="4.8/5" />
          <LandscapeCardFilm src="/imglandscape/Type=20.png" rate="4.8/5" />
        </div>
      </div>
    </div>
  );
};
