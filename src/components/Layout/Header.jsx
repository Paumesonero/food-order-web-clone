import React from 'react'
import cssClasses from './Header.module.css'
import mealsImg from '../../assets/meals.jpg'
import HeaderButton from './HeaderButton'

export default function Header(props) {
    const { onShowCart } = props
    return (
        <>
            <header className={cssClasses.header}>
                <h1>Appetito</h1>
                <HeaderButton onClick={onShowCart} />
            </header>
            <div className={cssClasses.mainImage}>
                <img src={mealsImg} alt='food-background' />
            </div>
        </>
    )
}
