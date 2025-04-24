import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LeftDesktopFooter = () => {
  return (
    <section className="relative pt-8">
      <span className="ml-2 fa-solid fa-film text-white relative bottom-1 text-3xl">
        <FontAwesomeIcon icon={faFilm} />
      </span>
      <span className="absolute text-white top-6 ml-2 text-4xl font-[700]">
        CHILL
      </span>
      <p className="text-[gray] mt-2">@2023 Chill All Right Reserved.</p>
    </section>
  );
};
