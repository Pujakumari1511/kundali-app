
import { NextResponse } from "next/server";
//import { getYog, getSamvat, getKaran, getTithi, getMonth, getNakshatra} from "../utils/panchangEndpoints";
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
            // tithi: tithi,
            // month: month,
            // yog: yog,
            // samvat: samvat,
            // nakshatra: nakshatra,
            // karan: karan  
        }
        return NextResponse.json(panchangData);  
    } catch (error) {
        return NextResponse.json({}, {status: 500, statusText: "Internal Server Error"})
    }
}


