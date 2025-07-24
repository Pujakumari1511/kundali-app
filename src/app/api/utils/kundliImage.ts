import { KundliRequestData, KundliOutput } from "@/types/kundli";

const api_key = process.env.ASTROLOGY_API_KEY || "";
const url = "https://json.freeastrologyapi.com";


export const kundli = async (kundaliRequestData: KundliRequestData): Promise<KundliOutput> => {
    try {
        const getKundliImage = await fetch(`${url}/horoscope-chart-svg-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify(kundaliRequestData)
        });
        if (!getKundliImage.ok){
            throw new Error(`HTTP error! status: ${getKundliImage.status}`);
        }
        const response = await getKundliImage.json();

        console.log('API Response:', response);
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