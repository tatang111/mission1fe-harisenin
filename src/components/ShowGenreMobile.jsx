import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GenreMobileButton } from "./GenreMobileButton";

export const ShowGenreMobile = () => {
  const [rotateAngle, setRotateAngle] = useState(false);
  const [changeGenre, setChangeGenre] = useState("Genre");

  const handleGenreClick = () => {
    setRotateAngle(!rotateAngle);
  };

  const handleChangeGenre = (field) => {
    setChangeGenre(field);
    setRotateAngle(!rotateAngle);
  };

  return (
    <nav className="relative block md:hidden">
      <button
        onClick={handleGenreClick}
        className="flex gap-1 items-center px-2 py-2  rounded-lg"
      >
        <h1 className="line-clamp-1">{changeGenre} </h1>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`transition-transform duration-200 ${
            rotateAngle ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute top-full -left-12 mt-1 w-12/10 z-10 bg-gray-800 rounded-lg shadow- overflow-hiddentransition-all duration-300 ease-in-out
                ${rotateAngle ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            `}
      >
        <div className="p-2 flex space-y-1">
          <div className="bg-gray-800">
            <GenreMobileButton
              field="Aksi"
              onClick={() => handleChangeGenre("Aksi")}
            />
            <GenreMobileButton
              field="Anak-Anak"
              onClick={() => handleChangeGenre("Anak-Anak")}
            />
            <GenreMobileButton
              field="Anime"
              onClick={() => handleChangeGenre("Anime")}
            />
            <GenreMobileButton
              field="Britannia"
              onClick={() => handleChangeGenre("Britannia")}
            />
            <GenreMobileButton
              field="Drama"
              onClick={() => handleChangeGenre("Drama")}
            />
            <GenreMobileButton
              field="Fantasi Ilmiah & Fantasi"
              onClick={() => handleChangeGenre("Fantasi Ilmiah & Fantasi")}
            />
            <GenreMobileButton
              field="Kejahatan"
              onClick={() => handleChangeGenre("Kejahatan")}
            />
          </div>
          <div className="bg-gray-800">
            <GenreMobileButton
              field="KDrama"
              onClick={() => handleChangeGenre("KDrama")}
            />
            <GenreMobileButton
              field="Komedi"
              onClick={() => handleChangeGenre("Komedi")}
            />
            <GenreMobileButton
              field="Petualangan"
              onClick={() => handleChangeGenre("Petualangan")}
            />
            <GenreMobileButton
              field="Perang"
              onClick={() => handleChangeGenre("Perang")}
            />
            <GenreMobileButton
              field="Romantis"
              onClick={() => handleChangeGenre("Romantis")}
            />
            <GenreMobileButton
              field="Sains & Alam"
              onClick={() => handleChangeGenre("Sains & Alam")}
            />
            <GenreMobileButton
              field="Thriller"
              onClick={() => handleChangeGenre("Thriller")}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
