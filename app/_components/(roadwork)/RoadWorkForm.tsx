import { logRun } from "@/app/api/actions"

export default function RoadWorkForm() {
    return (
        <form action={logRun}>
            <label htmlFor='runtime'>Log Time & Distance:</label>
            <input type='text' id='runtime' name='runtime' />
            <button type='submit'>log</button>
        </form>
    )
}