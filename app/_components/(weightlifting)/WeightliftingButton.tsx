'use client'
import '@/app/globals.css'
import { useState } from 'react'
import WeightliftingForm from './WeightliftingForm'

export default function WeightliftingButton({
    children
}: {
    children : React.ReactNode
}) {
    const [visible, setVisible] = useState(false)

    function toggle_weightlifting_button() {
        setVisible(!visible)
    }
    
    return (
        <section>
            <button onClick={toggle_weightlifting_button}>
                {visible ? 'hide' : 'Weight Lifting'}
            </button>
            {visible && <WeightliftingForm />}
            {visible && children}
        </section>
    )
}