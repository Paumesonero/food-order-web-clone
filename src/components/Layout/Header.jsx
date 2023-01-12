import React from 'react'
import cssClasses from './Header.module.css'
import mealsImg from '../../assets/meals.jpg'
import HeaderButton from './HeaderButton'

export default function Header(props) {
    return (
        <>
            <header className={cssClasses.header}>
                <h1>Appetito</h1>
                <HeaderButton />
            </header>
            <div className={cssClasses.mainImage}>
                <img src={mealsImg} alt='food-background' />
            </div>
        </>
    )
}
