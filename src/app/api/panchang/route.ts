
import { NextResponse } from "next/server";
import { getTithi, getMonth, getYog, getSamvat, getNakshatra, getKaran} from "../utils/panchangEndpoints";
import { PanchangData } from "@/types/panchang";


export async function GET() {
    const tithi = await getTithi();
    const month = await getMonth();
    const yog = await getYog();
    const samvat = await getSamvat();
    const nakshatra = await getNakshatra();
    const karan = await getKaran();
    
    const panchangData: PanchangData = {
        tithi: tithi,
        month: month,
        yog: yog,
        samvat: samvat,
        nakshatra: nakshatra,
        karan: karan   
    }
    return NextResponse.json(panchangData);  
}


