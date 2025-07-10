const api_key = process.env.ASTROLOGY_API_KEY || "";
const hostURL = "https://json.freeastrologyapi.com";

export interface AstrologerRequest {
    path: string;
    method: "GET" | "POST" | "DELETE" | "PUT"
    body?: any
}

export interface StringResponse {
    response: string
}

interface FreeAstrologyResponse {
    statusCode: number;
    output: string;
}

export const fetchAstrologer = async (request: AstrologerRequest): Promise<string> => {
    try {
        const response = await fetch(`${hostURL}${request.path}`,{
            method: request.method,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify(request.body)
        });

        const responseBody = await response.json();
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} for path: ${request.path} with body: ${JSON.stringify(responseBody)}`);
        }
        const output = (responseBody as FreeAstrologyResponse).output;
        return output;
    } catch (error) {
        console.error('Error fetching astrologer data: ', error);
        throw new Error('Astrologer api error')
    }
}
