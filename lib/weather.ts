const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/';

// https://api.openweathermap.org/data/2.5/forecast?q=Bhopal&units=metric&appid=9073e75dab151a9ecad1dfd3d00ca01f

export type Unit = "C" | "F";

const topCities = [
    1275339, // Mumbai
    1273294, // Delhi
    1277333, // Bangalore
    1269843, // Hyderabad
    1279233, // Ahmedabad
    1264527, // Chennai
    1275004, // Kolkata
    1259229, // Pune
    1269515, // Jaipur
    1255634, // Surat
    1264733, // Lucknow
    1267995, // Kanpur
    1262180, // Nagpur
    1269743, // Indore
    1255634, // Thane
    1275841, // Bhopal
    1253286, // Visakhapatnam
    1260086, // Patna
    1253573, // Vadodara
    1271308  // Ghaziabad
];

function unitToAPI(unit: Unit) {
    return unit === "C" ? "metric" : "imperial";
}

export async function fetchCurrentWeather(city: string, unit: Unit) {

    if (!city || city.trim() === '') {
        console.error('❌ No city provided!');
        throw new Error('City name is required');
    }

    let units = unitToAPI(unit);

    const url = `${baseUrl}weather?q=${city}&units=${units}&appid=${apiKey}`;
    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });

    if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    let data = await response.json();

    console.log('Fetch Weather Data Response:', data);



    return {
        city: data.city
    };
}

export async function fetchWeatherForcast(city: string, unit: Unit) {

    if (!city || city.trim() === '') {
        console.error('❌ No city provided!');
        throw new Error('City name is required');
    }

    let units = unitToAPI(unit);

    const url = `${baseUrl}forecast?q=${city}&units=${units}&appid=${apiKey}`;
    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });

    let weatherForecastData = await response.json();

    console.log('Fetch Weather Forcast Data Response:', weatherForecastData);

    return weatherForecastData;
}

// export async function fetchCityWeather() {
//     const units = unitToAPI(unit);

//     const idsString = topCities.join(',');

//     const url = `${baseUrl}weather?id=${idsString}&units=${units}&appid=${apiKey}`;
//     const response = await fetch(url, {
//         headers: {
//             'Authorization': `Bearer ${apiKey}`
//         }
//     });

//     let cityWeatherData = await response.json();


//     return cityWeatherData;
// }