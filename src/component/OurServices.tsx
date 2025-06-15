interface ServiceProp {
    name: string;
    imgSrc: string;
    altImg: string;
    listPrice: Number;
    discountedPrice: Number;
}

const Service = ({name, imgSrc, altImg, listPrice, discountedPrice}: ServiceProp) => {
    return (
         <div className={`flex flex-col items-center p-4`}>
            <img src={imgSrc} alt={altImg} className="h-16 w-16 object-contain mb-4" />
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
            <div className="flex gap-4 justify-start w-full text-sm">
                <p className="line-through text-gray-400">{`₹${listPrice}`}</p>
                <p className="font-bold text-[#FF9933]">{`₹${discountedPrice}`}</p>
            </div>
        </div>
    )
}

export const OurServices = () => {
    return (
        <div>
            <h3 className="text-center">Our Services</h3>
            <div className="bg-[#FFFFFF] p-4 flex flex-col items-center justify-center">
                <img src="/assets/pray 1.png" alt="" className="mx-auto" />
                <h3 className="font-bold my-2">लोकाः समस्ताः सुखिनो भवन्तु</h3>
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#FF9933] text-black p-4 rounded grid grid-cols-10 gap-1 items-center shadow-[0_8px_32px_0_rgba(255,153,51,0.6),0_1.5px_8px_0_rgba(0,0,0,0.12)]">
                    <img className="col-span-2" src="/assets/patra.png" alt="Patra" />
                    <p className="col-span-7">
                        Order Hard Copy of Kundali (Birth Chart) for
                        convenient reference, personal keepsake,
                        detailed layout and easy annotations ₹1100
                    </p>
                    <div className="col-span-1 flex justify-end">
                        <img src="assets/arrow.png" alt="arrow sign" className="h-6" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 w-full pt-10 divide-x divide-gray-300">
                    <Service 
                        name="Kundali Analysis Overall with 3 areas of concern"
                        imgSrc="/assets/kundaliAnalysis.png"
                        altImg="kundali Analysis"
                        listPrice={15000}
                        discountedPrice={11000}
                    />
                    <Service 
                        name="Match-Matching"
                        imgSrc="/assets/earth.png"
                        altImg="Earth"
                        listPrice={6000}
                        discountedPrice={5000}
                    />
                    <Service 
                        name="Marriage Consultation"
                        imgSrc="/assets/marriage.png"
                        altImg="Marriage consultation"
                        listPrice={6000}
                        discountedPrice={5000}
                    />
                    <Service 
                        name="Progeny/Children"
                        imgSrc="/assets/progenyChildren.png"
                        altImg="progenyChildren"
                        listPrice={6000}
                        discountedPrice={5000}
                    />
                    <Service 
                        name="Education"
                        imgSrc="/assets/education.png"
                        altImg="education"
                        listPrice={6000}
                        discountedPrice={5000}
                    />
                    <Service 
                        name="Career Profession"
                        imgSrc="/assets/careerProfession.png"
                        altImg="careerProfession"
                        listPrice={6000}
                        discountedPrice={5000}
                    />
                    <Service 
                        name="Name Correction"
                        imgSrc="/assets/nameCorrection.png"
                        altImg="name Correction"
                        listPrice={6000}
                        discountedPrice={5000}
                    />
                    <Service 
                        name="Muhurata"
                        imgSrc="/assets/muhurata.png"
                        altImg="Muhurata"
                        listPrice={6000}
                        discountedPrice={5000}
                    />
                    <Service 
                        name="Good/Bad Times"
                        imgSrc="/assets/goodBadTimes.png"
                        altImg="goodBadTimes"
                        listPrice={6000}
                        discountedPrice={5000}
                    />
                </div>
            </div>
        </div>
    )
}