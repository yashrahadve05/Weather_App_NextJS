import { useWeatherContext } from "@/context/WeatherContext";
import React, { use } from "react";

export default function CityTable() {

    const {unit} = useWeatherContext();

    return (
        <>
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-gray-300 dark:border-slate-700 mt-4 rounded-xl">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-md text-body bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-slate-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                City Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Temperature
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Condition
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Humidity
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Wind Speed
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-neutral-primary border-gray-300 dark:border-slate-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                            >
                                Bhopal
                            </th>
                            <td className="px-6 py-4">29 <span>°{unit}</span></td>
                            <td className="px-6 py-4">Coud</td>
                            <td className="px-6 py-4">60<span>%</span></td>
                            <td className="px-6 py-4">20 <span>km/h</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
