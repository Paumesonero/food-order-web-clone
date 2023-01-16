import React, { useContext } from 'react'
import cssClasses from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

export default function Cart(props) {
    const { onClose } = props
    const cartCtx = useContext(CartContext)

    const totalAmount = cartCtx.totalAmount.toFixed(2)
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        console.log('the id:', id)
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }
    return (
        <Modal onClose={onClose}>
            <ul className={cssClasses['cart-items']}>
                {cartCtx.items.map((el) => {
                    return (
                        <CartItem
                            key={el.id}
                            name={el.name}
                            amount={el.amount}
                            price={el.price}
                            onRemove={cartItemRemoveHandler.bind(null, el.id)}
                            onAdd={cartItemAddHandler.bind(null, el)}
                        />
                    )
                })}
            </ul>
            <div className={cssClasses.total}>
                <span>Total Amount</span>
                <span>$ {totalAmount}</span>
            </div>
            <div className={cssClasses.actions}>
                <button className={cssClasses['button--alt']} onClick={onClose}>Close</button>
                {hasItems && <button className={cssClasses.button}>Order</button>}

            </div>
        </Modal>
    )
}
