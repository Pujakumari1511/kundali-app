import facebookIcon from '../../public/assets/fb.png';
import instaIcon from '../../public/assets/instaIcon.png';
import youtubeIcon from '../../public/assets/youtube.png';
import twitterIcon from '../../public/assets/twitter.png';
import type { StaticImageData } from 'next/image';


const socialMediaJson = {
     "image": "/assets/socialMediaImg.png",
     "altImg": "youtube video link 1",
     "headerText": "Every Problem Have A Solution 1",
     "paraText": "Lectus magna fringilla urna porttitor rhoncus dolor purus non. Convallis a cras semper auctor",
     "playIcon": "/assets/playIcon.png"
 };

const socialMediaIcons = [facebookIcon, twitterIcon, instaIcon, youtubeIcon];
 
const socialMediaData = socialMediaIcons.map(icon => ({
  ...socialMediaJson,
  socialMediaIcon: icon
}));


interface SocialMediaDetailProps {
    image: string;
    altImg: string;
    headerText: string;
    paraText: string;
    socialMediaIcon: string | StaticImageData;
    playIcon: string
}

const SocialMediaDetails = ({image, altImg, headerText, paraText, socialMediaIcon, playIcon}: SocialMediaDetailProps) => {
    return (
        <div>
            <div className="h-48 relative pb-4">
                <img src={image} alt={altImg} className="w-full h-full object-cover" />
                <img
                    src={playIcon}
                    alt="play button"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            <h4>{headerText}</h4>
            <div className="text-xs grid grid-cols-4 gap-12 py-2">
                <p className="col-span-3">{paraText}</p>
                <img
                    src={typeof socialMediaIcon === 'string' ? socialMediaIcon : socialMediaIcon.src}
                    alt="social media icon"
                    className="h-8 w-8"
                    />
                {/* <img src={typeof socialMediaIcon} alt="Instagram icon" className="h-8 w-8 " /> */}
            </div>  
        </div>
    )
}

export const SocialMedia = () => (
  <div>
    <h1 className="text-xl pb-1">Social Media Feed</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {socialMediaData.map((item, idx) => (
        <SocialMediaDetails
          key={idx}
          image={item.image}
          altImg={item.altImg}
          headerText={item.headerText}
          paraText={item.paraText}
          socialMediaIcon={item.socialMediaIcon}
          playIcon={item.playIcon}
        />
      ))}
    </div>
  </div>
);