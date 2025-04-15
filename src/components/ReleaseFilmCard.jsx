import { useRef } from "react";
import { ArrowScrollX } from "./ArrowScrollX";
import { NewEpisode } from "./NewEpisode";
import { PotraitCard } from "./PotraitCard";
import { TopTen } from "./TopTen";

export const ReleaseFilmCard = () => {
  const scrollContainerRef = useRef(null)

  return (
    <div className="top-film flex flex-col gap-4 md:gap-8 relative">
      <h1 className="text-2xl md:text-5xl font-[600]">Rilis Baru</h1>
      <div className="relative">
          <ArrowScrollX  containerRef={scrollContainerRef} />
        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <PotraitCard src="/imgpotrait/Number=12.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=13.png" info={<NewEpisode />} />
          <PotraitCard src="/imgpotrait/Number=14.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=15.png" info={<NewEpisode />} />
          <PotraitCard src="/imgpotrait/Number=5.png" />
          <PotraitCard src="/imgpotrait/Number=6.png" />
          <PotraitCard src="/imgpotrait/Number=7.png" />
          <PotraitCard src="/imgpotrait/Number=8.png" />
          <PotraitCard src="/imgpotrait/Number=9.png" />
          <PotraitCard src="/imgpotrait/Number=10.png" />
          <PotraitCard src="/imgpotrait/Number=11.png" />
        </div>
      </div>
    </div>
  );
};
