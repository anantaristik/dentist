export interface PerawatanData {
    id: number;
    title: string;
    description: string;
    image: string;
    colorTitle: string;
}

export const perawatanData: PerawatanData[] = [
    {
        id:1,
        title: "Aplikasi Fluor/Varnish Topikal",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        image: "/images/perawatan/1. Aplikasi fluor_varnish topikal.jpg",
        colorTitle: "text-biru"
    },
    {
        id:2,
        title: "Pembersihan Karang Gigi",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        image: "/images/perawatan/2. pembersihan karang gigi.jpg",
        colorTitle: "text-oranye"
    },
    {
        id:3,
        title: "Pit Fissure Sealant",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        image: "/images/perawatan/3. pit fissure sealant.jpg",
        colorTitle: "text-pink"
    },
]