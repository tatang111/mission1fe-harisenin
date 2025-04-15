import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ShowBukaBahasa = () => {
  return (
    <div className="absolute right-10 lg:right-20  lg:gap-4 bottom-20 bg-[#22282A] p-3 rounded-lg text-white z-10 grid grid-cols-2">
      <div className="grid gap-2 lg:gap-4">
        <h1>Audio</h1>
        <h1 className="ml-2 mb-10">
          <FontAwesomeIcon icon={faCheck} /> Bahasa Inggris
        </h1>
      </div>
      <div>
        <div className="grid gap-2 lg:gap-4 pr-4">
          <h1>Terjemahan</h1>
          <h1>
            <FontAwesomeIcon icon={faCheck} /> Bahasa Indonesia
          </h1>
          <h1 className="text-gray-600 ml-5">Bahasa Inggris</h1>
        </div>
      </div>
    </div>
  );
};
