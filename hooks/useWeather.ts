'use client';

import { useWeatherContext } from '@/context/WeatherContext';
import { fetchCurrentWeather, fetchWeatherForcast } from '@/lib/weather';

import { useEffect, useState } from 'react';




export function useWeather() {

    const { setLoading, city, unit } = useWeatherContext();

    const [weatherData, setWeatherData] = useState<any>(null);
    const [forecastData, setForecastData] = useState<any>(null);
    const [cityWeatherData, setCityWeatherData] = useState<any>(null);

    const fetchWeatherData = async () => {
        try {
            setLoading(true);

            const data = await fetchCurrentWeather(city, unit);
            const forcastData = await fetchWeatherForcast(city, unit);

            setWeatherData(data);
            setForecastData(forcastData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        } finally {
            setLoading(false);
        }

    }

    // const fetchCityWeatherData = async () => {
    //     try {
    //         setLoading(true);
            
    //         const cityWeatherData = await fetchCityWeather();
    //         setCityWeatherData(cityWeatherData);


    //     } catch (error) {
    //         console.error('Error fetching city weather data:', error);
    //         throw error;
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    useEffect(() => {
        fetchWeatherData();
    }, [city, unit, setLoading]);

    // useEffect(() => {
    //     fetchCityWeatherData();
    // }, [unit, setLoading]);

    return {
        dateTime: weatherData?.dt || 0,
        city: weatherData?.name || '',
        temperature: weatherData?.main?.temp || 0,
        feels_like: weatherData?.main?.feels_like || 0,
        description: weatherData?.weather?.[0]?.description || '',
        weatherIcon: weatherData?.weather?.[0]?.icon || '',
        humidity: weatherData?.main?.humidity || 0,
        pressure: weatherData?.main?.pressure || 0,

        windSpeed: weatherData?.wind?.speed || 0,
        windDirection: weatherData?.wind?.deg || 0,

        sunriseTime: weatherData?.sys?.sunrise || 0,
        sunsetTime: weatherData?.sys?.sunset || 0,

        lat: weatherData?.coord?.lat || 0,
        lon: weatherData?.coord?.lon || 0,

        // 5 day / 8 hour forecast data
        forecast: forecastData,

        // Top cities weather data
        cityWeatherData: cityWeatherData,
    }
}