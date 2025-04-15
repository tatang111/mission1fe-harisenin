import { useContext } from "react";
import { ContinueFilmCard } from "../components/ContinueFilmCard";
import { ContinueSeriesCard } from "../components/ContinueSeriesCard";
import { Footer } from "../components/Footer";
import { MainLayout } from "../components/MainLayout";
import { Navbar } from "../components/Navbar";
import { RatingFilmCard } from "../components/RatingFilmCard";
import { ReleaseFilmCard } from "../components/ReleaseFilmCard";
import { SeriesPersembahan } from "../components/SeriesPersembahan";
import { TrendingFilmCard } from "../components/TrendingFilmCard";
import { PopupContext } from "../SharedContext";
import { PopupDetailFilm } from "../components/PopupDetailFilm";

export const Film = () => {
  const { detailClickingFilm, setDetailClickingFilm } = useContext(PopupContext);

  return (
    <div>
      <div
        className={`text-white relative w-full bg-black ${
          detailClickingFilm ? "brightness-35" : ""
        } `}
      >
        <Navbar genre={true} />
        <MainLayout
          src="https://image.tmdb.org/t/p/original//yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
          title="A Minecraft Movie"
          desc="Empat orang yang tidak cocok harus berjuang menghadapi masalah-masalah biasa ketika mereka tiba-tiba ditarik melalui portal misterius ke Overworld: dunia ajaib berbentuk kubus yang aneh yang berkembang pesat berkat imajinasi. Untuk kembali ke rumah, mereka harus menguasai dunia ini sambil memulai perjalanan ajaib dengan seorang perajin ahli yang tak terduga, Steve."
          genre={true}
        />
        <div className="flex flex-col mt-10 px-6 md:px-12 gap-12">
          <ContinueFilmCard />
          <SeriesPersembahan />
          <RatingFilmCard />
          <TrendingFilmCard />
          <ReleaseFilmCard />
        </div>
        <div className="md:mt-[70px] mt-[20px]">
          <Footer />
        </div>
      </div>
      {detailClickingFilm && (
        <div className="absolute z-50 top-[350px] md:top-[520px]  left-1/2 -translate-x-1/2 flex  md:items-center justify-center">
          <PopupDetailFilm onClose={() => setDetailClickingFilm(false)} />
        </div>
      )}
    </div>
  );
};
