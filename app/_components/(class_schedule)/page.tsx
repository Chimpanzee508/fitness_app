'use client'
import { useState } from 'react'
import Calendar from './calendar'

export default function ClassSchedule() {
    const [visible, setVisible] = useState(false)

    function setVisibility() {
        setVisible(!visible)
    }
    
    return (
        <section>
            <button onClick={setVisibility}>{visible ? 'Hide' : 'Class Schedule'}</button>
            {visible && <h1>Class Schedule</h1>}
            {visible && <Calendar />}
        </section>
    )
}