import { PanchangData } from "@/types/panchang";
import {use} from 'react';


interface PanchangImgProps {
    image: string;
    time: string;
    altImg: string;
}
const PanchangImg = ({image, time, altImg}: PanchangImgProps) => {
    return (
        <div className="p-4 text-[#FFFFFF] text-center">
            <img className="w-full h-18" src={image} alt={altImg} />
            <p className="pt-2">{time}</p>
        </div>
    )
}

const fetchPanchangData = async (): Promise<PanchangData> => {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/panchang`
        : 'http://localhost:3000/api/panchang';
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
     if (!response.ok) {
        throw new Error('Failed to fetch panchang data');
    }
    return response.json();
};

const panchangPromise = fetchPanchangData();

export const Panchang = () => {
    const panchangData = use(panchangPromise);

    // current day, date and year
    const now = new Date("09-07-2025");
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formattedDate = now.toLocaleDateString('en-US', options);

    return (
        <div>
            <h3 className="pb-2">Panchang</h3>
            <div className="bg-[#FFFFFF] p-4 rounded mb-8">
                <div className="flex justify-between items-center">
                    <div >
                        <h5>Aaj Ka Panchang</h5>
                        <p className="text-sm">New Delhi, India</p>
                    </div>
                    <button className="bg-[#FF9933] p-1 rounded text-sm text-[#FFFFFF]">
                        Detailed Panchang
                    </button>   
                </div>

                <div className="grid grid-cols-3 gap-3 items-center">
                    <hr className="border-t-1 border-[#43557B] w-25 md:w-45" />
                    <p className="text-sm font-medium text-[#43557B] text-center">{formattedDate}</p>
                    <hr className="border-t-1 border-[#43557B] w-25 md:w-45" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
                    <div className="bg-[#FF9933] rounded">
                        <PanchangImg
                            image="/assets/orangePanchangImg.png"
                            altImg="orangePanchangImg"
                            time="6.18.31" 
                        />
                    </div>
                    <div className="bg-[#FF9933] rounded">
                        <PanchangImg
                            image="/assets/orangePanchangImg.png"
                            altImg="orangePanchangImg"
                            time="17.57.43" 
                        />
                    </div>
                    <div className="bg-[#1E3A8A] rounded">
                        <PanchangImg
                            image="/assets/bluePanchangImg.png"
                            altImg="BluePanchangImg"
                            time="12.10.28" 
                        />
                    </div>
                    <div  className="bg-[#1E3A8A] rounded">
                        <PanchangImg
                            image="/assets/bluePanchangImg.png"
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
                            <p>Amanta: <b>{panchangData?.month?.lunarMonthName}</b></p>
                            <p>Purnimanta: <b>{panchangData?.month?.lunarMonthFullName}</b></p>
                            <hr className="border-t-1 border-gray-300 w-30 md:w-63 my-2" />
                        </div>
                        <div>
                            <p>Tithi: <b>{panchangData?.tithi?.name}</b></p>
                            <p>Till: <b>{panchangData?.tithi?.completion && new Date(panchangData.tithi.completion).toLocaleString()}</b></p>
                            <hr className="border-t-1 border-gray-300 w-30 md:w-63 my-2" />
                        </div>
                        <div>
                            <p>Yog: <b>{panchangData?.yog?.name}</b></p>
                            <p>Till: <b>{panchangData?.yog?.completion && new Date(panchangData.yog.completion).toLocaleString()}</b></p>
                        </div>    
                    </div>
                    <div>
                        <div>
                            <h5>Samvat</h5>
                            <p>Vikram: <b>{panchangData?.samvat?.vikram}</b></p>
                            <p>Shaka: <b>{panchangData?.samvat?.saka} </b></p>
                            <hr className="border-t-1 border-gray-300 w-30 md:w-63 my-2" />
                        </div>
                        <div>
                            <p>Nakshatra: <b>{panchangData?.nakshatra?.name}</b> </p>
                            <p>Till: <b>{panchangData?.nakshatra?.completion && new Date(panchangData.nakshatra.completion).toLocaleString()}</b></p>
                            <hr className="border-t-1 border-gray-300 w-30 md:w-63 my-2" />
                        </div>
                        <div>
                            <p>Karan: <b>{panchangData?.karan?.name}</b></p>
                            <p>Purnimanta: <b>{panchangData?.karan?.completion && new Date(panchangData.karan.completion).toLocaleString()}</b></p>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    )
}