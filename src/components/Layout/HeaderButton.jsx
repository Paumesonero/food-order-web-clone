import React from 'react'
import cssClasses from './HeaderButton.module.css'
import CartIcon from '../Cart/CartIcon'

export default function HeaderButton(props) {
    return (
        <button className={cssClasses.button}>
            <span className={cssClasses.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={cssClasses.badge}>3</span>
        </button>
    )
}
