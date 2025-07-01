import { StarRating } from "./StarRating"

export const CustomerFeedback = () => {
    return (
        <div className="bg-[#FAE6B8] p-8">
            <div className="flex justify-center">
                <img src="/assets/xImage.png" alt="X" />
            </div>
            <h1 className="text-lg md:text-3xl text-center mt-2 mb-6">Our Customer Thoughts</h1>
            <div className="grid col-span-2 md:grid-cols-8 gap-15 p-10 md:p-16 bg-[#FFFFFF] rounded-3xl ">
                <div className="flex md:justify-center col-span-2 md:col-span-2">
                    <img className="h-70 md:h-70 object-cover rounded-full" src="/assets/customerImg.png" alt="Customer Image" />
                </div>
                
                <div className="col-span-2 md:col-span-5 flex flex-col justify-center items-center">
                    <p className="text-sm text-gray-500">
                        Accumsan lacus vel facilisis volutpat est. Ornare 
                        suspendisse sed nisi lacus sed viverra tellus in. 
                        Lobortis scelerisque fermentum dui faucibus. Et odio
                        pellentesque diam volutpat commodo. Odio morbi quis
                        commodo odio aenean sed. Velit laoreet id donec ultrices
                        tincidunt arcu non sodales. Tristique sollicitudin nibh
                        sit amet commodo nulla facilisi nullam. Aliquet enim tortor at auctor.    
                    </p> 
                    <div className="my-4">
                        <StarRating rating={3.5}/>
                    </div>
                    <div className="self-start">
                        <h2 className="text-2xl text-[#FF9933]">Saara - Manager</h2>
                        <p className="text-gray-500">Zodiac - Leo</p>
                    </div>        
                </div> 
                <div className="flex flex-col justify-center items-center mb-15">
                    <div className="h-15 w-20 ml-10">
                        <img src="/assets/Group1850.png" alt=""/>
                        <img src="/assets/Group1849.png" alt=""/>
                    </div>    
                </div>
            </div>
        </div>
    )
}