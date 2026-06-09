import { useState } from 'react'

export default function Weightlifting_Form() {
    const [workout, setWorkout] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')

    function handleRepChange(e: React.ChangeEvent<HTMLInputElement>) {
        setReps(e.target.value)
    }

    function handleWorkoutInput(e: React.ChangeEvent<HTMLInputElement>) {
        setWorkout(e.target.value)
    }

    function handleSetChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSets(e.target.value)
    }

    function handleWeightChange(e: React.ChangeEvent<HTMLInputElement>) {
        setWeight(e.target.value)
    }

    function handleLog(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        alert('logged')
    }

    return (
        <section>
            <form>
                <h1>Log Sheet</h1>
                <hr />

                <label htmlFor='workout'>workout: </label>
                <input onChange={handleWorkoutInput}
                    type='text' name='workout' 
                    placeholder='workout' value={workout} />

                <label htmlFor='sets'>sets: </label>
                <input type='number' name='sets'
                    value={sets} onChange={handleSetChange}
                    placeholder='how many?' />

                <label htmlFor='reps'>reps: </label>
                <input type='number' placeholder='how many?'
                        value={reps} onChange={handleRepChange} />
                
                <label htmlFor='weight'>weight: </label>
                <input type='number' placeholder='how much?'
                        value={weight} onChange={handleWeightChange} />

                <button onClick={handleLog}>log</button>
            </form>
        </section>
    )
}
