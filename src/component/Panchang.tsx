
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

export const Panchang = () => {
    return (
        <div>
            <h3>Panchang</h3>
            <div className="bg-[#FFFFFF] p-4 rounded mb-8">
                <div className="flex justify-between items-center">
                    <div >
                        <h5>Aaj Ka Panchang</h5>
                        <p className="text-sm">New Delhi, India</p>
                    </div>
                    <button className="bg-[#FF9933] p-1 rounded text-sm text-[#FFFFFF]">Detailed Panchang</button>   
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <hr className="border-t-1 border-[#43557B] w-45" />
                    <p className="text-sm font-medium text-[#43557B] text-center">Friday, 13 June 2025</p>
                    <hr className="border-t-1 border-[#43557B] w-45" />
                </div>
                <div className="grid grid-cols-4 gap-6 py-4">
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
                            altImg="orangePanchangImg"
                            time="12.10.28" 
                        />
                    </div>
                    <div  className="bg-[#1E3A8A] rounded">
                        <PanchangImg
                            image="/assets/bluePanchangImg.png"
                            altImg="orangePanchangImg"
                            time="22.13.7" 
                        />
                    </div>
                </div>
                <hr className="border-t-1 border-[#FF9933] w-full p-2" />
                <div className="grid grid-cols-2 gap-4 border border-gray-300 p-4 text-sm ">
                    <div>
                        <div>
                            <h5>Month</h5>
                            <p>Amanta: <b>Ashwin</b></p>
                            <p>Purnimanta: <b>Ashwin</b></p>
                            <hr className="border-t-1 border-gray-300 w-63 my-2" />
                        </div>
                        <div>
                            <p>Tithi: <b>Shukla Shashthi</b></p>
                            <p>Till: <b>2024-10-09 12:15:55</b></p>
                            <hr className="border-t-1 border-gray-300 w-63 my-2" />
                        </div>
                        <div>
                            <p>Yog: <b>Shobhan</b></p>
                            <p>Till: <b>2024-10-10 05:53:23</b></p>
                        </div>    
                    </div>
                    <div>
                        <div>
                            <h5>Samvat</h5>
                            <p>Vikram: <b>2081 Peengal</b></p>
                            <p>Shaka: <b>1946 Krodhi</b></p>
                            <hr className="border-t-1 border-gray-300 w-63 my-2" />
                        </div>
                        <div>
                            <p>Nakshatra: <b>Mool</b> </p>
                            <p>Till: <b>2024-10-10 05:15:08</b></p>
                            <hr className="border-t-1 border-gray-300 w-63 my-2" />
                        </div>
                        <div>
                            <p>Karan: <b>Taitil</b></p>
                            <p>Purnimanta: <b>2024-10-09 12:12:55</b></p>
                        </div>
                    </div>
                </div>
            </div>   
            
        </div>
    )
}