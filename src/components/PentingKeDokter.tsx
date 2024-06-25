import Image from "next/image"
import { pentingKeDokterData } from "./data/pentingKeDokterData"

export default function PentingKeDokter() {
    return (
        <div className="relative flex justify-center w-full min-h-auto bg-krem">
            <div className="container py-20" style={{ zIndex: 1 }}>
                <div className="flex flex-col text-center">
                    <div className="lg:heading-1 heading-3 text-biru">Kenapa Penting ke Dokter Gigi <br/> <span className="bg-oranye text-white p-2 rounded">Setiap 6 Bulan Sekali?</span></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:mb-20 lg:mt-40 mt-10">
                        {pentingKeDokterData.map((pentingKeDokter) => (
                         <div key={pentingKeDokter.id} className="flex flex-col items-center justify-center bg-biru rounded-lg shadow-xl">
                            <div className="w-full h-64 relative">
                                <Image
                                    className="transform transition-transform duration-200 hover:scale-105 lg:-translate-y-20"
                                    src={pentingKeDokter.image}
                                    alt={pentingKeDokter.description}
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="text-xl text-white font-semibold py-4 text-center px-4 ">{pentingKeDokter.description}</div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            <div className="absolute lg:right-96 right-0 top-10" style={{ zIndex: 0}}>
                <div className="w-48 lg:w-full h-48 lg:h-full">
                    <Image src="/images/elemen/elemen2-kuning.png" alt="corner image" width={200} height={200} />
                </div>
            </div>

        </div>
    )
}