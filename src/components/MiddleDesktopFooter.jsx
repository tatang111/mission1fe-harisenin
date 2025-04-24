export const MiddleDesktopFooter = () => {
  return (
    <section className="">
      <h1 className="text-lg text-white">Genre</h1>
      <div className="flex text-[gray] gap-2">
        <div className="flex flex-col">
          <span>Aksi</span>
          <span>Anak-Anak</span>
          <span>Anime</span>
          <span>Britania</span>
        </div>
        <div className="flex flex-col">
          <span>Drama</span>
          <span>Fantasi Ilmiah & Fantasi</span>
          <span>Kejahatan</span>
          <span>KDrama</span>
        </div>
        <div className="flex flex-col">
          <span>Komedi</span>
          <span>Petualangan</span>
          <span>Perang</span>
          <span>Romantis</span>
        </div>
        <div className="flex flex-col">
          <span>Sains & Alam</span>
          <span>Thriller</span>
        </div>
      </div>
    </section>
  );
};
