import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import cssClasses from './MealItemForm.module.css'

export default function MealItemForm(props) {
    const [validAmount, setValidAmount] = useState(true)
    const amountInputRef = useRef()
    const submitHandler = (e) => {
        e.preventDefault()
        const enteredAmount = amountInputRef.current.value;
        const enteredNumber = Number(enteredAmount)
        console.log('this is EVEEENT', e)
        if (enteredAmount.trim().length === 0 || enteredNumber < 1 || enteredNumber > 5) {
            setValidAmount(false)
            return
        }
        props.onAddToCart(enteredNumber)
    }
    return (
        <form className={cssClasses.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button> Add</button>
            {!validAmount && <p>Not valid</p>}
        </form>
    )
}
