import { getWorkouts } from "@/app/api/actions"
import WorkoutSessions from "./WorkoutSessions"

export default async function WeightliftingList() {
    const workouts = await getWorkouts()
    return (
        <section>
            <h2>Weightlifting List</h2>
            <ul>
                {workouts.map((workout) => (
                    <li key={workout.id}>
                        <WorkoutSessions workout={workout} />
                    </li>
                ))}
            </ul>
        </section>
    )
}