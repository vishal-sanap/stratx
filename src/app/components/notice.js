// components/NoticeBar.jsx

"use client";
import React, { useState } from 'react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'; // Requires @heroicons/react

export default function NoticeBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBarVisible, setIsBarVisible] = useState(true);

    if (!isBarVisible) return null;

    return (
        <>
            {/* The small, persistent notice bar */}
            <div className="w-full bg-gray-900 text-white text-center py-1.5 text-sm relative z-50">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center mx-auto text-gray-400 hover:text-white transition duration-200 group"
                >
                    Notice to investors
                    <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center overflow-auto p-4 transition-opacity duration-300">
                    <div className="relative w-full h-full md:h-[90vh] bg-black text-white p-8 sm:p-12 lg:p-16">
                        
                        {/* Close Button (Top Right) */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition duration-200"
                            aria-label="Close Disclaimer"
                        >
                            <XMarkIcon className="w-8 h-8" />
                        </button>
                        
                        {/* Title and Content */}
                        <h1 className="text-4xl sm:text-6xl font-extrabold mb-12 uppercase border-b border-gray-700 pb-4">
                            DISCLAIMER
                        </h1>
                        
                        <div className="space-y-6 text-gray-300 text-lg">
                            <p>
                                All investments involve risk, including the possible loss of principal. Past performance does not guarantee future results. While StratX Capital employs disciplined strategies and risk management practices to reduce downside exposure, there is no assurance that investment objectives will be achieved. Market conditions, volatility, and unforeseen events can cause performance to vary over time. Investors should only commit capital they can afford to allocate for the medium to long term, and should understand that returns are not guaranteed.
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}