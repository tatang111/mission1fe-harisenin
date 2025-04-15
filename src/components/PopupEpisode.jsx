export const PopupEpisode = ({ no, src, title, duration, desc }) => {
  return (
    <div>
      <div className="md:py-4 md:px-6 flex gap-6 hover:bg-[#424242] cursor-pointer">
        <p className="items-center flex">{no}</p>
        <img src={src} className="md:w-[170px] md:h-[96px] w-[90px] h-[50px]" alt="" />
        <div className="pr-10 grid gap-y-1 md:gap-y-4">
          <div className="flex justify-between">
            <p className="">{title}</p>
            <p>{duration}</p>
          </div>
          <p className="line-clamp-1 md:line-clamp-2">{desc}</p>
        </div>
      </div>
    </div>
  );
};
