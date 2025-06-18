interface NewsProps {
    headerText: string;
    newsImg: string;
    newsTopic: string;
    newsDetails: string;
    newsLink: string;
}

const News = ({headerText, newsImg, newsTopic, newsDetails, newsLink}: NewsProps) => {
    return (
         <div className="p-4 bg-[#FFFFFF] rounded">
            <h1 className="text-xl py-1"><b>{headerText}</b></h1>
            <img src={newsImg} alt="News Image" />
            <h4 className="text-m">{newsTopic}</h4>
            <p className="text-xs">{newsDetails}</p>
                <h5  className="text-blue-600 underline pt-4">
                <a href="#" className="text-blue-600 underline py-4">{newsLink}</a>
                </h5>
        </div>
    )
}

export const NewsArticles = () => {
    return (
        <div>
            <h1 className="text-2xl py-4">News & Articles</h1>
            
            <div className="grid grid-cols-2 gap-2 ">
                <div className="p-4 bg-[#FFFFFF] rounded">
                    <News 
                        headerText="What's the news?"
                        newsImg="assets/newsImage.png"
                        newsTopic="500-Coconut Vel Powers 6-Day Muruga Powertime"
                        newsDetails=" Join our Grand 7-Day Invocation of Muruga ad His 
                                Divine Cosmic Weapon Vel featuring a Grand"
                        newsLink="View all News and Events"        
                    />
                </div>
                <div className="p-4 bg-[#FFFFFF] rounded">
                    <News 
                        headerText="What's the news?"
                        newsImg="assets/newsImage.png"
                        newsTopic="500-Coconut Vel Powers 6-Day Muruga Powertime"
                        newsDetails=" Join our Grand 7-Day Invocation of Muruga ad His 
                                Divine Cosmic Weapon Vel featuring a Grand"
                        newsLink="View all News and Events"        
                    />
                </div>
            </div>
        </div>
    )
}