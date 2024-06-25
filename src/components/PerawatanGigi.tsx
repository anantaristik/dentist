import Image from "next/image"
import { perawatanData } from "./data/perawatanData"

export default function PerawatanGigi() {
    return (
        <div className="relative flex justify-center w-full min-h-auto bg-white">
            <div className="container" style={{ zIndex: 1 }}>
                <div className="flex flex-col text-center">
                    <div className="heading-1 py-5 mt-10 text-biru rounded-lg bg-kuning">Perawatan Gigi Pada Anak</div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 mt-10">
                        {perawatanData.map((perawatan) => (
                        <div key={perawatan.id} className="flex flex-col gap-4">
                            <div className="w-full h-64 relative">
                                <Image
                                    className="rounded-lg border border-kuning border-8 transform transition-transform duration-200 hover:scale-105 shadow-lg object-cover"
                                    src={perawatan.image}
                                    alt={perawatan.title}
                                    fill
                                />
                            </div>

                            <div className={`heading-3 ${perawatan.colorTitle}`}>{perawatan.title}</div>

                            <div className="px-5">{perawatan.description}</div>

                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute right-0 top-32" style={{ zIndex: 0}}>
                <div className="w-48 lg:w-full h-48 lg:h-full">
                    <Image src="/images/elemen/elemen3-oren.png" alt="corner image" width={300} height={300} />
                </div>
            </div>

            <div className="absolute left-0 bottom-0" style={{ zIndex: 0}}>
                <div className="w-48 lg:w-full h-48 lg:h-full">
                    <Image src="/images/elemen/elemen-grup-2-2.png" alt="corner image" width={200} height={200} />
                </div>
            </div>

        </div>
    )
}