import { useEffect, useState } from "react";
import { PanchangData } from "@/types/panchang";
import { Button } from "@/components/ui/button";
import Image from "next/image";


interface PanchangImgProps {
    image: string;
    time: string;
    altImg: string;
}
const PanchangImg = ({image, time, altImg}: PanchangImgProps) => {
    return (
        <div className="p-4 text-[#FFFFFF] text-center">
            <Image 
                src={image} 
                alt={altImg} 
                width={100} 
                height={48}
                />
            <p className="pt-2">{time}</p>
        </div>
    )
}


export const Panchang = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [panchangData, setPanchangData] = useState<PanchangData>();
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        if (typeof window !== undefined) {
            const options: Intl.DateTimeFormatOptions = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            setFormattedDate(new Date().toLocaleDateString('en-IN', options).toString());
        }
    }, [])

    const fetchPanchang = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/panchang', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch panchang data')
            }
            const data = await response.json();
            if (data.success) {
                setPanchangData(data.data);
            } else {
                throw new Error(data.error || 'Failed to fetch panchang data');
            }
        } catch (error) {
            setError(error instanceof Error ? error.message: 'An error occured')
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPanchang();
    }, []);

    return (
        <div>
            <h3 className="pb-2">Panchang</h3>
            <div className="bg-[#FFFFFF] p-4 rounded mb-8">
                <div className="flex justify-between items-center">
                    <div >
                        <h5>Aaj Ka Panchang</h5>
                        <p className="text-sm">New Delhi, India</p>
                    </div>
                    <Button className="bg-[#FF9933] p-1 rounded text-sm text-[#FFFFFF]">
                        Detailed Panchang
                    </Button>   
                </div>
                {error && (
                    <div className="text-red-500 text-sm mt-2">
                        Error: {error}
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#FF9933] mx-auto"></div>
                    <p className="mt-2 text-sm text-gray-500">Fetching latest panchang data...</p>
                </div>
                ) : (
                    <>
                    <div className="grid grid-cols-3 gap-3 items-center">
                    <hr className="border-t-1 border-[#43557B] w-25 md:w-45" />
                    <p className="text-sm font-medium text-[#43557B] text-center">{formattedDate}</p>
                    <hr className="border-t-1 border-[#43557B] w-25 md:w-45" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
                    <div className="bg-[#FF9933] rounded">
                        <PanchangImg
                            image="/assets/sunrisePanchangImg.png"
                            altImg="Sunrise Image"
                            time="6.18.31" 
                        />
                    </div>
                    <div className="bg-[#FF9933] rounded">
                        <PanchangImg
                            image="/assets/sunsetPanchangImage.png"
                            altImg="Sunset Image"
                            time="17.57.43" 
                        />
                    </div>
                    <div className="bg-[#1E3A8A] rounded">
                        <PanchangImg
                            image="/assets/moonrisePanchangImg.png"
                            altImg="BluePanchangImg"
                            time="12.10.28" 
                        />
                    </div>
                    <div  className="bg-[#1E3A8A] rounded">
                        <PanchangImg
                            image="/assets/moonsetPanchangImg.png"
                            altImg="BluePanchangImg"
                            time="22.13.7" 
                        />
                    </div>
                </div>
                <hr className="border-t-1 border-[#FF9933] w-full p-2" />
                <div className="grid grid-cols-2 gap-4 border border-gray-300 p-4 text-sm ">
                    <div>
                        <div>
                            <h5>Month</h5>
                            <p>Amanta: <b>{panchangData?.month?.lunarMonthName || 'Loading...'}</b></p>
                            <p>Purnimanta: <b>{panchangData?.month?.lunarMonthFullName || 'Loading...'}</b></p>
                            <hr className="border-t-1 border-gray-300 w-30 md:w-63 my-2" />
                        </div>
                        <div>
                            <p>Tithi: <b>{panchangData?.tithi?.name || 'Loading...'}</b></p>
                            <p>Till: <b>{panchangData?.tithi?.completion ? new Date(panchangData.tithi.completion).toLocaleString() : 'Loading...'}</b></p>
                            <hr className="border-t-1 border-gray-300 w-30 md:w-63 my-2" />
                        </div>
                        <div>
                            <p>Yog: <b>{panchangData?.yog?.name || 'Loading...'}</b></p>
                            <p>Till: <b>{panchangData?.yog?.completion ? new Date(panchangData.yog.completion).toLocaleString() : 'Loading...'}</b></p>
                        </div>    
                    </div>
                    <div>
                        <div>
                            <h5>Samvat</h5>
                            <p>Vikram: <b>{panchangData?.samvat?.vikram || 'Loading...'}</b></p>
                            <p>Shaka: <b>{panchangData?.samvat?.saka || 'Loading...'} </b></p>
                            <hr className="border-t-1 border-gray-300 w-30 md:w-63 my-2" />
                        </div>
                        <div>
                            <p>Nakshatra: <b>{panchangData?.nakshatra?.name || 'Loading...'}</b> </p>
                            <p>Till: <b>{panchangData?.nakshatra?.completion ? new Date(panchangData.nakshatra.completion).toLocaleString() : 'Loading...'}</b></p>
                            <hr className="border-t-1 border-gray-300 w-30 md:w-63 my-2" />
                        </div>
                        <div>
                            <p>Karan: <b>{panchangData?.karan?.name || 'Loading...'}</b></p>
                            <p>Purnimanta: <b>{panchangData?.karan?.completion ? new Date(panchangData.karan.completion).toLocaleString() : 'Loading...'}</b></p>
                        </div>
                    </div>
                </div>
                </>
                )}  
            </div>      
        </div>
    )
}