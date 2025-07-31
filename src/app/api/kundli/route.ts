import { NextRequest, NextResponse } from "next/server";
import { KundliApiResponse, KundliFormData, KundliRequestData } from "@/types/kundli";
import { kundli } from "../utils/kundliImage";
import { GeocodeCity } from "../utils/geoCode";
import { pool } from "../../../db/mysql";
import { ResultSetHeader } from 'mysql2';

const getRequestData = async (kundliFormData: KundliFormData): Promise<KundliRequestData> => {
    const geoCode = await GeocodeCity({
        city: kundliFormData.city,
        state: kundliFormData.state,
    });
    return {
        year: +kundliFormData.birthYear,
        month: +kundliFormData.birthMonth + 1,
        date: +kundliFormData.birthDate,
        hours: +kundliFormData.birthHour,
        minutes: +kundliFormData.birthMinute,
        seconds: 0,
        latitude: +geoCode.lat,
        longitude: +geoCode.lon,
        timezone: 5.5,
        "config": {        
            "observation_point": "geocentric",
            "ayanamsha": "lahiri" 
        }
    };
};

export async function POST(req: NextRequest) {
    try {
        const kundliFormData: KundliFormData = await req.json();
        const requestData = await getRequestData(kundliFormData);
        const kundliImage = await kundli(requestData);

          // Save to database
        const [result] = await pool.query<ResultSetHeader>(
            `INSERT INTO users
            (name, phone, gender, birth_date, birth_time, city, state, kundli_image_url)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                kundliFormData.name,
                kundliFormData.phone,
                kundliFormData.gender,
                `${kundliFormData.birthYear}-${String(+kundliFormData.birthMonth + 1).padStart(2, '0')}-${kundliFormData.birthDate}`,
                `${kundliFormData.birthHour}:${kundliFormData.birthMinute} ${kundliFormData.birthPeriod}`,
                kundliFormData.city,
                kundliFormData.state,
                kundliImage.output
            ]
        );

        const response: KundliApiResponse = {
            success: true,
            data: kundliImage,
            savedId: result.insertId
        }
        return NextResponse.json(response);
    } catch (error) {
        console.error('Kundli API error:', error);
        const errorResponse: KundliApiResponse = {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred',
            savedId: undefined
        };
        return NextResponse.json(errorResponse, { 
            status: 500, 
            statusText: "Internal Server Error" 
        });
    }

}