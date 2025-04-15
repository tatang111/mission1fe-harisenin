import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReasonSubscribe } from "./ReasonSubscribe"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export const VideoNonSubscribe = () => {
  const handleUbahClick = () => {
    window.location.pathname = "langganan"
  }

    return (
        <div className="">
            <h1 className="text-center text-2xl font-[600]">Layanan Premium <FontAwesomeIcon className="text-yellow-300" icon={faStar} /></h1>
            <p className="text-center mb-7">Tingkatkan paket anda untuk dapat menonton video ini.</p>
            <p className="text-center mb-3 text-xl">Kenapa harus berlangganan?</p>
        <div className="flex md:justify-around flex-col md:flex-row gap-2 md:gap-0">
          <div className="md:grid md:gap-2 flex justify-between ">
            <ReasonSubscribe src="/subscribe/download.png" info1="Download Pilihan" info2="Konten" />
            <ReasonSubscribe src="/subscribe/Vector.png" info1="Kualitas Maksimal" info2="Sampai Dengan 4K" />
          </div>
          <div className="md:grid md:gap-10 flex justify-between">
            <ReasonSubscribe src="/subscribe/noads.png" info1="Download Pilihan" info2="Konten" />
            <ReasonSubscribe src="/subscribe/responsive.png" info1="Kualitas Maksimal" info2="Sampai Dengan 4K" />
          </div>
          <div className="md:grid md:gap-10 flex justify-between">
            <ReasonSubscribe src="/subscribe/tontonsemua.png" info1="Download Pilihan" info2="Konten" />
            <ReasonSubscribe src="/subscribe/subtitle.png" info1="Kualitas Maksimal" info2="Sampai Dengan 4K" />
          </div>
        </div>
        <button onClick={handleUbahClick} className="bg-blue-700 hover:bg-blue-800 cursor-pointer px-6 py-3 mt-6 mx-auto block rounded-full text-base">Ubah Jadi Series</button>
        </div>
    )
}