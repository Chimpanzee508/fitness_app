'use client'
import { useState } from 'react'
import RoadWorkForm from './RoadWorkForm'

export default function RoadWork({children}: {children: React.ReactNode}) {
    const [visible, setVisible] = useState(false)

    function toggleVisibility() {
        setVisible(!visible)
    }

    return (
        <section>
            <button onClick={toggleVisibility}>{visible ? 'Hide' : 'Road Work'}</button>
            {visible && <h1>Road Work</h1>}
            {visible && <RoadWorkForm />}
            {visible && children}
        </section>
    )
}