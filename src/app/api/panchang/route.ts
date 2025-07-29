
import { NextResponse } from "next/server";
import { getYog, getSamvat, getKaran, getTithi, getMonth, getNakshatra} from "../utils/panchangEndpoints";
import { PanchangData } from "@/types/panchang";
import { pool } from "@/db/mysql";
import { RowDataPacket } from 'mysql2';


interface PanchangRow extends RowDataPacket {
    panchangData: string;
}

export async function GET() {
    try {
        const currentDate = new Date().toISOString().split('T')[0];

        const [existingRows] = await pool.query<PanchangRow[]>(
            'SELECT panchangData FROM panchang WHERE date = ?',
            [currentDate]
        );

        if (existingRows.length > 0) {
            const record = existingRows[0];
            const panchangData = JSON.parse(record.panchangData);

            return NextResponse.json({
                success: true,
                data: panchangData,
                date: currentDate,
            })
        }

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

        await pool.query(
            `INSERT INTO panchang (date, panchangData)
            VALUES (?, ?)
            `,
            [
                currentDate,
                JSON.stringify(panchangData)
            ]
        );
        return NextResponse.json({
            success: true,
            data: panchangData,
            date: currentDate
        });  
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        }, {status: 500, statusText: "Internal Server Error"})
    }
}