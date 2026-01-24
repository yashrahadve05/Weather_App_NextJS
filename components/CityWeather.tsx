'use client';

import { useWeatherContext } from "@/context/WeatherContext";
import { useWeather } from "@/hooks/useWeather";
import { useEffect } from "react";


export default function CityWeather({city}: {city: string}) {
    const { setCity } = useWeatherContext();
    const weatherData = useWeather();

    useEffect(() => {
        if(city) {
            setCity(city);
        }
    }, [city, setCity]);

    console.log('CityWeather Component Weather Data:', weatherData);
    
    return (

        <>
            <div>CityWeather: {city}</div>
            <div>{JSON.stringify(weatherData)}</div>
        </>
    );
}
