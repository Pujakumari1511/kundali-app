export const Panchang = () => {
    return (
        <div>
            <h3>Panchang</h3>
            <div className="bg-[#FFFFFF] p-4">
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
            </div>   
            
        </div>
    )
}