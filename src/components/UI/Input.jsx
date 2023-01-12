import React from 'react'
import cssClasses from './Input.module.css'
export default function Input(props) {
    const { label, input } = props
    return (
        <div className={cssClasses.input}>
            <label htmlFor={input.id}>{label}</label>
            <input {...input} />
        </div>
    )
}
