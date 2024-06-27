import Image from "next/image"
import { FaSquareInstagram, FaSquarePhone } from "react-icons/fa6";
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
                                <div className="flex gap-3 items-center">
                                <FaSquareInstagram size={28}/>
                                    <div>@pkl_drsoetomo2024</div>
                                </div>
                                <div className="flex gap-3 items-center text-left">
                                    <FaSquarePhone size={30}/>
                                    <div>
                                        <ul>
                                            <li>Rachma Fadhilah (+62 812 80515106)</li>
                                            <li>Nakhwah Ulayya (+62 812 34868039)</li>
                                            <li>Annisa Anggie (+62 812 52668127)</li>
                                            <li>Cinta Widya (+62 812 30224901)</li>
                                        </ul>
                                    </div>
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