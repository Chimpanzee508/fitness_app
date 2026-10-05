'use client'
import { deleteWorkout } from "@/app/api/actions";

type Workout = {
    id: string;
    workout: string;
    sets: number;
    reps: number;
    weight: number;
    metric: string;
}

type Props = {
    workout: Workout;
}
export default function WorkoutSessions({ workout }: Props) {
    return (
        <section>
            <h2>{workout.workout}</h2>
            <hr />
            <p>sets: {workout.sets}, reps: {workout.reps}, weight: {workout.weight} {workout.metric}</p>
            <button onClick={() => {deleteWorkout(workout)}}>delete</button>
        </section>
    )
}