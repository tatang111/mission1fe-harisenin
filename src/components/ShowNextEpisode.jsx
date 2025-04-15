export const ShowNextEpisode = () => {
  return (
    <div className="absolute pb-4 right-5 lg:right-30 w-100 gap-1 bottom-20 bg-[#22282A] rounded-lg text-white z-10 grid ">
      <h1 className="bg-[#3D4142] p-1 px-3  lg:p-3 rounded-t-lg">Episode Selanjutnya</h1>
      <div className="flex">
        <img
          src="/imglandscape/Type=33.png"
          className="w-[170px] h-[110px] p-3"
        />
        <div className="p-2">
          <p className="text-base font-[600]">Episode 2 : Biscuits</p>
          <p className="line-clamp-3 lg:pr-2">
            It’s Ted’s first day of coaching, and fans aren’t happy. He makes
            little headway but remains undeterred as the team{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
