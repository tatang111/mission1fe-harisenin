export const ShowBukaKecepatan = () => {
  return (
    <div className="absolute text-start w-45 right-15 gap-1 lg:gap-4 bottom-20 bg-[#22282A] p-3 rounded-lg text-white z-10 grid ">
      <h1>Kecepatan</h1>
      <button className="text-start text-gray-300">0.5x</button>
      <button className="text-start text-gray-300">0.75x</button>
      <button className="text-start text-gray-300">1x (Normal)</button>
      <button className="text-start text-gray-300">1.25x</button>
      <button className="text-start text-gray-300">1.5x</button>
    </div>
  );
};
