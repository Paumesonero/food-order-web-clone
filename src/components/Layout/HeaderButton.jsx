import React, { useContext, useEffect, useState } from 'react'
import cssClasses from './HeaderButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

export default function HeaderButton(props) {
    const { onClick } = props
    const [btnHighlight, setBtnHighlight] = useState(false)
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((curr, present) => {
        return curr + present.amount
    }, 0)
    useEffect(() => {
        setBtnHighlight(true)
    }, [])
    const btnClasses = `${cssClasses.button} ${btnHighlight ? cssClasses.bump : ''}`;
    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={cssClasses.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={cssClasses.badge}>{numberOfCartItems}</span>
        </button>
    )
}
