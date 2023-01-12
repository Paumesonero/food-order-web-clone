import React from 'react'
import cssClasses from './Cart.module.css'
import Modal from '../UI/Modal'

export default function Cart(props) {
    const cartItems = [{ id: 'c1', name: 'butifarra', amount: 2, price: 5.99 }]
    const { onClose } = props
    return (
        <Modal onClose={onClose}>
            <ul className={cssClasses['cart-items']}>
                {cartItems.map((el) => {
                    return (
                        <li>{el.name}</li>
                    )
                })}
            </ul>
            <div className={cssClasses.total}>
                <span>Total Amount</span>
                <span>5,99</span>
            </div>
            <div className={cssClasses.actions}>
                <button className={cssClasses['button--alt']} onClick={onClose}>Close</button>
                <button className={cssClasses.button}>Order</button>

            </div>
        </Modal>
    )
}
