import { useRef } from "react";
import { ArrowScrollXContinue } from "./ArrowScrollXContinue";
import { NewEpisode } from "./NewEpisode";
import { NewEpisodeSeries } from "./NewEpisodeSeries";
import { LandscapeCardSeries } from "./LandscapeCardSeries";

export const ContinueSeriesCard = () => {
  const scrollContainerRef = useRef();

  return (
    <div className="continueWatch flex flex-col gap-4 md:gap-8 relative">
      <h1 className="text-2xl md:text-5xl  font-[600]">
        Melanjutkan Nonton Series 
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
          <LandscapeCardSeries src="/imglandscape/Type=20.png" rate="4.5/5" info={<NewEpisodeSeries />}  />
          <LandscapeCardSeries src="/imglandscape/Type=21.png" rate="4.9/5" info={<NewEpisodeSeries />} />
          <LandscapeCardSeries src="/imglandscape/Type=22.png" rate="4.7/5" info={<NewEpisodeSeries />} />
          <LandscapeCardSeries src="/imglandscape/Type=23.png" rate="4.8/5" info={<NewEpisodeSeries />} />
          <LandscapeCardSeries src="/imglandscape/Type=24.png" rate="4.8/5" info={<NewEpisodeSeries />} />
          <LandscapeCardSeries src="/imglandscape/Type=25.png" rate="4.8/5" info={<NewEpisodeSeries />} />
          <LandscapeCardSeries src="/imglandscape/Type=26.png" rate="4.8/5" info={<NewEpisodeSeries />} />
          <LandscapeCardSeries src="/imglandscape/Type=27.png" rate="4.8/5" info={<NewEpisodeSeries />} />
          <LandscapeCardSeries src="/imglandscape/Type=28.png" rate="4.8/5" info={<NewEpisodeSeries />} />
          <LandscapeCardSeries src="/imglandscape/Type=29.png" rate="4.8/5" info={<NewEpisodeSeries />} />
          <LandscapeCardSeries src="/imglandscape/Type=30.png" rate="4.8/5" info={<NewEpisodeSeries />} />
        </div>
      </div>
    </div>
  );
};
