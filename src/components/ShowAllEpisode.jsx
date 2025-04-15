import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ShowAllEpisode = () => {
  return (
    <div className="absolute  bg-[#22282A] right-10 w-80 lg:w-130 bottom-25 rounded-lg text-white z-10 grid ">
      <p className="bg-[#3D4142] lg:py-2 px-4 rounded-t-xl">
        <FontAwesomeIcon icon={faArrowLeft} /> Episode Selanjutnya
      </p>
      <p className="bg-[#3D4142] lg:py-2 py-1 px-4 ">Episode 1</p>
      <div className="grid lg:gap-3 bg-[#22282A] px-4">
        <p>Episode 2</p>
        <div className="flex gap-4">
          <img
            src="/imglandscape/Type=33.png"
            className="rounded w-[100px] h-[50px] lg:w-[170px] lg:h-[96px] "
          />
          <div className="grid gap-2 lg:gap-0 -mt-3 ">
            <p>Biscuits</p>
            <p className="line-clamp-2 w-50 lg:w-full lg:-mt-5">
              It’s Ted’s first day of coaching, and fans aren’t happy. He makes
              little headway but remains undeterred as the team play their first
              match.
            </p>
          </div>
        </div>
      </div>
      <p className="bg-[#3D4142] py-1 lg:py-2 px-4">Episode 3</p>
      <p className="bg-[#3D4142] pb-1 lg:py-2 px-4 rounded-b-xl">Episode 4</p>
    </div>
  );
};
