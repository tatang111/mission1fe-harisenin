import {
  faAngleDown,
  faInfo,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ShowGenre } from "./ShowGenre";

export const MainLayout = ({ src, title, desc, genre }) => {
  return (
    <main className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <img
        className="w-full h-full object-cover hero-image "
        src={src}
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      {genre && <ShowGenre />}
      {/* title and desc */}
      <article className="absolute left-0 bottom-0  px-4 md:px-12 py-8 flex flex-col gap-4 w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)]">
          {title}
        </h1>
        <p className="text-white/90 [text-shadow:_0_1px_4px_rgb(0_0_0_/_70%)] text-md font-[450] describe w-9/10 md:w-8/12 line-clamp-2 md:line-clamp-none">
          {desc}
        </p>
        {/* button under of desc */}
        <div className="flex justify-between">
          <div className="flex gap-1 md:gap-4">
            <button className=" px-4 py-1 rounded-full flex  items-center cursor-pointer bg-[#0586FF] active:bg-[#024DB7] hover:bg-[#0367DB]">
              Mulai
            </button>
            <button className="bg-[#616161] px-4 py-1 rounded-full flex items-center cursor-pointer hover:bg-[#424242] active:bg-[#212121] md:gap-1">
              <i className=" border-2 pt-[0px] border-white rounded-full w-5 h-5 text-[10px] fa-solid fa-info">
                <FontAwesomeIcon icon={faInfo} />
              </i>
              Selengkapnya
            </button>
            <button className="border text-[#BDBDBD] hover:border-2 border-[#BDBDBD] hover:border-[#E0E0E0] hover:text-[#E0E0E0] px-2 py-1 rounded-full flex items-center cursor-pointer">
              18+
            </button>
          </div>
          <button className="border-2 hover:border-[#9E9E9E] hover:text-[#9E9E9E] w-10 h-10 py-1 rounded-full cursor-pointer">
            <i className="text-[#E7E3FCDE]  fa-solid fa-volume-xmark">
              <FontAwesomeIcon icon={faVolumeXmark} />
            </i>
          </button>
        </div>
      </article>
    </main>
  );
};
