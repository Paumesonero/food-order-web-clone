import React, { useContext } from 'react'
import cssClasses from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

export default function MealItem(props) {
    const { title, description, price, id } = props
    const cartCtx = useContext(CartContext)
    const addToCartHandler = ((amount) => {
        cartCtx.addItem({
            id: id,
            name: title,
            amount: amount,
            price: price
        })
    })

    return (
        <li className={cssClasses.meal}>
            <div>
                <h3>{title}</h3>
                <div className={cssClasses.description}>{description}</div>
                <div className={cssClasses.price}>${price.toFixed(2)}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}
