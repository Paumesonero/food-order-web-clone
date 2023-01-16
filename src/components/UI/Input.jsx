import React from 'react'
import cssClasses from './Input.module.css'
const Input = React.forwardRef((props, ref) => {
    const { label, input } = props
    return (
        <div className={cssClasses.input}>
            <label htmlFor={input.id}>{label}</label>
            <input ref={ref} {...input} />
        </div>
    )
})

export default Input
