
import { Month, NameAndCompletion, Samvat } from "@/types/panchang";
import { fetchAstrologer } from "./astrologerService";

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


export const getTithi = async(): Promise<NameAndCompletion> => {
    try {
        const tithiResult = await fetchAstrologer({
            path: "/tithi-durations",
            method: "POST",
            body: getRequestData(),
        });
        const tithiOutput = JSON.parse(tithiResult) as TithiOutput;

        const tithi: NameAndCompletion = {
            name: tithiOutput.name,
            completion: tithiOutput.completes_at
        }
        return tithi;    
    } catch (error) {
        console.error('Error fetching tithi:', error);
        throw error;
    }
}

export const getMonth = async(): Promise<Month> => {
    try {
         const monthResult = await fetchAstrologer({
            path: "/lunarmonthinfo",
            method: "POST",
            body: getRequestData(),
       });
       const monthOutput = JSON.parse(monthResult) as MonthOutput;

        const month: Month = {
            lunarMonthName: monthOutput.lunar_month_name,
            lunarMonthFullName: monthOutput.lunar_month_full_name
        }
        return month;
    } catch (error) {
        console.error('Error fetching panchang data:', error);
        throw error;
    }
}

export const getYog = async (): Promise<NameAndCompletion> => {
    try {
        const yogResult = await fetchAstrologer({
            path: "/yoga-durations",
            method: "POST",
            body: getRequestData(),
        });
        const yogResponse = JSON.parse(yogResult) as YogOutput;

       const yogOutput = yogResponse["2"];

        const yog: NameAndCompletion = {
            name: yogOutput.name,
            completion: new Date(yogOutput.completion)
        }
        return yog;
    } catch (error) {
        console.error('Error fetching panchang data:', error);
        throw error;
    }
}

export const getSamvat = async (): Promise<Samvat> => {
    try {
        const samvatResult = await fetchAstrologer({
            path: '/samvatinfo',
            method: 'POST',
            body: getRequestData(),
        });
        const samvatOutput = JSON.parse(samvatResult) as SamvatOutput

        const samvat: Samvat = {
            vikram: samvatOutput.vikram_chaitradi_number + ' ' +  samvatOutput.vikram_chaitradi_year_name,
            saka: samvatOutput.saka_salivahana_number + ' ' +   samvatOutput.saka_salivahana_year_name
        }      
        return samvat;

    } catch (error) {
        console.error('Error fetching panchang data:', error);
        throw error;
    }
}

export const getNakshatra = async (): Promise<NameAndCompletion> => {
    try {
       const nakshatraResult = await fetchAstrologer({
            path: '/nakshatra-durations',
            method: 'POST',
            body: getRequestData(),
        });

        const nakshatraOutput = JSON.parse(nakshatraResult) as NakshatraOutput;

        const nakshatra: NameAndCompletion = {
            name: nakshatraOutput.name,
            completion: new Date(nakshatraOutput.ends_at),
        }
        return nakshatra;
    } catch (error) {
        console.error('Error fetching panchang data:', error);
        throw error;
    }
}

export const getKaran = async (): Promise<NameAndCompletion> => {
    try {
        const karanResult = await fetchAstrologer({
            path: '/karana-durations',
            method: 'POST',
            body: getRequestData(),
        });

        const karanOutput = JSON.parse(karanResult) as KaranOutput;

        const firstKaranResponse = karanOutput["1"];

        const karan: NameAndCompletion = {
            name: firstKaranResponse.name,
            completion: new Date(firstKaranResponse.completion)
        };
        return karan;

    } catch (error) {
        console.error('Error fetching panchang data:', error);
        throw error;
    }
}