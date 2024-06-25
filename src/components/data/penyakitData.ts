export interface PenyakitData {
    id: number;
    title: string;
    description: string;
    image: string;
    details: string;
}

export const penyakitData: PenyakitData[] = [
    {
        id: 1,
        title: "Karies/Gigi Berlubang",
        description: "Karies gigi adalah kerusakan gigi yang disebabkan oleh bakteri dan asam yang mengikis enamel gigi.",
        image: "/images/penyakit/1-karies-gigi.png",
        details: "Karies gigi adalah masalah gigi berlubang gigi berlubang, yaitu ketika gigi mengalami kerusakan serta pembusukan di bagian luar dan dalam. Kondisi ini merupakan permasalahan gigi yang dapat menyerang saraf, dan seringkali disebabkan oleh aktivitas bakteri Streptococcus mutans di dalam mulut.",
    },
    {
        id: 2,
        title: "Rampan karies/Karies botol",
        description: "Pulpitis adalah peradangan pada pulpa gigi yang menyebabkan nyeri hebat.",
        image: "/images/penyakit/2-rampan-karies_karies-botol.png",
        details: "Karies rampan adalah masalah gigi berlubang pada anak yang penyebarannya dapat mengenai beberapa gigi sekaligus sehingga cepat mengenai pulpa atau saraf pada gigi. Jenis karies ini umumnya terjadi pada gigi susu anak. Disebabkan oleh aktivitas bakteri di mulut. Apabila dibiarkan, muncul lubang-lubang kecil pada gigi yang lama kelamaan akan membesar.",
    },
    {
        id: 3,
        title: "Karang Gigi",
        description: "Gingivitis adalah peradangan gusi yang biasanya disebabkan oleh plak yang menumpuk di sekitar gigi.",
        image: "/images/penyakit/3-karang-gigi.png",
        details: "Karang gigi adalah lapisan seperti kotoran yang mengeras di gigi. Karang gigi disebabkan oleh adanya plak (lapisan tipis dari sisa makanan) yang tidak dihilangkan. Apabila tidak dibersihkan, plak akan mengeras dan membentuk karang gigi. Karang gigi sulit dihilangkan meski telah dibersihkan atau disikat berulang kali. Oleh sebab itu, penanganannya hanya bisa dilakukan oleh dokter gigi.",
    },
    {
        id: 4,
        title: "Sariawan",
        description: "Persistensi gigi susu adalah kondisi di mana gigi susu tidak tanggal pada waktu yang seharusnya.",
        image: "/images/penyakit/4-sariawan.png",
        details: "Sariawan atau <i>stomatitis aphtosa</i> adalah luka atau peradangan di bibir dan di dalam mulut berwarna putih atau kuning dengan tepi berwarna merah. Penyebabnya bisa karena luka tergigit, sistem kekebalan tubuh lemah, kekurangan vitamin B12, infeksi virus atau bakteri.",
    },
    {
        id: 5,
        title: "Sundulan/Persistensi gigi",
        description: "Maloklusi adalah ketidakteraturan posisi gigi dan rahang yang menyebabkan gigitan tidak normal.",
        image: "/images/penyakit/5-sundulan_persistensi-gigi.png",
        details: "Keadaan dimana gigi sulung dan gigi permanen bertumpuk, disebabkan oleh gigi sulung yang tidak tanggal atau lepas pada saat gigi permanen sudah muncul. Apabila dibiarkan akan mengakibatkan gigi permanen tidak rapi saat dewasa.",
    },
    {
        id: 6,
        title: "Oral thrush/bercak putih pada mulut",
        description: "MIH adalah kondisi di mana gigi geraham dan gigi seri mengalami penurunan mineralisasi.",
        image: "/images/penyakit/6-oral-trush.png",
        details: "<i>Oral thrush</i> ATAU kandidiasis oral adalah penyakit akibat infeksi jamur. Jamur <i>Candida albicans</i> (C. albicans) sebenarnya adalah organisme normal di mulut, tapi terkadang bisa tumbuh terlalu cepat dan menimbulkan gejala. Kondisi ini menyebabkan lesi berwarna putih krem yang biasanya muncul di lidah atau pipi bagian dalam.",
    },
];
