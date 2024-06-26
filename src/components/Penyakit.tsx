"use client"
import { useState } from "react";
import Image from "next/image";
import { PenyakitData, penyakitData } from "./data/penyakitData";

export default function Penyakit() {
    const [selectedPenyakit, setSelectedPenyakit] = useState<PenyakitData | null>(null);

    const openPopup = (penyakit: PenyakitData) => {
        setSelectedPenyakit(penyakit);
    };

    const closePopup = () => {
        setSelectedPenyakit(null);
    };

    return (
        <div className="relative flex justify-center w-full min-h-auto bg-biru">
            <div className="container" style={{ zIndex: 1 }}>
                <div className="flex flex-col text-center">
                    <div className="heading-1 py-5 text-white mt-10">Masalah Gigi Pada Anak</div>
                    <div className="text-white body-1 pt-3 lg:mb-20 mb-10">
                    Tahukah anda bagaimana kondisi gigi anak anda?
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {penyakitData.map((penyakit) => (
                            <div key={penyakit.id} className="flex flex-col transform transition-transform duration-200 hover:scale-105">
                            <div className="flex flex-col bg-biru-800 py-10 px-8 rounded-lg gap-5 items-center shadow-md h-full">
                                <div className="flex justify-center items-center">
                                    <Image className="rounded rounded-lg" src={penyakit.image} alt={penyakit.title} width={400} height={400} />
                                </div>
                                <div className="lg:heading-3 heading-5 text-krem">{penyakit.title}</div>
                                <div className="text-white text-left">{penyakit.description}</div>
                                <div className="mt-auto w-full flex justify-center">
                                    <div
                                        role="button"
                                        className="body-1 py-3 bg-kuning-400 hover:bg-kuning-500 rounded-lg w-1/2 text-center"
                                        onClick={() => openPopup(penyakit)}
                                    >
                                        Lihat Detail
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    
                </div>
            </div>

            {selectedPenyakit && (
                <>
                    <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closePopup}></div>
                    <div className="fixed inset-0 flex justify-center items-center z-20 p-4">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto h-auto overflow-y-auto">
                            <div className="flex flex-col lg:flex-row gap-10">
                                <div className="w-full lg:w-1/2">
                                    <Image className="w-full rounded rounded-lg shadow-lg" src={selectedPenyakit.image} alt={selectedPenyakit.title} width={500} height={500} />
                                </div>
                                <div className="w-full lg:w-1/2 flex flex-col">
                                    <div className="heading-3 mb-4 text-biru">{selectedPenyakit.title}</div>
                                        <div className="max-h-96 overflow-y-auto">
                                            <p className="text-justify" dangerouslySetInnerHTML={{ __html: selectedPenyakit.details }}></p>
                                        </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    className="bg-biru text-white py-2 px-4 rounded-lg hover:bg-biru-700"
                                    onClick={closePopup}
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="absolute right-0 top-32" style={{ zIndex: 0}}>
                <div className="w-48 lg:w-full h-48 lg:h-full">
                    <Image src="/images/elemen/elemen2-pink.png" alt="corner image" width={400} height={400} />
                </div>
            </div>

            <div className="absolute left-0 bottom-0" style={{ zIndex: 0}}>
                <div className="w-48 lg:w-full h-48 lg:h-full">
                    <Image src="/images/elemen/elemen3-kuning.png" alt="corner image" width={400} height={400} />
                </div>
            </div>

            <div className="absolute left-0 top-32" style={{ zIndex: 0}}>
                <div className="w-48 lg:w-full h-48 lg:h-full">
                    <Image src="/images/elemen/elemen-grup-1.png" alt="corner image" width={400} height={400} />
                </div>
            </div>

        </div>
    );
}