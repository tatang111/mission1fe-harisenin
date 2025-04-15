import { useContext } from "react";
import { MainProfil } from "../components/MainProfil";
import { Navbar } from "../components/Navbar";
import { PopupContext } from "../SharedContext";
import { PopupDetailFilm } from "../components/PopupDetailFilm";

export const Profil = () => {
  const { detailClickingFilm, setDetailClickingFilm } = useContext(PopupContext);

  return (
    <div>
      <div
        className={`bg-[var(--bg-color)] w-full text-[var(--text-color)] ${
          detailClickingFilm ? "" : ""
        } `}
      >
        <Navbar />
        <MainProfil />
      </div>
    </div>
  );
};
