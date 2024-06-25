// src/data.ts
export interface QuizQuestion {
    id: number;
    question: string;
    isTrue: boolean;
    explanation: string;
}

export const quizData: QuizQuestion[] = [
    {
        id: 1,
        question: "Anak yang memiliki kebiasaan menghisap jari tidak akan mempengaruhi pertumbuhan gigi anak.",
        isTrue: false,
        explanation: "Kebiasaan menghisap jari dapat menyebabkan gigi depan anak menjadi maju/tonggos berdasarkan beberapa penelitian. Apabila kebiasaan tersebut tetap berlanjut hingga usia 48 bulan, maka akan meningkatkan resiko dan keparahan gigi depan anak menjadi maju. Derajat keparahan gigi depan menjadi maju disebabkan beberapa hal, seperti berapa lama anak tersebut terbiasa menghisap jari, berapa sering anak menghisap jari dalam sehari, dan berapa besar tekanan hisap saat anak menghisap jari.",
    },
    {
        id: 2,
        question: "Bila gigi anak berlubang tidak perlu ditambal karena nanti juga akan digantikan oleh gigi tetap/permanen.",
        isTrue: false,
        explanation: "Gigi anak yang berlubang harus segera dilakukan penambalan walaupun lubangnya masih kecil sekalipun. Hal ini dikarenakan lubang dapat bertambah dalam dan meluas sehingga anak bisa sakit gigi apabila tidak dilakukan perawatan segera. Selain itu, pertumbuhan gigi tetap sebagai pengganti gigi susu dapat terganggu karena anak yang sakit gigi biasanya akan kehilangan nafsu makan dan menyebabkan nutrisi yang dibutuh untuk tubuh anak menjadi berkurang.",
    },
    {
        id: 3,
        question: "Gigi Bayi Tidak Penting",
        isTrue: false,
        explanation: "Gigi susu berperan penting dalam tumbuh kembang anak. Mereka membantu perkembangan bicara mengunyah dan berfungsi sebagai pengganti gigi dewasa. Mengabaikan gigi susu dapat menyebabkan masalah pada gigi permanen di kemudian hari. Pemeriksaan gigi secara rutin dapat membantu memastikan kesehatan gigi susu anak Anda.",
    },
    {
        id: 4,
        question: "Anak Tidak Perlu ke Dokter Gigi Sebelum Memiliki Gigi Permanen",
        isTrue: false,
        explanation: "Pemeriksaan gigi sebaiknya dimulai saat gigi pertama anak Anda muncul atau pada ulang tahun pertamanya. Kunjungan rutin ke dokter gigi anak memastikan bahwa setiap potensi masalah dapat diketahui dan ditangani sejak dini, sehingga mencegah masalah yang lebih parah di masa depan.",
    },
    {
        id: 5,
        question: "Gula Adalah Satu-Satunya Penyebab Gigi Berlubang",
        isTrue: false,
        explanation: "Meskipun gula dapat menyebabkan gigi berlubang, gula bukanlah satu-satunya faktor. Kebersihan mulut yang buruk, jarangnya kunjungan ke dokter gigi, dan faktor lainnya juga dapat menyebabkan kerusakan gigi. Mengajari anak Anda kebiasaan menyikat gigi dan flossing yang baik serta membawanya ke dokter gigi untuk pemeriksaan rutin dapat membantu mencegah gigi berlubang.",
    },
    {
        id: 6,
        question: "Fluorida Berbahaya bagi Anak",
        isTrue: false,
        explanation: "Fluorida aman untuk anak-anak dan bermanfaat bagi kesehatan gigi mereka. Ini membantu memperkuat enamel gigi dan mencegah gigi berlubang. Dokter gigi Anda dapat merekomendasikan jumlah fluorida yang tepat untuk anak Anda berdasarkan usia dan kebutuhan gigi tertentu.",
    },
    {
        id: 7,
        question: "Anda Tidak Perlu Menyikat Gigi Bayi",
        isTrue: false,
        explanation: "Anda sebaiknya mulai menyikat gigi anak Anda segera setelah gigi tersebut muncul. Gunakan sikat gigi yang lembut dan sesuai usia serta sedikit pasta gigi berfluoride. Kebiasaan kebersihan mulut yang baik sejak usia dini sangat penting untuk kesehatan gigi seumur hidup.",
    },
    {
        id: 8,
        question: "Semua Masalah Gigi Diturunkan",
        isTrue: false,
        explanation: "Meskipun genetika berperan dalam kesehatan mulut, gaya hidup dan kebiasaan kebersihan mulut juga sama pentingnya. Dengan mengajari anak Anda perawatan gigi yang benar dan memastikan mereka mengunjungi dokter gigi, Anda dapat memberikan dampak signifikan terhadap kesehatan mulut mereka, terlepas dari riwayat keluarga.",
    },
    {
        id: 9,
        question: "Sealant Gigi Tidak Diperlukan",
        isTrue: false,
        explanation: "Sealant gigi adalah tindakan pencegahan yang berharga. Mereka memberikan penghalang pelindung pada permukaan kunyah gigi geraham dan premolar, sehingga mengurangi risiko gigi berlubang. Seorang dokter gigi dapat memberi saran apakah sealant cocok untuk anak Anda.",
    },
    {
        id: 10,
        question: "Obat Kumur Aman untuk Anak",
        isTrue: false,
        explanation: "Tidak semua obat kumur cocok untuk anak-anak. Beberapa jenis obat kumur mengandung alkohol, yang dapat berbahaya jika tertelan. Selalu pilih obat kumur bebas alkohol untuk anak Anda dan konsultasikan dengan dokter gigi Anda untuk mendapatkan rekomendasi.",
    },
    {
        id: 11,
        question: "Gusi Berdarah Saat Menyikat Gigi adalah Hal yang Normal",
        isTrue: false,
        explanation: "Gusi berdarah bisa menjadi tanda adanya penyakit gusi yang tidak normal. Penting untuk mengatasi pendarahan gusi dengan mengajari anak Anda teknik menyikat gigi dan flossing yang benar serta berkonsultasi dengan dokter gigi untuk pemeriksaan menyeluruh.",
    },
    {
        id: 12,
        question: "Kawat Gigi Hanya untuk Keperluan Kosmetik",
        isTrue: false,
        explanation: "Meskipun kawat gigi dapat memperbaiki penampilan senyuman anak Anda, kawat gigi juga memiliki tujuan fungsional. Memperbaiki gigi yang tidak sejajar dapat membantu kesehatan bicara, mengunyah, dan mulut.",
    },
    {
        id: 13,
        question: "Celah pada Gigi Bayi Berarti Pemasangan Kawat Gigi Tidak Bisa Dihindari",
        isTrue: false,
        explanation: "Celah pada gigi susu belum tentu menunjukkan bahwa kawat gigi akan dibutuhkan di kemudian hari. Gigi anak-anak berubah seiring pertumbuhannya, dan dokter gigi dapat menilai perkembangan gigi mereka untuk menentukan apakah perawatan ortodontik diperlukan.",
    },
    {
        id: 14,
        question: "Gigi Bayi Tidak Bisa Diperbaiki",
        isTrue: false,
        explanation: "Gigi susu bisa dirawat sama seperti gigi permanen. Jika anak Anda mengalami gigi berlubang atau masalah gigi lainnya, hal tersebut dapat diperbaiki untuk menjaga kesehatan mulutnya.",
    },
    {
        id: 15,
        question: "Anak-anak Tidak Perlu ke Dokter Gigi Jika Tidak Sakit",
        isTrue: false,
        explanation: "Masalah gigi tidak selalu disertai rasa sakit. Pemeriksaan gigi secara teratur sangat penting untuk mengetahui masalah sejak dini, meskipun anak Anda tidak menunjukkan rasa tidak nyaman.",
    }
];
