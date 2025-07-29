import {KundaliForm} from "./form/KundaliForm";
import Image from "next/image";


export const Kundli = () => {
    return (
        <>
            <hr className="border-t-2 border-[#FF9933] w-full" />
            <div className="bg-[#FAE6B8] md:px-20 pb-10 border-b border-[#FF9933]">
                <h5 className="p-10 flex justify-center text-4xl">Kundali</h5>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <Image
                        className="md:col-span-3"
                        src="/assets/kundliImg.png"
                        alt="Kundali image"
                        height={800}
                        width={700}
                    />
                    <div className="bg-white px-10 rounded shadow-md md:col-span-2">
                        <KundaliForm />
                    </div>
                </div>  
            </div> 
        </>   
    )
}