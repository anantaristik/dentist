"use client"
import Image from "next/image"
import { IoMdArrowForward } from "react-icons/io";
import { ReactTyped } from "react-typed";

export default function Hero() {
    return (
        <div className="relative flex justify-center w-full min-h-auto bg-cover bg-center items-center" style={{ backgroundImage: "url('/images/heroBackground.png')" }}>
            <div className="container" style={{ zIndex: 1}}>
                <div className="flex flex-col text-center">
                <div className="lg:heading-0 heading-2 py-10 text-biru">
                    <ReactTyped
                        strings={[
                            'BAGAIMANA CARA MENYIKAT GIGI YANG <span style="color:#F465BC;">BENAR?</span>',
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </div>
                    <div className="w-full flex justify-center items-center py-3">
                        <Image src="/images/gigi.png" alt="hero" width={700} height={700}/>
                    </div>

                    <div className="py-2">
                        <div className="flex lg:text-4xl text-2xl">
                            Show Your Care.
                        </div>
                        <div className="flex lg:text-4xl text-2xl">
                            Keep Their Smile.
                        </div>
                    </div>

                    <div className="py-10">
                        <div className="flex items-center">
                            <div role='button' className="relative flex h-14 lg:w-1/4 md:w-1/2 w-full pl-5 bg-white py-3 border border-black rounded-full text-lg hover:text-white hover:bg-biru">
                                <span className="ml-6">Berikutnya</span>
                                <div className="absolute bg-biru text-white rounded-full flex justify-center items-center h-14 w-14 right-0 bottom-0">
                                    <IoMdArrowForward className="text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="absolute right-0 bottom-0" style={{ zIndex: 0}}>
                <div className="w-48 lg:w-full h-48 lg:h-full">
                    <Image src="/images/elemen1.png" alt="corner image" width={300} height={300} />
                </div>
            </div>
        </div>
    )
}