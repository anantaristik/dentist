import React from 'react';

export default function WaveDivider({ bgColor = "bg-krem", waveColor = "text-biru" }) {
    return (
        <div className={`w-full lg:h-16 h-3 ${bgColor}`}>
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                    fill="currentColor" className={waveColor}></path>
            </svg>
        </div>
    );
}
