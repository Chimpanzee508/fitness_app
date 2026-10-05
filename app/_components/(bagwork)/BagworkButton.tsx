'use client'
import { useState } from 'react'
import BagworkForm from './BagworkForm'


export default function BagworkButton({children}: {children: React.ReactNode}) {
    const [visible, setVisible] = useState(false)

    function toggle_bagwork_button() {
        setVisible(!visible)
    }

    return (
        <section>
            <button onClick={toggle_bagwork_button}>
                {visible ? 'hide' : 'Bag Work'}
            </button>
            {visible && <BagworkForm />}
            {visible && children}
        </section>
    )
}