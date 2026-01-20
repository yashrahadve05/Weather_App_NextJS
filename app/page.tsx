"use client";

import { useState } from "react";

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
    


    return (
        <>
            <div>City table</div>
        </>
    );
}
