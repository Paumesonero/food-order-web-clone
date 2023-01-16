import React, { useContext } from 'react'
import cssClasses from './HeaderButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

export default function HeaderButton(props) {
    const { onClick } = props
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((curr, present) => {
        return curr + present.amount
    }, 0)
    return (
        <button className={cssClasses.button} onClick={onClick}>
            <span className={cssClasses.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={cssClasses.badge}>{numberOfCartItems}</span>
        </button>
    )
}
