import { logWorkout } from '@/app/api/actions'

export default function WeightliftingForm() {
    
    return (
        <section>
            <form action={logWorkout}>
                <h1>Log Sheet</h1>

                <label htmlFor='workout'>workout: </label>
                <input 
                    type='text' name='workout' 
                    placeholder='workout' />

                <label htmlFor='sets'>sets: </label>
                <input type='number' name='sets'
                    placeholder='how many?' />

                <label htmlFor='reps'>reps: </label>
                <input type='number' name='reps'
                    placeholder='how many?' />
                
                <label htmlFor='weight'>weight: </label>
                <input type='number' name='weight'
                    placeholder='how much?' />

                <div>
                    <label htmlFor='lbs'>lbs: </label>
                    <input type='radio' id='lbs' name='metric' value='lbs' defaultChecked />
                    <label htmlFor='kg'>kg: </label>
                    <input type='radio' id='kg' name='metric' value='kg' />
                </div>

                <button type='submit'>log</button>
            </form>
        </section>
    )
}
