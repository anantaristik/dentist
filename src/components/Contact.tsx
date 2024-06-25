import Image from "next/image"
import { FaSquareInstagram, FaLocationDot  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <div className="relative flex justify-center w-full min-h-auto bg-kuning">
            <div className="container py-20" style={{ zIndex: 1 }}>
                <div className="flex flex-col text-center justify-center items-center">
                    <div className="lg:superheading heading-1 text-biru mt-10 mb-4">Contact Us</div>

                    <div>
                        <Image src="/images/gigi-telponan.png" alt="contact image" width={1000} height={1000} />
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex flex-col p-4">
                            <div className="text-xl text-biru py-2">{`We're here to help and answer any questions you may have. We look forward to hearing from you`}</div>

                            <div className="flex flex-col bg-biru rounded rounded-lg py-5 lg:px-10 px-3 mt-5 text-white gap-5 lg:body-1 items-center justify-center">
                                <div className="flex gap-3 items-center ">
                                <FaLocationDot size={30}/>
                                    <div>Jl. Prof. DR. Moestopo No.47, Mojo, Kec. Tambaksari, Surabaya, Jawa Timur 60132</div>
                                </div>
                                <div className="flex gap-3 items-center">
                                <FaSquareInstagram size={28}/>
                                    <div>@fkgunair</div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <MdEmail size={30}/>
                                    <div>fkgunair@unair.ac.id</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 top-0" style={{ zIndex: 0}}>
                <div className="w-48 lg:w-full h-48 lg:h-full">
                    <Image src="/images/elemen/elemen-kontak-kiri.png" alt="corner image" width={200} height={200} />
                </div>
            </div>

            <div className="absolute right-0 bottom-0 rotate-180" style={{ zIndex: 0}}>
                <div className="w-48 lg:w-full h-48 lg:h-full">
                    <Image src="/images/elemen/elemen4-krem.png" alt="corner image" width={1000} height={1000} />
                </div>
            </div>
        </div>
    )
}