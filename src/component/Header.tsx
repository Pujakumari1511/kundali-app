"use client";
import React, { useState } from "react";

export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
         <header>
            <div className="mx-auto flex justify-between items-center w-full text-[#43557B] text-sm pt-5 bg-white h-5 w-full px-15">
                <p>Talk to Astrologers: +000 123 456789</p>
                <div className="flex gap-6">
                    <p>info@example.com</p>
                    <p className="px-2">|</p>
                    <p>Follow us on</p>
                    <button>Fb</button>
                    <button>In</button>
                    <button>Tw</button>
                </div>
            </div>
            
            <div className="mx-auto flex items-center bg-[#FFFFFFE5] h-40 w-full items-center gap-x-4 mt-6 text-lg border-t border-yellow-300 border-b-4 h-10 justify-between px-8" >
                <div>
                    <img className="size-40" src="/assets/fefdd7aaf551a3a03f9a2cf595d1fda42a39f963.png" alt="Vedic Jyotishe Logo" />
                </div>
            <div className="flex items-center gap-x-4 text-[#43557B]">  
                <button>Home</button>
                <button>About</button>
                <div className="relative group">
                    <button className="flex items-center gap-1"
                    onClick={() => setOpen((prev) => !prev)}
                    >
                        Service
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                      {open && (
                        <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Service 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Service 2</a>
                        </div>
                    )}
                </div>
                <button>Blog</button>
                <button>Kundali</button>
                <button>Contact</button>
            </div>
                <div className="bg-orange-400 rounded-3xl text-white p-2 px-4 text-md text-base">
                    <button>
                        CHAT NOW
                    </button>
                </div>
    
            </div>
        </header>
        
    )

}