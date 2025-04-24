import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterMobile = () => {
  return (
    <footer className="footer md:hidden relative border-black text-white pb-8 mb-0 border border-t-2 bg-black border-t-[#212121] flex-col p-[20px] flex gap-[40px]">
      <section className="ml-5 mt-5 ">
        <i className="fa-solid fa-film  text-6xl"></i>
        <span className="text-6xl font-[700]">CHILL</span>
        <p className="text-[gray] mt-2">@2023 Chill All Rights Reserved</p>
      </section>
      <section className="ml-5 flex flex-col gap-3">
        <button className="flex p-3 rounded-md cursor-pointer justify-between  w-full items-center  ">
          <span className="text-xl font-[600]">Genre</span>
          <i className="fa-solid fa-greater-than">
            <FontAwesomeIcon icon={faGreaterThan} />
          </i>
        </button>
        <button className="flex  cursor-pointer justify-between  w-full items-center p-3 rounded-md">
          <span className="text-xl font-[600]">Bantuan</span>
          <i className="fa-solid fa-greater-than">
            <FontAwesomeIcon icon={faGreaterThan} />
          </i>
        </button>
      </section>
    </footer>
  );
};
