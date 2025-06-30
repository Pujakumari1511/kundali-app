import { CustomerFeedback } from "./CustomerFeedback"

export const About = () => {
    return (
        <div className="bg-bg-white">
            <div className="flex justify-center">
                <img src="/assets/xImage.png" alt="X" />
            </div>
            <h3 className="text-3xl flex justify-center pb-8">About Vedic Astrology</h3>
            <div className="grid grid-cols1 md:grid-cols-5 pb-10 px-15">
                <div className="col-span-1 md:col-span-2">
                    <img className="h-30 sm:h-100 w-60 sm:w-100" src="/assets/aboutPageImg.jpg" alt="horoscopeLogo image" />
                </div>
                <div className="col-span-3 flex flex-col justify-center text-sm sm:text-m">
                    <p className="pb-10">
                        Vedic astrology, also known as Jyotish Shastra or
                        Jyotisha, is a traditional system of astrology
                        that originated in ancient India. It is based on
                        the Vedas, the oldest sacred texts of Hinduism, 
                        and has been practiced for thousands of years. 
                        Vedic Astrology or Jyotisha connects human life 
                        with cosmic order and karmic patterns. It is not 
                        just about making predictions or analyzing personality
                        traits, but about understanding the cosmic play of karma, 
                        the soul's journey, and the individual's role in the greater
                        scheme of the universe.
                    </p>
                    <p className="pb-10">
                        Vedic astrology offers guidance, self-awareness, 
                        and a deeper understanding of life’s purpose and 
                        challenges. Rooted in ancient wisdom, it provides 
                        insights into the karmic forces at play and helps 
                        us live more fulfilling and purposeful lives, making 
                        informed choices leading to material and spiritual success.
                    </p>
                </div>
                
            </div>
            <CustomerFeedback />
        </div>
    )
}