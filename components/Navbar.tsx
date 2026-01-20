"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <nav className="shadow border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800 dark:text-white">
                            Weather Forecast
                        </span>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="border-gray-300 dark:border-gray-800 py-2 px-2 rounded-full focus:outline-none border cursor-pointer transition-colors"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-800" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
