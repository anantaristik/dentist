import Image from "next/image"
import { tidakTakutData } from "./data/tidakTakutData"

export default function AnakTidakTakutKeDrg() {
    return (
        <div className="relative flex justify-center w-full min-h-auto bg-biru">
            <div className="container py-20" style={{ zIndex: 1 }}>
                <div className="flex flex-col text-center">
                    <div className="lg:heading-1 heading-4 text-white"><span className="lg:bg-pink py-2">Cara yang Bisa Dilakukan oleh Orang Tua Agar Anak Tidak Takut ke Dokter Gigi</span></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-20 lg:mb-10 lg:mt-20 mt-10 gap-4">
                        {tidakTakutData.map((tidakTakut) => (
                            <div key={tidakTakut.id} className="flex items-center justify-center">
                                <div  className="flex items-center p-4 bg-biru-800 rounded-lg shadow-md gap-4 w-full transform transition-transform duration-200 hover:scale-105">
                                    <div className="items-center">
                                        <Image
                                            src={tidakTakut.image}
                                            alt={tidakTakut.description}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="body-1 text-white text-left" dangerouslySetInnerHTML={{ __html: `${tidakTakut.description}` }}></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0" style={{ zIndex: 0}}>
                <div className="">
                    <Image src="/images/dokterBackground.png" alt="corner image" width={1000} height={1000} />
                </div>
            </div>

            <div className="absolute bottom-16 right-16" style={{ zIndex: 0}}>
                <div className="">
                    <Image src="/images/elemen/elemen2-putih.png" alt="corner image" width={200} height={200} />
                </div>
            </div>

        </div>
    )
}