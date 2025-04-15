import { faBackward, faForward, faPlay, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LeftbarPlay = () => {
  return (
    <div className="flex gap-2 md:gap-4 text-lg md:text-xl items-center">
      <span className="text-xl md:text-2xl">
        <FontAwesomeIcon icon={faPlay} />
      </span>
      <div className="flex items-center">
        <span className="text-xs">10s</span>
        <FontAwesomeIcon icon={faBackward} className="text-base md:text-xl" />
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faForward} className="text-base md:text-xl" />
        <span className="text-xs">10s</span>
      </div>
      <FontAwesomeIcon icon={faVolumeHigh} className="text-base md:text-xl" />
    </div>
  );
};
