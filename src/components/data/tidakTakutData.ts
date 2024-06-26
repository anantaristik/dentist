export interface TidakTakutData {
    id: number;
    title?: string;
    description: string;
    image: string;
}

export const tidakTakutData: TidakTakutData[] = [
    {
        id: 1,
        title: "Rutin ke Dokter Gigi",
        description: "Rutin ke dokter gigi dan dimulai sejak dini",
        image: "/images/tidaktakut/1. rutin ke drg.png",
    },
    {
        id: 2,
        title: "",
        description: "Tidak menakuti anak walau sebelumnya pernah memiliki pengalaman buruk ke dokter gigi",
        image: "/images/tidaktakut/2. tidak menakuti.png",
    },
    {
        id: 3,
        title: "",
        description: "Orang tua memberi contoh dan mengenalkan kepada anak mengenai kesehatan gigi sejak dini",
        image: "/images/tidaktakut/3. orang tua memberi contoh.png",
    },
    {
        id: 4,
        title: "",
        description: "Membacakan buku cerita tentang kunjungan ke dokter gigi",
        image: "/images/tidaktakut/4. buku cerita.png",
    },
]