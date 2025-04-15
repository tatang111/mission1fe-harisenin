import { useContext } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { NewEpisode } from "../components/NewEpisode";
import { PotraitCard } from "../components/PotraitCard";
import { TopTen } from "../components/TopTen";
import { PopupContext } from "../SharedContext";
import { PopupDetailFilm } from "../components/PopupDetailFilm";

export const DaftarSaya = () => {
  const { detailClickingFilm, setDetailClickingFilm } =
    useContext(PopupContext);

  return (
    <div>
      <div
        className={`bg-black text-white ${
          detailClickingFilm ? "brightness-35" : ""
        } `}
      >
        <Navbar />
        <div className="md:px-20 ml-4 my-[20px] md:my-[70px] flex flex-col gap-8">
          <h1 className="text-3xl font-[600]">Daftar Saya</h1>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-1 gap-y-5 md:gap-5">
            {movies.map((movie, index) => (
              <PotraitCard
                key={index}
                src={movie.src}
                duration={movie.duration}
                genre={movie.genre}
                info={movie.info}
                info2={movie.info2}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
      {detailClickingFilm && (
        <div className="absolute z-50 top-[100px] md:top-[100px]  left-1/2 -translate-x-1/2 flex  md:items-center justify-center">
          <PopupDetailFilm onClose={() => setDetailClickingFilm(false)} />
        </div>
      )}
    </div>
  );
};

const movies = [
  {
    src: "/imgpotrait/Number=1.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: <TopTen />,
    info2: <NewEpisode />,
  },
  {
    src: "/imgpotrait/Number=2.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: "",
    info2: "",
  },
  {
    src: "/imgpotrait/Number=3.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: "",
    info2: <NewEpisode />,
  },
  {
    src: "/imgpotrait/Number=4.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: "",
    info2: <NewEpisode />,
  },
  {
    src: "/imgpotrait/Number=5.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: <TopTen />,
    info2: <NewEpisode />,
  },
  {
    src: "/imgpotrait/Number=6.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: <TopTen />,
    info2: <NewEpisode />,
  },
  {
    src: "/imgpotrait/Number=7.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: <TopTen />,
    info2: "",
  },
  {
    src: "/imgpotrait/Number=8.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: <TopTen />,
    info2: "",
  },
  {
    src: "/imgpotrait/Number=9.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: "",
    info2: "",
  },
  {
    src: "/imgpotrait/Number=10.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: "",
    info2: "",
  },
  {
    src: "/imgpotrait/Number=11.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: "",
    info2: "",
  },
  {
    src: "/imgpotrait/Number=12.png",
    duration: "2h 1m",
    genre: "Comedy • Action • Comedy",
    info: "",
    info2: "",
  },
];
