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
        explanation: "Kebiasaan menghisap jari dapat menyebabkan gigi depan anak menjadi maju/tonggos. Apabila kebiasaan tersebut tetap berlanjut hingga usia 2 tahun dapat meningkatkan resiko keparahan.",
    },
    {
        id: 2,
        question: "Makanan manis merupakan salah satu makanan yang menyebabkan Gigi Berlubang.",
        isTrue: true,
        explanation: "Makanan manis merupakan salah satu faktor yang menyebabkan gigi berlubang. Selain itu, Kebersihan mulut yang buruk, jarangnya kunjungan ke dokter gigi, dan faktor lainnya juga dapat menyebabkan kerusakan gigi. Mengajari anak Anda kebiasaan menyikat gigi dan flossing yang baik serta membawanya ke dokter gigi untuk pemeriksaan rutin dapat membantu mencegah gigi berlubang.",
    },
    {
        id: 3,
        question: "Bila gigi anak berlubang tidak perlu ditambal karena nanti juga akan digantikan oleh gigi tetap/permanen.",
        isTrue: false,
        explanation: "Gigi anak yang berlubang harus segera dilakukan penambalan walaupun lubangnya masih kecil sekalipun. Hal ini dikarenakan lubang dapat bertambah dalam dan meluas sehingga anak bisa sakit gigi apabila tidak dilakukan perawatan segera.",
    },
    {
        id: 4,
        question: "Anak-anak tidak perlu ke dokter gigi jika tidak sakit",
        isTrue: false,
        explanation: "Masalah gigi tidak selalu disertai rasa sakit. Pemeriksaan gigi secara teratur sangat penting untuk mengetahui masalah sejak dini, meskipun anak anda tidak menunjukkan rasa tidak nyaman.",
    },
    {
        id: 5,
        question: "Gigi susu pada anak sama pentingnya seperti gigi permanen sehingga perlu melakukan pemeriksaan rutin sejak dini.",
        isTrue: true,
        explanation: "Pemeriksaan gigi sebaiknya dimulai saat gigi pertama anak Anda muncul atau pada ulang tahun pertamanya.Gigi susu berperan penting dalam tumbuh kembang anak. Mereka membantu perkembangan bicara mengunyah dan berfungsi sebagai pengganti gigi dewasa.",
    },
    {
        id: 6,
        question: "Fluorida Berbahaya bagi Anak",
        isTrue: true,
        explanation: "Fluoride aman untuk anak-anak dan bermanfaat bagi kesehatan gigi mereka. Ini membantu memperkuat enamel gigi dan mencegah gigi berlubang.",
    },
    {
        id: 7,
        question: "Orang tua tidak perlu membersihkan mulut anak ketika anak masih bayi",
        isTrue: false,
        explanation: "Sebaiknya orang tua mulai rutin membersihkan mulut bayi ketika bayi selesai menyusu menggunakan.",
    },
    {
        id: 8,
        question: "Gusi Berdarah Saat Menyikat Gigi adalah Hal yang Normal ",
        isTrue: false,
        explanation: "Gusi berdarah bisa menjadi tanda adanya penyakit gusi yang tidak normal. Penting untuk mengatasi pendarahan gusi dengan mengajari anak Anda teknik menyikat gigi dan flossing yang benar serta berkonsultasi dengan dokter gigi untuk pemeriksaan menyeluruh.",
    },
];
