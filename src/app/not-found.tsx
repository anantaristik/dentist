import Link from "next/link"

export default function not_found() {
    return (
        <div className="flex flex-col justify-center w-full min-h-screen bg-biru text-center items-center">
            <div className="container py-20" style={{ zIndex: 1 }}>
                <div className="flex flex-col text-center items-center justify-center">
                    <div className="heading-1 text-white mt-5">404 | Oops!</div>
                    <div className="heading-3 text-white my-5">Halaman yang Anda cari tidak ditemukan</div>
                    <Link href='/' className="text-biru font-bold body-2 bg-kuning hover:bg-kuning-600 py-2 px-3 rounded cursor-pointer">Kembali</Link>
                </div>
            </div>
        </div>

    )
}