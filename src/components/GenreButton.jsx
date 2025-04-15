export const GenreButton = ({ field, onClick, rounded }) => {
    let addRounded = "";
  
    switch (rounded) {
      case "topleft":
        addRounded = "rounded-tl-xl ";
        break;
      case "bottomleft":
        addRounded = "rounded-bl-xl ";
        break;
      case "topright":
        addRounded = "rounded-tr-xl ";
        break;
      case "bottomright":
        addRounded = "rounded-br-xl ";
        break;
      default:
        break;
    }
  
    return (
      <button
        onClick={onClick}
        className={`bg-[#22282A] ${addRounded} hover:bg-[#3D4142] line-clamp-1 cursor-pointer w-54 px-6 py-2 text-start `}
      >
        {field}
      </button>
    );
  };
  