import { logBagwork } from '@/app/api/actions'

export default function BagworkForm() {
    return (
        <form action={logBagwork}>
            <h1>Bag Work</h1>
            <label htmlFor='workout'>Session</label>
            <input type='text' id='workout' name='workout' />
            <label htmlFor='time'>Time</label>
            <input type='number' id='time' name='time' />
            <label htmlFor='rounds'>Rounds</label>
            <input type='number' id='rounds' name='rounds' />
            <button type='submit'>Submit</button>
        </form>
    )
}