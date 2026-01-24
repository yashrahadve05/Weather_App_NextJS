"use client";


import { useWeatherContext } from "@/context/WeatherContext";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";


export default function SearchSection() {
    const router = useRouter();
    const { city, setCity, unit, setUnit } = useWeatherContext();
    
    const handleSearch = () => {
        /* handle search logic */
        router.push(`/city/${city}`);
    };

    const handleUnitChange = (unit: "C" | "F") => {
        setUnit(unit);  
    };

    return (
        <div className="w-full mx-auto dark:bg-gray-800 bg-white rounded-xl shadow-md p-4 sm:p-6 transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-3 ">
                <div className="w-full flex gap-2">
                    <div className="w-full">
                        <input
                            className="w-full h-11 pl-4 pr-4 dark:bg-gray-700 bg-gray-200 dark:text-white focus:outline-none dark:border-gray-600 border-gray-200 shadow-2xl rounded-lg"
                            type="text"
                            placeholder="Search for a city..."
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSearch();
                            }}
                        />
                    </div>
                    <button
                        className="w-full max-w-32 mt-4 h-11 sm:mt-0 px-4 mx-auto dark:bg-blue-600 bg-blue-300 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer "
                        onClick={() => {
                            handleSearch();
                        }}
                    >
                        <Search className="inline-block mr-2 mb-1" size={16} />
                        <span className="sm:inline hidden">Search</span>
                    </button>
                </div>

                <div className="flex gap-1 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
                    <button
                        className={`flex-1 h-9 lg:w-8 p-1 cursor-pointer rounded-lg ${
                            unit === "C"
                                ? "bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                                : " text-gray-800 dark:text-gray-200"
                        }`}
                        onClick={() => handleUnitChange("C")}
                    >
                        °C
                    </button>
                    <button
                        className={`flex-1 h-9 lg:w-8 p-1 cursor-pointer rounded-lg ${
                            unit === "F"
                                ? "bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                                : " text-gray-800 dark:text-gray-200"
                        }`}
                        onClick={() => handleUnitChange("F")}
                    >
                        °F
                    </button>
                </div>
            </div>
        </div>
    );
}
