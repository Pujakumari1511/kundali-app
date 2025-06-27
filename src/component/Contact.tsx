import { ContactForm } from "./form/ContactForm"

type BoxesProps = {
    icon: string;
    info1: string;
    info2: string;
}

const Boxex = ({icon, info1, info2}: BoxesProps) => {
    return (
        <div>
            <div className="bg-[#FF9933] h-60 w-80 rounded-2xl text-white">
                <div className="flex justify-center p-5 pt-10">
                    <img  src={icon} alt="" />
                </div>
                <p className="flex justify-center px-10">{info1}</p>
                <p className="flex justify-center px-10">{info2}</p>

        </div>
        </div>
        
    )
}

export const Contact = () => {
    return (
        <div className="bg-[#FAE6B8] px-10 pt-50 mt-30 pb-30 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10 w-full flex justify-center">
                <div className="grid grid-cols-3 gap-8 justify-items-center translate-y-1/3">
                    <Boxex 
                        icon="/assets/locationIcon.png"
                        info1="No: 58 A, East Madison Street,"
                        info2="Baltimore, MD, USA 4508"
                    />
                    <Boxex 
                        icon="/assets/mailBoxIcon.png"
                        info1="contact@example.com,"
                        info2=" info@example.com"
                    />
                    <Boxex 
                        icon="/assets/telephoneIcon.png"
                        info1="000-123-456789,"
                        info2=" 000-1234 56789"
                    />
                </div>
            </div>

            <div className="bg-secondary border border-[#FF9933] grid grid-cols-2 gap-8  px-15 pb-20 pt-60 rounded relative">
                <div>
                    <div>
                        <img src="/assets/xImage.png" alt="X" />
                    </div>
                    <h3 className=" font-family-stroke text-4xl pb-5">Get In Touch</h3>
                    <p className="pb-5">
                        Get a comprehensive analysis of your characteristics, 
                        personality, temperament, strengths, and weaknesses 
                        based on the placement of signs and planets in your birth chart.
                    </p>

                    <p className="pb-5">
                        This insight can be invaluable when making important life decisions, 
                        whether you're selecting the right educational field, choosing a 
                        career path, or finding a compatible life partner. It also helps 
                        you prepare for challenging periods and make the most of favorable 
                        times in specific areas of your life.
                    </p>

                    <p className="pb-5">
                        So, why wait? Unlock meaningful insights and mould your future!
                    </p>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div> 
        </div>
    )
}