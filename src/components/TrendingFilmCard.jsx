import { useRef } from "react";
import { ArrowScrollX } from "./ArrowScrollX";
import { PotraitCard } from "./PotraitCard";
import { TopTen } from "./TopTen";

export const TrendingFilmCard = () => {
  const scrollContainerRef = useRef(null);
  return (
    <div className="top-film flex flex-col gap-4 md:gap-8 relative">
      <h1 className="text-2xl md:text-5xl font-[600]">Film Trending</h1>
      <div className="relative">
        <ArrowScrollX containerRef={scrollContainerRef}/>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          <PotraitCard src="/imgpotrait/Number=14.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=15.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=16.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=17.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=18.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=19.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=20.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=21.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=22.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=23.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=24.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=25.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=26.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=27.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=28.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=29.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=30.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=1.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=2.png" info={<TopTen />} />
          <PotraitCard src="/imgpotrait/Number=3.png" info={<TopTen />} />
        </div>
      </div>
    </div>
  );
};
