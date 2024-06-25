export interface MakananData {
    id: number
    description: string
    title: string
    image: string
}

export const makananData: MakananData[] = [
    {
        id: 1,
        title: 'Hindari Makanan Manis',
        description: "Makanan/minuman manis sebaiknya diberikan hanya 2x dalam sehari. setelah makan/minum manis sebaiknya berkumur/menyikat gigi.",
        image: "/images/makanan/coklat.png",
    },
    {
        id: 2,
        title: 'Makanan Mengandung Kalsium',
        description: "Perbanyak makanan yang mengandung kalsium; contoh: susu, ikan, telur",
        image: "/images/makanan/susu.png",
    },
    {
        id: 3,
        title: 'Makanan Bervitamin',
        description: "Makanan yang terkandung protein dan karbohidrat; contoh: buah dan sayur",
        image: "/images/makanan/sayur.png",
    },
]