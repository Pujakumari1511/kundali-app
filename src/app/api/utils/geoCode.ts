const API_KEY = process.env.LOCATIONIQ_API_KEY || '';

interface GeoCodeQuery {
    city: string;
    state: string;
}

interface GeoCode {
    lat: string;
    lon: string;
}

export const GeocodeCity = async ({city, state}: GeoCodeQuery): Promise<GeoCode> => {
    const query = `${city}, ${state}, India`;
    const url = new URL('https://us1.locationiq.com/v1/search.php');
    url.search = new URLSearchParams({
        key: API_KEY,
        q: query,
        format: 'json',
        limit: '1'
    }).toString();
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Something went wrong ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.length === 0) {
            console.log('No data found');
            throw new Error(`Error: ${data.status}`);
        }

        const geoCode = data[0] as GeoCode;
        console.log(`Latitude: ${geoCode.lat}, Longitude: ${geoCode.lon}`);
        return geoCode;
    } catch (error) {
        console.error('Error during geocoding:', error);
        throw error;
    }
}