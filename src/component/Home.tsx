import { CustomerFeedback } from "./CustomerFeedback"
import { NewsArticles } from "./NewsArticles"
import { OurServices } from "./OurServices"
import { Panchang } from "./Panchang"
import { SocialMedia } from "./SocialMedia"


export const Home = () => {
    return (
        <div className="bg-[#FAE6B8] pt-1">
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
                <div className="overflow-hidden whitespace-nowrap">
                    <span className="inline-block animate-marquee pl-full">
                        Accumsan lacus vel facilisis volutpat est. Ornare suspendisse sed nisilacus sed viverra tellus in. Lobortis scelerisque fermentum dui faucibus. Etodio pellentesque diam volutpat commodo. Odio morbi quis commodoodio aenean sed. Velit laoreet id donec ultrices tincidunt arcu nonsodales. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.Aliquet enim tortor at auctor.
                    </span>
                </div>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <Panchang />
                        <SocialMedia />
                        <NewsArticles />
                    </div>
                    <div>
                        <OurServices />   
                    </div>
                </div>
                <CustomerFeedback />

            </div>
        
            
        </div>
    )
}