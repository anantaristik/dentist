import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

export default function MitosFaktaPage() {
    return (
        <div className="relative flex justify-center w-full min-h-auto bg-biru">
            <div className="container py-20" style={{ zIndex: 1 }}>
                <div className="flex flex-col text-center items-center justify-center">
                    <div className="lg:superheading heading-1 text-kuning my-10">MITOS VS FAKTA!</div>
                    <div className="lg:text-xl text-md text-white text-justify lg:px-10 lg:leading-9">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet., comes from a line in section 1.10.32.</div>
                
                    <div className="py-10 lg:w-1/4 md:w-1/2 w-full">
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