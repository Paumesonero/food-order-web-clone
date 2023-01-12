import React from 'react'
import cssClasses from './Card.module.css'

export default function Card(props) {
    return (
        <div className={cssClasses.card}>{props.children}</div>
    )
}
