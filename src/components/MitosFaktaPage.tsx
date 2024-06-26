import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

export default function MitosFaktaPage() {
    return (
        <div className="relative flex justify-center w-full min-h-screen bg-biru">
            <div className="container py-20" style={{ zIndex: 1 }}>
                <div className="flex flex-col text-center items-center justify-center">
                    <div className="lg:superheading heading-1 text-kuning my-10">MITOS VS FAKTA!</div>
                
                    <div className="py-10 lg:w-1/3 md:w-1/2 w-full">
                        <div className="flex items-center">
                            <Link href='/quiz' className="relative flex h-14 w-full pl-5 bg-white py-3 border border-black rounded-full text-lg hover:text-white hover:bg-pink">
                                <span className="ml-6">Quiz Mitos/Fakta</span>
                                <div className="absolute bg-pink text-white rounded-full flex justify-center items-center h-14 w-14 right-0 bottom-0">
                                    <IoMdArrowForward className="text-2xl" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute left-0 -bottom-4 lg:bottom-0" style={{ zIndex: -1}}>
                        <div className="w-48 lg:w-full h-48 lg:h-full">
                            <Image src="/images/elemen/elemen-mitos-kiri.png" alt="corner image" width={200} height={200} />
                        </div>
                    </div>

                    <div className="absolute right-0 top-20" style={{ zIndex: -1}}>
                        <div className="w-48 lg:w-full h-48 lg:h-full hidden lg:block">
                            <Image src="/images/elemen/elemen-mitos-kanan.png" alt="corner image" width={200} height={200} />
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}