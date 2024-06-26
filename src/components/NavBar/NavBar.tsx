"use client";
import Link from 'next/link';
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="absolute w-full py-4 bg-krem flex justify-between items-center md:justify-center md:items-center" style={{ zIndex: 3 }}>
                <div className="hidden md:flex gap-10 items-center">
                    <Link href='/' className="hover:text-biru cursor-pointer">Home</Link>
                    <Link href='/#penyakit' className="hover:text-biru cursor-pointer">Penyakit</Link>
                    <Link href={'/#perawatan'} className="hover:text-biru cursor-pointer" >Perawatan</Link>
                    <Link href={'/#kontak'} className="hover:text-biru cursor-pointer" >Kontak</Link>
                    <Link href='/quiz' className="text-white bg-pink hover:bg-pink-600 py-2 px-3 rounded cursor-pointer">Quiz</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-700 hover:text-biru focus:outline-none pl-3">
                        <CiMenuBurger size={20}/>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full bg-krem" style={{ zIndex: 3 }}> 
                    <div className="flex flex-col gap-4 py-4 px-2">
                        <div className="flex justify-start pr-4">
                            <button onClick={closeMenu} className="text-gray-700 hover:text-biru focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <Link href='/' className="hover:text-biru cursor-pointer">Home</Link>
                        <Link href='/#penyakit' className="hover:text-biru cursor-pointer">Penyakit</Link>
                        <Link href={'/#perawatan'} className="hover:text-biru cursor-pointer" >Perawatan</Link>
                        <Link href={'/#kontak'} className="hover:text-biru cursor-pointer" >Kontak</Link>
                        <Link href='/quiz' className="text-white bg-pink hover:bg-pink-600 py-2 px-3 rounded cursor-pointer">Quiz</Link>
                    </div>
                </div>
            )}
        </>
    );
}

