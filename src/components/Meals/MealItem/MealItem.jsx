import React from 'react'
import cssClasses from './MealItem.module.css'
import MealItemForm from './MealItemForm'

export default function MealItem(props) {
    const { title, description, price } = props


    return (
        <li className={cssClasses.meal}>
            <div>
                <h3>{title}</h3>
                <div className={cssClasses.description}>{description}</div>
                <div className={cssClasses.price}>${price.toFixed(2)}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}
