import {KundaliForm} from "./form/KundaliForm"


export const Kundli = () => {
    return (
        <div className="bg-[#FAE6B8] px-20 pb-30">
            <h5 className="p-10 flex justify-center text-4xl">Kundali</h5>
            <div className="grid grid-cols-5 gap-6">
                <img
                    className="col-span-3"
                    src="/assets/kundliImg.png"
                    alt="Kundali image"
                />
                <div className="bg-white px-10 rounded shadow-md col-span-2">
                    <KundaliForm />
                </div>
            </div>
            
            
        </div>    
    )
}