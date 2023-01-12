import React from 'react'
import Input from '../../UI/Input'
import cssClasses from './MealItemForm.module.css'

export default function MealItemForm(props) {
    return (
        <form className={cssClasses.form}>
            <Input
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
        </form>
    )
}