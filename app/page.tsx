"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useTheme } from "next-themes";
import SearchSection from "@/components/SearchSection";

export default function Home() {
    const [city, setCity] = useState("");
    const [unit, setUnit] = useState<"C" | "F">("F");

    const onCityChange = (city: string) => {
        setCity(city);
    };

    const handleSearch = () => {
        /* handle search logic */
    };

    const handleUnitChange = (unit: "C" | "F") => {
        setUnit(unit);
    };

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <div className="dark:bg-background bg-background min-h-screen transition-colors duration-300">
                <Navbar theme={theme} toggleTheme={toggleTheme} />

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                    <SearchSection
                        city={city}
                        setCity={setCity}
                        handleSearch={handleSearch}
                        unit={unit}
                        setUnit={setUnit}
                        onCityChange={onCityChange}
                        handleUnitChange={handleUnitChange}
                        // isLoading={isLoading}
                    />
                </main>
            </div>
        </>
    );
}
