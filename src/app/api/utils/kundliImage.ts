import { KundliRequestData, KundliOutput } from "@/types/kundli";

const api_key = process.env.ASTROLOGY_API_KEY || "";
const url = "https://json.freeastrologyapi.com";

const getRequestData = (): KundliRequestData => {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate(),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        latitude: 28.6139,
        longitude: 77.2090,
        timezone: 5.5,
        "config": {        
            "observation_point": "geocentric",
            "ayanamsha": "lahiri" 
        }
    };
};


export const kundli = async (): Promise<KundliOutput> => {
    try {
        const getKundliImage = await fetch(`${url}/horoscope-chart-svg-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify(getRequestData())
        });
        if (!getKundliImage.ok){
            throw new Error(`HTTP error! status: ${getKundliImage.status}`);
        }
        const response = await getKundliImage.json();

        const kundliResult: KundliOutput = {
            statusCode: response.statusCode,
            output: response.output
        }
        return kundliResult;
    } catch (error) {
        console.error('Error fetching kundli image:', error);
        throw error;
    }
}