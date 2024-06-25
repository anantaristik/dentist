"use client";
import React, { useState } from 'react';
import Quiz from '@/components/Quiz';
import { FaPlay } from "react-icons/fa";

const QuizPage: React.FC = () => {
    const [hasStarted, setHasStarted] = useState(false);

    const startQuiz = () => {
        setHasStarted(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-biru p-4">
            {!hasStarted ? (
                <div className="container py-72" style={{ zIndex: 1 }}>
                    <div className="flex flex-col text-center items-center justify-center">
                        <div className="lg:superheading heading-1 text-kuning my-5">MITOS VS FAKTA!</div>
                    
                        <div className="py-10 lg:w-1/4 md:w-1/2 w-full">
                            <div className="flex items-center">
                                <button onClick={startQuiz} className="relative flex h-14 w-full pl-5 bg-white py-3 border border-black rounded-full text-lg hover:text-white hover:bg-pink">
                                    <span className="ml-6">Mulai Permainan!</span>
                                    <div className="absolute bg-pink text-white rounded-full flex justify-center items-center h-14 w-14 right-0 bottom-0">
                                        <FaPlay className="text-2xl" />
                                    </div>
                                </button>
                            </div>
                        </div>                
                    </div>
                </div>
            ) : (
                <Quiz />
            )}
        </div>
    );
};

export default QuizPage;
