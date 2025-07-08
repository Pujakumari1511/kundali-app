
export interface Samvat {
    vikram: string;
    saka: string

}

export interface Month {
    lunarMonthName: string;
    lunarMonthFullName: string;
}

export interface NameAndCompletion {
    name: string;
    completion: Date;
}



export interface PanchangData {
    tithi?: NameAndCompletion;
    samvat?: Samvat;
    month?: Month;
    yog?: NameAndCompletion;
    nakshatra?: NameAndCompletion;
    karan?: NameAndCompletion;
}