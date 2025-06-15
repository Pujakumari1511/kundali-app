import { OurServices } from "./OurServices"
import { Panchang } from "./Panchang"


export const Home = () => {
    return (
        <div>
            <div className="bg-[#000080] flex flex-col items-center justify-center">
                <div className="h-70 w-80 flex items-center justify-center">
                    <img src="/assets/ganesh.png" alt="Ganesh" />
                </div>
                <div>
                    <p className="text-[#FF9933] text-2xl text-center px-80 pb-15">
                        ॐ गन गणपतए नमो नमः श्री सिद्धि विनायक नमो
                        नमः अष्टविनायकनमो नमः गणपति बाप्पा मोरया |
                    </p>
                </div>   
            </div>
            <div className="bg-[#FF9933] h-8 py-1 text-[#FFFFFF] text-sm">
                <p>
                    Accumsan lacus vel facilisis volutpat est. Ornare suspendisse
                    sed nisilacus sed viverra tellus in. Lobortis scelerisque
                    fermentum dui faucibus. Etodio pellentesque diam volutpat
                    commodo. Odio morbi quis
                </p>
            </div>
            <div className="bg-[#FAE6B8] grid grid-cols-2 gap-4">
                <div className="p-4">
                    <Panchang />
                </div>

                <div className="p-4">
                    <OurServices />   
                </div>
            </div>
         </div>
    )
}