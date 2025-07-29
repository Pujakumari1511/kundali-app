import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ServiceProp {
    name: string;
    imgSrc: string;
    altImg: string;
}

const Service = ({name, imgSrc, altImg }: ServiceProp) => {
    return (
         <div className={`flex flex-col items-center p-4`}>
            <Image 
                src={imgSrc} 
                alt={altImg} 
                className="object-contain my-15" 
                height={100}
                width={100}
                />
            <div className="w-full text-left h-15">
                <p
                    className="transition-all"
                    style={{
                        fontSize: name.length > 30 ? '0.85rem' : '1rem',
                        lineHeight: '1.2',
                    }}
                >
                    {name}
                </p>
            </div>
            <div className="bg-[#FF9933] flex justify-center w-full p-2 rounded text-sm text-[#FFFFFF]">
                <Button variant="ghost">Enquire Now</Button>
            </div>
        </div>
    )
}

export const OurServices = () => {
    return (
        <div>
            <h3 className="text-center pb-2">Our Services</h3>
            <div className="bg-[#FFFFFF] p-4 flex flex-col items-center justify-center">
                <Image 
                    src="/assets/pray 1.png" 
                    alt="Pray image" 
                    className="mx-auto" 
                    height={40}
                    width={40}
                    />
                <h3 className="font-bold my-2 pb-10 text-2xl">लोकाः समस्ताः सुखिनो भवन्तु</h3>
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#FF9933] text-black p-4 rounded grid grid-cols-3 md:grid-cols-10 gap-1 items-center shadow-[0_8px_32px_0_rgba(255,153,51,0.6),0_1.5px_8px_0_rgba(0,0,0,0.12)]">
                    <Image
                        className="col-span-3 md:col-span-2 mx-auto"
                        src="/assets/patra.png"
                        alt="Patra"
                        height={80}
                        width={80}
                    />
                    <p className="col-span-3 md:col-span-7 text-lg">
                        Order Hard Copy of Kundali (Birth Chart) for
                        convenient reference, personal keepsake,
                        detailed layout and easy annotations ₹1100
                    </p>
                    <div className="col-span-3 md:col-span-1 flex justify-center md:justify-end md:block">
                        <Image 
                            src="/assets/arrow.png" 
                            alt="arrow sign"  
                            height={50}
                            width={35}
                    />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-10 divide-x divide-gray-300">
                    <Service 
                        name="Kundali Analysis Overall with 3 areas of concern"
                        imgSrc="/assets/kundaliAnalysis.png"
                        altImg="kundali Analysis"
                    
                    />
                    <Service 
                        name="Match-Matching"
                        imgSrc="/assets/earth.png"
                        altImg="Earth"
                    />
                    <Service 
                        name="Marriage Consultation"
                        imgSrc="/assets/marriage.png"
                        altImg="Marriage consultation"
                    />
                    <Service 
                        name="Progeny/Children"
                        imgSrc="/assets/progenyChildren.png"
                        altImg="progenyChildren"
                    />
                    <Service 
                        name="Education"
                        imgSrc="/assets/education.png"
                        altImg="education"
                    />
                    <Service 
                        name="Career Profession"
                        imgSrc="/assets/careerProfession.png"
                        altImg="careerProfession"
                    />
                    <Service 
                        name="Name Correction"
                        imgSrc="/assets/nameCorrection.png"
                        altImg="name Correction"
                    />
                    <Service 
                        name="Muhurata"
                        imgSrc="/assets/muhurata.png"
                        altImg="Muhurata"
                    />
                    <Service 
                        name="Good/Bad Times"
                        imgSrc="/assets/goodBadTimes.png"
                        altImg="goodBadTimes"
                    />
                </div>
            </div>
            <div className="flex justify-center pb-10 md:pb-0">
                <Button className="bg-[#FF9933] px-10 py-2 rounded mt-10">View All</Button>
            </div>
        </div>
    )
}