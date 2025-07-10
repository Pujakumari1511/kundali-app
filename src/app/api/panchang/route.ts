
import { NextResponse } from "next/server";
//import { getMonth, getNakshatra, getSamvat, getTithi, getYog, getKaran} from "../utils/panchangEndpoints";
import { PanchangData } from "@/types/panchang";


export async function GET() {
    try {
        // const tithi = await getTithi();
        // const month = await getMonth();
        // const yog = await getYog();
        // const samvat = await getSamvat();
        // const nakshatra = await getNakshatra();
        // const karan = await getKaran();
        
        const panchangData: PanchangData = {
            tithi: {
                name: "Abcd",
                completion: new Date("12-23-2019")
            },
            month: {
                lunarMonthName: "Ashwin",
                lunarMonthFullName: "Ashwin"
            },
            yog: {
                name: "SUbha",
                completion: new Date("12-23-2019")
            },
            samvat: {
                vikram: "1944 Subhakritu",
                saka: "2079 Siku"
            },
            nakshatra: {
                name: "Satabisha",
                completion: new Date("12-23-2019")
            },
            karan: {
                name: "Chatushapada",
                completion: new Date("12-23-2019")
            }   
        }
        return NextResponse.json(panchangData);  
    } catch (error) {
        return NextResponse.json({}, {status: 500, statusText: "Internal Server Error"})
    }
}


