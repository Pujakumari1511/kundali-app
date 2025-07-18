export interface KundliRequestData {
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

export interface KundliOutput {
    statusCode: number;
    output: string;
}

export interface KundliApiResponse {
    success: boolean;
    data?: KundliOutput;
    error?: string;
}