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
        description: "<i>Fluoride varnish</i> adalah perawatan gigi menggunakan <i>fluoride</i>, zat khusus mirip kalsium yang dioleskan untuk memperkuat lapisan email gigi. Bertujuan untuk mencegah karies atau kerusakan gigi, khususnya pada anak-anak.",
        image: "/images/perawatan/1. Aplikasi fluor_varnish topikal.jpg",
        colorTitle: "text-biru"
    },
    {
        id:2,
        title: "Pembersihan Karang Gigi",
        description: "Pembersihan karang gigi dilakukan dengan tindakan khusus yang disebut scalling gigi. Scaling gigi dilakukan oleh dokter gigi dengan menggunakan alat yang disebut scaler.",
        image: "/images/perawatan/2. pembersihan karang gigi.jpg",
        colorTitle: "text-oranye"
    },
    {
        id:3,
        title: "Pit Fissure Sealant",
        description: "Pit and Fissure Sealant yaitu tindakan yang dilakukan oleh dokter gigi guna mencegah gigi geraham berlubang dengan cara menutup ceruk pada gigi dengan suatu bahan. Tindakan ini bisa dilakukan pada anak-anak ketika gigi permanen mereka tumbuh.",
        image: "/images/perawatan/3. pit fissure sealant.jpg",
        colorTitle: "text-pink"
    },
]