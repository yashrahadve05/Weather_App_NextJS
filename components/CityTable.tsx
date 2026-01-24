import React from "react";

export default function CityTable() {
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
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">231</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
