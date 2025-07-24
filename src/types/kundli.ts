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
    savedId?: number;
}

export interface KundliFormData {
  name: string;
  phone: string;
  city: string;
  state: string;
  gender: string;
  birthDate: string;
  birthMonth: string;
  birthYear: string;
  birthHour: string;
  birthMinute: string;
  birthPeriod: string;
}

export interface KundliData {
  formData: KundliFormData;
  svgContent: string;
  generatedAt: Date;
}

export interface KundliSaveData {
  name: string;
  phone: string;
  gender: string;
  birth_date: string;
  birth_time: string;
  city: string;
  state: string;
  kundli_image_url: string | null;
}