import Image from "next/image";
import { tipsMenjagaData } from "./data/tipsMenjagaData";

export default function TipsMenjagaKesehatanGigi() {
    return (
        <div className="relative flex justify-center w-full min-h-auto bg-krem">
            <div className="container py-20 " style={{ zIndex: 1 }}>
                <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 justify-center">

                    <div className="w-full">
                        <Image src={"/images/tipsMenjagaImage.png"} alt="corner image" width={600} height={600} />
                    </div>

                    <div className="flex flex-col gap-5 w-full">
                        <div className="lg:heading-1 heading-3 text-oranye">Tips Menjaga Kesehatan <span className="text-pink">Gigi Anak</span></div>

                        {tipsMenjagaData.map((tipsMenjaga) => (
                            <div key={tipsMenjaga.id} className="flex flex-col gap-2">
                                <div className="body-1 text-justify bg-white px-2 py-3">{tipsMenjaga.id}. {tipsMenjaga.description}</div>
                            </div>
                        ))}
                    </div>   

                </div>
            </div>
        </div>
    )
}