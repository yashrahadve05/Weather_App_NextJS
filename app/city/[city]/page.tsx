"use client";

import CityWeather from "@/components/CityWeather";
import { useWeatherContext } from "@/context/WeatherContext";
import { use, useEffect, useMemo } from "react";

export default function CityPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {

    const { setCity } = useWeatherContext();

    // Unwrap the params Promise
    const resolvedParams = use(params);

    // Decode the city name
    const city = useMemo(() => {
        return decodeURIComponent(resolvedParams?.city || "");
    }, [resolvedParams?.city]);

    useEffect(() => {
        setCity(city);
    }, [city, setCity]);

    return <CityWeather city={city} />;
}
