import { ContactForm } from "./form/ContactForm"

type BoxesProps = {
    icon: string;
    info1: string;
    info2: string;
}

const Boxex = ({icon, info1, info2}: BoxesProps) => {
    return (
        <div className="w-full max-w-80 mx-auto">
            <div className="bg-[#FF9933] h-60 w-full rounded-2xl text-white">
                <div className="flex justify-center p-5 pt-10">
                    <img src={icon} alt="" />
                </div>
                <p className="flex justify-center text-center px-10">{info1}</p>
                <p className="flex justify-center text-center px-10">{info2}</p>
            </div>
        </div>
    )
}

export const Contact = () => {
    return (
        <>
            <hr className="border-t-2 border-[#FF9933] w-full" />
            <div className="bg-[#FAE6B8] px-4 sm:px-15 pt-10 sm:pb-5 pb-20">
                {/* Boxes Section */}
                <div className="w-full flex justify-center mb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center w-full max-w-6xl px-4">
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

                {/* Content Section */}
                <div id="contactpage" className="bg-secondary border border-[#FF9933] grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 sm:px-15 pb-20 pt-10 rounded relative">
                    <div>
                        <div className="mb-6">
                            <img src="/assets/xImage.png" alt="X" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl pb-5">Get In Touch</h3>
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
                    <div className="mt-6 lg:mt-0">
                        <ContactForm />
                    </div>
                </div> 
            </div>
        </>
    )
}