import { ContinueFilmCard } from "./ContinueFilmCard";
import { RatingFilmCard } from "./RatingFilmCard";
import { ReleaseFilmCard } from "./ReleaseFilmCard";
import { TrendingFilmCard } from "./TrendingFilmCard";

export const CardLayout = () => {
  return (
    <div className="films p-2 pl-4 mt-4 md:mt-14 md:pl-12 mb-14 flex flex-col gap-4 ">
      <ContinueFilmCard />
      <RatingFilmCard />
      <TrendingFilmCard />
      <ReleaseFilmCard />
    </div>
  );
};
