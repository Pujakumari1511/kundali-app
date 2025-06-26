"use client";

import Link from "next/link"

export const Header = () => {
    return (
         <header>
            <div className="flex justify-between items-center text-[#43557B] text-sm pt-5 bg-white h-5 w-full px-15">
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
            
            <div className="flex bg-[#FFFFFFE5] h-40 w-full items-center gap-x-4 mt-6 text-lg border-t  justify-between px-8" >
                <div>
                    <img className="size-45 mt-3" src="/assets/fefdd7aaf551a3a03f9a2cf595d1fda42a39f963.png" alt="Vedic Jyotishe Logo" />
                </div>
            <div className="flex items-center gap-x-4 text-[#43557B]">  
                <button>Home</button>
                <Link href="/about">About</Link>
                <button>Video</button>
                <Link href="/kundli">Kundali</Link>
                <button>Contact</button>
            </div>
                <div className="bg-orange-400 rounded-3xl text-white p-2 px-4 text-md text-base">
                    <button>
                        CHAT NOW
                    </button>
                </div>
            </div>
            <hr className="w-full border-t border-gray-200" />
        </header>    
    )
}