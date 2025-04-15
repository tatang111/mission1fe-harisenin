import { PotraitCard } from "./PotraitCard";
import { TopTen } from "./TopTen";

export const RekomendasiSerupa = () => {
  return (
    <div className="text-white px-4 md:px-20 gap-6 md:gap-8 grid">
      <h1 className="text-3xl font-[600]">Rekomendasi Serupa</h1>
    <div className="flex gap-1 -ml-3 md:gap-5 ">
      <PotraitCard src="/imgpotrait/Number=1.png" info={<TopTen />} />
      <PotraitCard src="/imgpotrait/Number=2.png" info={<TopTen />} />
      <PotraitCard src="/imgpotrait/Number=3.png" info={<TopTen />} />
    </div>
    </div>
  );
};
