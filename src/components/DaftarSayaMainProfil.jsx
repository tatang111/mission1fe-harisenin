import { Link } from "react-router-dom";
import { PotraitCard } from "./PotraitCard";
import { TopTen } from "./TopTen";

export const DaftarSayaMainProfil = () => {
  return (
    <section className="md:px-20 px-5 flex flex-col gap-8">
      <div className="w-full flex justify-between">
        <span className="text-3xl font-[600]">Daftar Saya</span>
        <Link to="/daftarsaya" className="cursor-pointer hover:underline">Lihat Semua</Link>
      </div>
      <div className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide">
        <PotraitCard
          src="/imgpotrait/Number=17.png"
          duration="2h 24m"
          genre="Action • Adventure"
          info={<TopTen />}
        />
        <PotraitCard
          src="/imgpotrait/Number=18.png"
          duration="2h 14m"
          genre="Comedy • Adventure"
          info={<TopTen />}
        />
        <PotraitCard
          src="/imgpotrait/Number=19.png"
          duration="1h 54m"
          genre="Horror • Adventure • Comedy"
          info={<TopTen />}
        />
        <PotraitCard
          src="/imgpotrait/Number=20.png"
          duration="2h 4m"
          genre="Action • Comedy"
          info={<TopTen />}
        />
        <PotraitCard
          src="/imgpotrait/Number=21.png"
          duration="2h 12m"
          genre="Comedy • Adventure"
          info={<TopTen />}
        />
      </div>
    </section>
  );
};