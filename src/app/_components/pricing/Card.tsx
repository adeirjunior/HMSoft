'use client';

import { pricingCardChecks } from '@/utils/pricingCardChecks';
import { Card } from 'flowbite-react';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'

type PricingCardType = {
    name: string;
    price: number;
    checks: number;
    teams?: number;
    storage?: number;
}

export default function PricingCard({ name, price, checks, teams, storage }: PricingCardType) {

    const checksData = pricingCardChecks(teams, storage)

    return (
        <Card>
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                {name} plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">
                    $
                </span>
                <span className="text-5xl font-extrabold tracking-tight">
                    {price}
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    /month
                </span>
            </div>
            <ul className="my-7 space-y-5">
                {checksData.map((check, index) => {
                    const isChecked = index + 1 <= checks
                    return (
                        <li key={index} className={`flex space-x-3 ${!isChecked && "line-through"}`}>
                            <IconContext.Provider value={{ className: isChecked ? "text-cyan-600" : "opacity-50" }}>
                                <BsFillCheckCircleFill />
                            </IconContext.Provider>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                {check.name}
                            </span>
                        </li>
                    )
                }
                )}
            </ul>
            <button
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                type="button"
            >
                <p>
                    Choose plan
                </p>
            </button>
        </Card>
    )
}


