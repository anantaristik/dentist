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
        description: "Kerusakan serta pembusukan pada gigi akibat aktivitas bakteri dalam mulut.",
        image: "/images/penyakit/1-karies-gigi.png",
        details: "Gejala: Sakit/nyeri saat makan/minum panas, manis, dingin, sakit gigi secara tiba-tiba saat malam hari, gigi menjadi sensitif, lubang terlihat pada gigi, bau mulut <br/><br/> Perawatan: Perawatan karies gigi bisa dilakukan dengan prosedur tambal gigi pada kondisi karies gigi yang belum terlalu dalam dan parah. Tujuan tambal gigi adalah menutup karies agar tidak semakin menyebar ke bagian gigi lainnya.",
    },
    {
        id: 2,
        title: "Rampan karies/Karies botol",
        description: "Masalah gigi berlubang pada anak yang penyebarannya dapat mengenai beberapa gigi sekaligus.",
        image: "/images/penyakit/2-rampan-karies_karies-botol.png",
        details: "Rampan karies disebut sebagai karies susu botol yang sering dihubungkan dengan pemberian susu atau cairan manis menggunakan botol pada malam hari. Jika anak minum susu dengan dot, usahakan anak tetap terjaga setidaknya 15 menit setelah anak selesai menyusu, kemudian temani anak dalam menyikat gigi terlebih dahulu sebelum tidur. <br/><br/> Perawatan: Perawatan karies rampan yang pertama dilakukan yaitu menghilangkan rasa nyeri dengan obat. Saat nyeri mulai hilang, gigi dibersihkan untuk membuang jaringan yang busuk untuk menghentikan perkembangan bakteri di gigi sehingga penyebaran karies akan terhenti.",
    },
    {
        id: 3,
        title: "Karang Gigi",
        description: "Kumpulan sisa makanan yang menempel dan mengeras pada gigi.",
        image: "/images/penyakit/3-karang-gigi.png",
        details: "Karang gigi disebabkan oleh adanya plak (lapisan tipis dari sisa makanan) yang tidak dihilangkan. Apabila tidak dibersihkan, plak akan mengeras dan membentuk karang gigi. <br/><br/>Perawatan: Karang gigi sulit dihilangkan meski telah dibersihkan atau disikat berulang kali. Oleh sebab itu, penanganannya hanya bisa dilakukan oleh dokter gigi.",
    },
    {
        id: 4,
        title: "Sariawan",
        description: "Luka atau peradangan di bibir dan di dalam mulut berwarna putih atau kuning dengan tepi berwarna merah.",
        image: "/images/penyakit/4-sariawan.png",
        details: "Sariawan atau <i>stomatitis aphtosa</i> bisa disebabkan oleh luka tergigit, sistem kekebalan tubuh lemah, kekurangan vitamin B12, infeksi virus atau bakteri. <br/><br/> Perawatan: Sariawan memang membutuhkan waktu untuk sembuh dengan sendirinya. Kira-kira sekitar 2–4 minggu, bergantung dari luka tersebut. Namun, bila sariawan sering kambuh atau tidak kunjung sembuh, sebaiknya segera konsultasi kepada dokter.",
    },
    {
        id: 5,
        title: "Sundulan /Persistensi gigi",
        description: "Keadaan dimana gigi sulung dan gigi permanen bertumpuk.",
        image: "/images/penyakit/5-sundulan_persistensi-gigi.png",
        details: "Persistensi gigi adalah keadaan gigi susu/kecil yang tidak tanggal walaupun gigi permanent/dewasa sebagai gantinya sudah mulai tumbuh, terkadang juga gigi susu tidak goyang. Apabila dibiarkan akan mengakibatkan gigi permanen tidak rapi saat dewasa. <br/><br/> Perawatan: Perawatan yang dapat dilakukan adalah dengan melakukan pencabutan gigi susu di dokter gigi",
    },
    {
        id: 6,
        title: "Oral thrush/bercak putih pada mulut",
        description: "Lesi berwarna putih krem yang biasanya muncul di lidah atau pipi bagian dalam.",
        image: "/images/penyakit/6-oral-trush.png",
        details: "<i>Oral thrush</i> ATAU kandidiasis oral adalah penyakit akibat infeksi jamur. Jamur Candida albicans (C. albicans) sebenarnya adalah organisme normal di mulut, tapi terkadang bisa tumbuh terlalu cepat dan menimbulkan gejala. Infeksi ini lebih mungkin terjadi pada bayi dan orang dewasa yang lebih tua karena kekebalan mereka rendah. <br/><br/> Perawatan: Pengobatan yang dilakukan akan disesuaikan dengan kondisi fisik, kesehatan, tingkat keparahan, serta usia anak. Kondisi oral thrush dapat diatasi dengan pemberian obat antijamur yang diberikan oleh dokter. ",
    },
];
