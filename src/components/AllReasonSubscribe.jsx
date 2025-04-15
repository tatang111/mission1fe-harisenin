import { ReasonSubscribe } from "./ReasonSubscribe"

export const AllReasonSubscribe = () => {
    return (
        <div className="flex md:justify-around flex-col md:flex-row gap-10 md:gap-0">
          <div className="md:grid md:gap-10 flex justify-between ">
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
    )
}