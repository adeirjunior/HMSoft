'use client';

import { Card } from ".";

export default function PricingCard() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card name="Budget" price={9} checks={3}/>
            <Card name="Standard" price={25} checks={5} teams={4} storage={50}/>
            <Card name="Professional" price={39} checks={7} teams={10} storage={100}/>
        </div>
    )
}