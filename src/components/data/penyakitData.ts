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
        image: "/images/penyakit/persistensi.png",
        details: "Karies gigi pada anak sering terjadi akibat konsumsi makanan manis dan kurangnya kebersihan gigi. Hal ini menyebabkan bakteri dalam mulut memproduksi asam yang merusak enamel gigi, menyebabkan gigi berlubang dan nyeri. Pencegahan dapat dilakukan dengan menyikat gigi secara teratur, mengurangi makanan manis, dan rutin memeriksakan gigi ke dokter gigi.",
    },
    {
        id: 2,
        title: "Pulpitis",
        description: "Pulpitis adalah peradangan pada pulpa gigi yang menyebabkan nyeri hebat.",
        image: "/images/penyakit/persistensi.png",
        details: "Pulpitis pada anak bisa terjadi karena karies gigi yang tidak diobati, trauma pada gigi, atau infeksi. Gejalanya meliputi nyeri hebat, terutama saat makan atau minum sesuatu yang panas atau dingin. Perawatan dapat melibatkan pengobatan saluran akar atau pencabutan gigi jika kerusakan terlalu parah. Pencegahan meliputi perawatan gigi yang baik dan menghindari cedera pada gigi.",
    },
    {
        id: 3,
        title: "Gingivitis",
        description: "Gingivitis adalah peradangan gusi yang biasanya disebabkan oleh plak yang menumpuk di sekitar gigi.",
        image: "/images/penyakit/persistensi.png",
        details: "Gingivitis pada anak ditandai dengan gusi merah, bengkak, dan mudah berdarah saat menyikat gigi. Penyebab utamanya adalah kebersihan mulut yang buruk yang memungkinkan plak dan bakteri menumpuk di gigi dan gusi. Pengobatan termasuk pembersihan profesional oleh dokter gigi dan peningkatan kebersihan mulut dengan menyikat dan flossing secara teratur.",
    },
    {
        id: 4,
        title: "Persistensi Gigi Susu",
        description: "Persistensi gigi susu adalah kondisi di mana gigi susu tidak tanggal pada waktu yang seharusnya.",
        image: "/images/penyakit/persistensi.png",
        details: "Pada anak, gigi susu yang tidak tanggal dapat mengganggu pertumbuhan gigi tetap. Penyebabnya bisa karena gigi tetap tidak tumbuh di posisi yang benar atau tidak ada gigi tetap di bawah gigi susu. Perawatan biasanya melibatkan pencabutan gigi susu yang masih ada untuk memberi ruang bagi gigi tetap.",
    },
    {
        id: 5,
        title: "Maloklusi",
        description: "Maloklusi adalah ketidakteraturan posisi gigi dan rahang yang menyebabkan gigitan tidak normal.",
        image: "/images/penyakit/persistensi.png",
        details: "Maloklusi pada anak bisa disebabkan oleh faktor genetik, kebiasaan buruk seperti mengisap jempol, atau hilangnya gigi susu terlalu dini. Ini dapat menyebabkan masalah dengan menggigit, mengunyah, dan berbicara. Perawatan melibatkan penggunaan kawat gigi atau alat ortodontik lainnya untuk memperbaiki posisi gigi dan rahang.",
    },
    {
        id: 6,
        title: "Hipomineralisasi Molar-Incisor (MIH)",
        description: "MIH adalah kondisi di mana gigi geraham dan gigi seri mengalami penurunan mineralisasi.",
        image: "/images/penyakit/persistensi.png",
        details: "MIH menyebabkan gigi menjadi lebih lemah, lebih sensitif, dan lebih rentan terhadap kerusakan. Penyebab pastinya belum diketahui, tetapi mungkin terkait dengan faktor genetik atau paparan tertentu selama perkembangan gigi. Pengobatan melibatkan penggunaan bahan pelindung seperti sealant atau tambalan dan menjaga kebersihan gigi yang baik untuk mencegah kerusakan lebih lanjut.",
    },
];
