"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface weatherContextType {
    loading: boolean;
    setLoading: (loading: boolean) => void;

    city: string;
    setCity: (city: string) => void;

    unit: "C" | "F";
    setUnit: (unit: "C" | "F") => void;
}

const WeatherContext = createContext<weatherContextType | null>(null);

export default function WeatherProvider({ children }: { children: ReactNode }) {
    const [city, setCity] = useState("Bhopal");
    const [unit, setUnit] = useState<"C" | "F">("C");
    const [loading, setLoading] = useState(false);

    return (
        <>
            <WeatherContext.Provider
                value={{
                    loading,
                    setLoading,
                    city,
                    setCity,
                    unit,
                    setUnit,
                }}
            >
                {children}
            </WeatherContext.Provider>
        </>
    );
}

export function useWeatherContext() {
    const context = useContext(WeatherContext);

    if (!context) {
        throw new Error(
            "useWeatherContext must be used within a WeatherProvider",
        );
    }

    return context;
}
