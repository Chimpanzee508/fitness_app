import { getWorkouts } from "@/app/api/actions"

export default async function WeightliftingList() {

    const workouts = await getWorkouts()
    return (
        <section>
            <h2>Weightlifting List</h2>
            <hr />
            <ul>
                {workouts.map((workout) => (
                    <li key={workout.id}>
                        <h3>{workout.workout}</h3>
                        <hr />
                        <p>sets: {workout.sets}, reps: {workout.reps}, weight: {workout.weight}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}