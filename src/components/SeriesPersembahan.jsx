import { useRef } from "react";
import { ArrowScrollX } from "./ArrowScrollX";
import { PotraitCard } from "./PotraitCard";
import { NewEpisode } from "./NewEpisode";
import { TopTen } from "./TopTen";
import { Premium } from "./Premium";

export const SeriesPersembahan = () => {
     const scrollContainerRef = useRef(null)
    
      return (
        <div className="top-film flex flex-col gap-4 md:gap-8 relative">
          <h1 className="text-2xl md:text-5xl font-[600]">
            Series Persembahan Chill
          </h1>
          <div className="relative">
              <ArrowScrollX containerRef={scrollContainerRef} />
            <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              <PotraitCard src="/imgpotrait/Number=22.png" info={<Premium />} />
              <PotraitCard src="/imgpotrait/Number=23.png" info={<Premium />} />
              <PotraitCard src="/imgpotrait/Number=24.png" info={<Premium />} />
              <PotraitCard src="/imgpotrait/Number=25.png" info={<Premium />} />
              <PotraitCard src="/imgpotrait/Number=26.png" info={<Premium />} info2={<TopTen />} />
              <PotraitCard src="/imgpotrait/Number=27.png" info={<Premium />} info2={<TopTen />} />
              <PotraitCard src="/imgpotrait/Number=28.png" info={<Premium />} info2={<TopTen />} />
              <PotraitCard src="/imgpotrait/Number=29.png" info={<Premium />} info2={<TopTen />} />
              <PotraitCard src="/imgpotrait/Number=30.png" info={<Premium />} info2={<TopTen />} />
              <PotraitCard src="/imgpotrait/Number=31.png" info={<Premium />} />
              <PotraitCard src="/imgpotrait/Number=32.png" info={<Premium />} />
            </div>
          </div>
        </div>
      );
}