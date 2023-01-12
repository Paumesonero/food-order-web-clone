import React from 'react'
import cssClasses from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';

const dummyMeals = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.89,
    },
];

export default function AvailableMeals() {
    return (
        <section className={cssClasses.meals}>
            <Card>
                <ul>
                    {dummyMeals.map((el) => {
                        return (
                            <MealItem
                                key={el.id}
                                title={el.name}
                                description={el.description}
                                price={el.price}
                            />
                        )
                    })}
                </ul>
            </Card>
        </section>
    )
}
