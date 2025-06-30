"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const MobileViewHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
        <header>
            {/* Contact Info Section */}   
            <div className="py-1 text-[#43557B] text-xs text-center" role="none">
                <p >Talk to Astrologers: +000 123 456789</p>
                <div className="flex gap-1 justify-center">
                    <p>info@example.com</p>
                    <p>|</p>
                    <p>Follow us on</p>
                    <button>Fb</button>
                    <button>In</button>
                    <button>Tw</button>
                </div>
            </div>
            </header>
            <div  id="floating-header" className="sticky top-0 bg-white z-50 shadow-md">
                <div className="flex justify-between items-center p-4">
                    <div>
                        <img className="size-15" src="/assets/fefdd7aaf551a3a03f9a2cf595d1fda42a39f963.png" alt="Vedic Jyotishe Logo" />
                    </div>
                    <div>
                        <Button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="rounded-md bg-white px-3 py-2 text-gray-900 shadow-lg ring-1 ring-gray-300 ring-inset hover:bg-gray-50" 
                            id="menu-button" 
                            aria-expanded={isMenuOpen} 
                            aria-haspopup="true"
                        >
                            ☰
                        </Button>
                        {isMenuOpen && (
                        <div className="absolute right-0 z-10 mt-2 w-30 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}> 
                            {/* Navigation Links Section */}
                            <div className="py-1" role="none">
                                <Link 
                                    href="/" 
                                    onClick={() => setIsMenuOpen(false)} 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                                    role="menuitem" 
                                    tabIndex={-1}
                                >
                                    Home
                                </Link>
                                <Link 
                                    href="/about" 
                                    onClick={() => setIsMenuOpen(false)} 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                                    role="menuitem" 
                                    tabIndex={-1}
                                >
                                    About
                                </Link>
                                <Link 
                                    href="" 
                                    onClick={() => setIsMenuOpen(false)} 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                                    role="menuitem" 
                                    tabIndex={-1}
                                >
                                    Video
                                </Link>
                                <Link 
                                    href="/kundli" 
                                    onClick={() => setIsMenuOpen(false)} 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                                    role="menuitem" 
                                    tabIndex={-1}
                                >
                                    Kundli
                                </Link>
                                <Link 
                                    href="/contact" 
                                    onClick={() => setIsMenuOpen(false)} 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                                    role="menuitem" 
                                    tabIndex={-1}
                                >
                                    Contact
                                </Link>
                            </div>
                            
                            {/* Chat Now Button Section */}
                            <div className="py-1" role="none">
                                <button 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-4 py-2 text-left text-sm text-white hover:bg-orange-500 bg-orange-400 rounded-md mx-2 my-1"
                                >
                                    CHAT NOW
                                </button>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

const TabAndDeskTopHeader = () => {
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
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="">Video</Link>
                    <Link href="/kundli">Kundli</Link>
                    <Link href="/contact">Contact</Link>
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

export const Header = () => {
    return (
        <>
            <div className="hidden md:block">
                <TabAndDeskTopHeader />
            </div>
            <div className="md:hidden">
                <MobileViewHeader />
            </div>
             
        </> 
    )
}