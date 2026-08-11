'use server'
import client from './db'
import { revalidatePath } from 'next/cache'


export async function logWorkout(formData: FormData) {
    const id = crypto.randomUUID() // Generate a unique ID for the workout session
    const workout = formData.get('workout') as string
    const sets = formData.get('sets') as string
    const reps = formData.get('reps') as string
    const weight = formData.get('weight') as string

    const session = {
        id,
        workout,
        sets,
        reps,
        weight
    }

    try {
        const db = await client.db('WorkoutApp')
        const collection = await db.collection('Logs')

        await collection.insertOne(session)
        console.log('Workout logged successfully:', session)
        revalidatePath('/') // Revalidate the weightlifting page to reflect the new workout
    } catch (error) {
        console.error('Error logging workout:', error)
        throw new Error('Failed to log workout')
    }
}

export async function getWorkouts() {
    try {
        const db = await client.db('WorkoutApp')
        const collection = await db.collection('Logs')
        const workouts = await collection.find().toArray()
        console.log('Fetched workouts successfully:', workouts)
        return workouts.map(workout => ({
            id: workout.id,
            workout: workout.workout,
            sets: workout.sets,
            reps: workout.reps,
            weight: workout.weight
        }))
    } catch (error) {
        console.error('Error fetching workouts:', error)
        throw new Error('Failed to fetch workouts')
    }
}