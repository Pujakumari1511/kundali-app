
import { Month, NameAndCompletion, Samvat } from "@/types/panchang";


const api_key = process.env.ASTROLOGY_API_KEY || "";
const url = "https://json.freeastrologyapi.com";


interface FreeAstrologyResponse {
    statusCode: number;
    output: string;
}

interface MonthOutput {
    lunar_month_name: string;
    lunar_month_full_name: string;
}

interface TithiOutput {
    name: string;
    completes_at: Date;
}

interface YogOutput {
    [key: string]: {
        name: string;
        completion: string;
    }
}

interface KaranOutput {
    [key: string]: {
        name: string;
        completion: string;
    }
}

interface SamvatOutput {
    saka_salivahana_number: number;
    saka_salivahana_year_name: string;
    vikram_chaitradi_number: number;
    vikram_chaitradi_year_name: string;
}

interface NakshatraOutput {
    name: string;
    ends_at: string;
}

interface RequestData {
    year: number;
    month: number;
    date: number;
    hours: number;
    minutes: number;
    seconds: number;
    latitude: number;
    longitude: number;
    timezone: number;
    config: Record<string, unknown>;
}

const getRequestData = (): RequestData => {
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


export const getTithi = async(): Promise<NameAndCompletion | undefined> => {
    try {
        const requestData = getRequestData();
        const tithiResponse = await fetch(`${url}/tithi-durations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify(requestData)
        });
        if (!tithiResponse.ok) {
            throw new Error(`HTTP error! status: ${tithiResponse.status}`)
        }
        const tithiResult = await tithiResponse.json() as FreeAstrologyResponse;
        const tithiOutput = JSON.parse(tithiResult.output) as TithiOutput;

        const tithi: NameAndCompletion = {
            name: tithiOutput.name,
            completion: tithiOutput.completes_at
        }
        return tithi;
        
    } catch (error) {
        console.error('Error fetching panchang data:', error);
        return undefined;
    }
}

export const getMonth = async () => {
    try {
        const requestData = getRequestData();
        const monthResponse = await fetch(`${url}/lunarmonthinfo`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify(requestData)
        });
        if (!monthResponse.ok){
            throw new Error(`HTTP error! status: ${monthResponse.status}`)
        }

        const monthResult = await monthResponse.json() as FreeAstrologyResponse;
        const monthOutput = JSON.parse(monthResult.output) as MonthOutput;
        console.log(monthOutput)

        const month: Month = {
            lunarMonthName: monthOutput.lunar_month_name,
            lunarMonthFullName: monthOutput.lunar_month_full_name
        }
        return month;
    } catch (error) {
        console.error('Error fetching panchang data:', error);
    }
}

export const getYog = async () => {
    try {
        const requestData = getRequestData();
        const yogResponse = await fetch(`${url}/yoga-durations`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify(requestData)    
        });
        if (!yogResponse.ok){
            throw new Error(`HTTP error! status: ${yogResponse.status}`)
        }
        const yogResult = await yogResponse.json() as FreeAstrologyResponse;
        const yogOutput = JSON.parse(yogResult.output) as YogOutput;
        console.log(yogOutput)

        const secondYogResponse = yogOutput["2"];

        const yog: NameAndCompletion = {
            name: secondYogResponse.name,
            completion: new Date(secondYogResponse.completion)
        }
        return yog;
    } catch (error) {
        console.error('Error fetching panchang data:', error);
        return undefined;
    }
}

export const getSamvat = async () => {
    try {
        const requestData = getRequestData();
        const samvatResponse = await fetch(`${url}/samvatinfo`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify(requestData)
        });
        if (!samvatResponse.ok){
            throw new Error(`HTTP error! status: ${samvatResponse.status}`)
        }
        const samvatResult = await samvatResponse.json() as FreeAstrologyResponse;
        const samvatOutput = JSON.parse(samvatResult.output) as SamvatOutput;

        const samvat: Samvat = {
            vikram: samvatOutput.vikram_chaitradi_number + ' ' +  samvatOutput.vikram_chaitradi_year_name,
            saka: samvatOutput.saka_salivahana_number + ' ' +   samvatOutput.saka_salivahana_year_name
        }      
        return samvat;

    } catch (error) {
        console.error('Error fetching panchang data:', error);
        return undefined;
    }
}

export const getNakshatra = async () => {
    try {
        const requestData = getRequestData();
        const nakshatraResponse = await fetch(`${url}/nakshatra-durations`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify(requestData)
        });
         if (!nakshatraResponse.ok){
            throw new Error(`HTTP error! status: ${nakshatraResponse.status}`)
        }

        const nakshatraResult = await nakshatraResponse.json() as FreeAstrologyResponse;
        const nakshatraOutput = JSON.parse(nakshatraResult.output) as NakshatraOutput;

        const nakshatra: NameAndCompletion = {
            name: nakshatraOutput.name,
            completion: new Date(nakshatraOutput.ends_at),
        }

        return nakshatra;
    } catch (error) {
        console.error('Error fetching panchang data:', error);
        return undefined;
    }
}

export const getKaran = async () => {
    try {
        const requestData = getRequestData();
        const karanResponse = await fetch(`${url}/karana-durations`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify(requestData)
        });
         if (!karanResponse.ok){
            throw new Error(`HTTP error! status: ${karanResponse.status}`)
        }

        const karanResult = await karanResponse.json() as FreeAstrologyResponse;
        const karanOutput = JSON.parse(karanResult.output) as KaranOutput;

        const firstKaranResponse = karanOutput["1"];

        const karan: NameAndCompletion = {
            name: firstKaranResponse.name,
            completion: new Date(firstKaranResponse.completion)
        };
        return karan

    } catch (error) {
        console.error('Error fetching panchang data:', error);
        return undefined;
    }
}