import { CardLayout } from "../components/CardLayout";
import { Footer } from "../components/Footer";
import { MainLayout } from "../components/MainLayout";
import { Navbar } from "../components/Navbar";

export const MainPage = () => {
  return (
    <div className="bg-black">
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
  );
};
