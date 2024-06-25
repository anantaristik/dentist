import Image from "next/image"
import { makananData } from "./data/makananData"

export default function Makanan() {
    return (
        <div className="relative flex justify-center w-full min-h-auto bg-white">
            <div className="container py-20" style={{ zIndex: 1 }}>
                <div className="flex flex-col text-center">
                    <div className="lg:heading-1 heading-3 text-oranye">Makanan yang Baik untuk Menjaga <span className="bg-pink text-white p-2">Kesehatan Gigi</span></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20 lg:mb-10 lg:mt-20 mt-10">
                        {makananData.map((makanan) => (
                            <div key={makanan.id} className="flex flex-col items-center justify-between w-full p-4">
                                <div className="w-full h-64 relative mb-4">
                                    <Image
                                        className="transform transition-transform duration-200 hover:scale-105 object-cover rounded-lg"
                                        src={makanan.image}
                                        alt={makanan.title}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="flex flex-col p-4 bg-kuning rounded-lg w-full lg:mt-10 ">
                                    <div className="text-xl text-biru font-semibold py-2 text-center">{makanan.title}</div>
                                    <div className="text-center">{makanan.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute left-0 top-0" style={{ zIndex: 0}}>
                <div className="">
                    <Image src="/images/elemen/elemen4-krem.png" alt="corner image" width={1000} height={1000} />
                </div>
            </div>
        </div>
    )
}