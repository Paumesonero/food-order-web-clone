import React from 'react'
import classes from './Header.module.css'
import mealsImg from '../../assets/meals.jpg'

export default function Header(props) {
    return (
        <>
            <header>
                <h1>Appetito</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={mealsImg} alt='food-background' />
            </div>
        </>
    )
}
