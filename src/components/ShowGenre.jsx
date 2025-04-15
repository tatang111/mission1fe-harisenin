import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { GenreButton } from "./GenreButton";

export const ShowGenre = () => {
  const [rotateAngle, setRotateAngle] = useState(false);
  const [changeGenre, setChangeGenre] = useState("Genre");

  const handleGenreClick = () => {
    setRotateAngle(!rotateAngle);
  };

  const handleChangeGenre = (field) => {
    setChangeGenre(field)
    setRotateAngle(!rotateAngle)
  };

  return (
    <div className="hidden md:block">                                                             
      <button
        onClick={handleGenreClick}
        className="flex justify-between px-5 max-w-80 gap-2 py-3 bg-[#22282A] absolute top-8 left-14 hover:bg-[#3D4142] cursor-pointer rounded-xl"
      >
        <span>{changeGenre} </span>{" "}
        <div
          className={`${
            rotateAngle ? "rotate-180" : ""
          }  transition-all duration-300`}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </button>

      <div
        className={`flex absolute top-18  left-14 z-10 mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
          rotateAngle ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex shadow-lg">
          <div className="leftButton flex flex-col">
            <GenreButton
              field="Aksi"
              onClick={() => handleChangeGenre("Aksi")}
              rounded="topleft"
            />
            <GenreButton
              field="Anak-Anak"
              onClick={() => handleChangeGenre("Anak-Anak")}
            />
            <GenreButton
              field="Anime"
              onClick={() => handleChangeGenre("Anime")}
            />
            <GenreButton
              field="Britannia"
              onClick={() => handleChangeGenre("Britannia")}
            />
            <GenreButton
              field="Drama"
              onClick={() => handleChangeGenre("Drama")}
            />
            <GenreButton
              field="Fantasi Ilmiah & Fantasi"
              onClick={() => handleChangeGenre("Fantasi Ilmiah & Fantasi")}
            />
            <GenreButton
              field="Kejahatan"
              onClick={() => handleChangeGenre("Kejahatan")}
              rounded="bottomleft"
            />
          </div>
          <div className="rightButton flex flex-col">
            <GenreButton
              field="KDrama"
              onClick={() => handleChangeGenre("KDrama")}
              rounded="topright"
            />
            <GenreButton
              field="Komedi"
              onClick={() => handleChangeGenre("Komedi")}
            />
            <GenreButton
              field="Petualangan"
              onClick={() => handleChangeGenre("Petualangan")}
            />
            <GenreButton
              field="Perang"
              onClick={() => handleChangeGenre("Perang")}
            />
            <GenreButton
              field="Romantis"
              onClick={() => handleChangeGenre("Romantis")}
            />
            <GenreButton
              field="Sains & Alam"
              onClick={() => handleChangeGenre("Sains & Alam")}
            />
            <GenreButton
              field="Thriller"
              onClick={() => handleChangeGenre("Thriller")}
              rounded="bottomright"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
