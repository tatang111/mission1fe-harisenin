import { useRef } from "react";
import { ArrowScrollX } from "./ArrowScrollX";
import { NewEpisode } from "./NewEpisode";
import { PotraitCard } from "./PotraitCard";
import { TopTen } from "./TopTen";

export const RatingFilmCard = () => {
  const scrollContainerRef = useRef(null)

  return (
    <div className="top-film flex flex-col gap-4 md:gap-8 relative">
      <h1 className="text-2xl md:text-5xl font-[600]">
        Top Rating Film dan Series Hari Ini
      </h1>
      <div className="relative">
          <ArrowScrollX containerRef={scrollContainerRef} />
        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <PotraitCard src="/imgpotrait/Number=1.png" info={<NewEpisode />} />
          <PotraitCard src="/imgpotrait/Number=10.png" />
          <PotraitCard src="/imgpotrait/Number=11.png" />
          <PotraitCard src="/imgpotrait/Number=12.png" info={<NewEpisode />} />
          <PotraitCard src="/imgpotrait/Number=14.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=15.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=16.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=17.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=18.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=19.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=20.png" info={<TopTen />} />
        </div>
      </div>
    </div>
  );
};
