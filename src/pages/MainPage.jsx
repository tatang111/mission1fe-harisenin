import { useContext } from "react";
import { CardLayout } from "../components/CardLayout";
import { Footer } from "../components/Footer";
import { MainLayout } from "../components/MainLayout";
import { Navbar } from "../components/Navbar";
import { PopupContext } from "../SharedContext";
import { PopupDetailFilm } from "../components/PopupDetailFilm";

export const MainPage = () => {
  const { detailClickingFilm, setDetailClickingFilm } =
    useContext(PopupContext);

  return (
    <main>
      <div
        className={`text-white relative w-full bg-black ${
          detailClickingFilm ? "brightness-35" : ""
        } `}
      >
        <div className="bg-[var(--bg-color)] w-full text-[var(--text-color)]">
          <Navbar />
          <MainLayout
            src="https://image.tmdb.org/t/p/original//d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg"
            title="Sonic The Hedgehog 3"
            desc="Sonic, Knuckles, and Tails reunite against a powerful new adversary,
          Shadow, a mysterious villain with powers unlike anything they have
          faced before. With their abilities outmatched in every way, Team Sonic
          must seek out an unlikely alliance in hopes of stopping Shadow and
          protecting the planet."
          />
          <CardLayout />
        </div>
        <Footer />
      </div>
      {detailClickingFilm && (
        <section className="absolute z-50 top-[350px] md:top-[520px]  left-1/2 -translate-x-1/2 flex  md:items-center justify-center">
          <PopupDetailFilm onClose={() => setDetailClickingFilm(false)} />
        </section>
      )}
    </main>
  );
};
