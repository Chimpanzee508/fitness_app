'use server'
import client from './db'
import { revalidatePath } from 'next/cache'


export async function logWorkout(formData: FormData) {
    const id = crypto.randomUUID()
    const workout = formData.get('workout') as string
    const sets = formData.get('sets') as string
    const reps = formData.get('reps') as string
    const weight = formData.get('weight') as string
    const metric = formData.get('metric') as string

    const session = {
        id,
        workout,
        sets,
        reps,
        weight,
        metric
    }

    try {
        const db = client.db('WorkoutApp')
        const collection = db.collection('WorkoutLogs')
        await collection.insertOne(session)
        console.log('Workout logged successfully:', session)
        revalidatePath('/')
    } catch (error) {
        console.error('Error logging workout:', error)
        throw new Error('Failed to log workout')
    }
}

export async function getWorkouts() {
    try {
        const db = client.db('WorkoutApp')
        const collection = db.collection('WorkoutLogs')
        const workouts = await collection.find().toArray()
        console.log('Fetched workouts successfully:', workouts)
        return workouts.map(workout => ({
            id: workout.id,
            workout: workout.workout,
            sets: workout.sets,
            reps: workout.reps,
            weight: workout.weight,
            metric: workout.metric
        }))
    } catch (error) {
        console.error('Error fetching workouts:', error)
        throw new Error('Failed to fetch workouts')
    }
}

export async function deleteWorkout(workout: {id: string, workout: string, sets: number, reps: number, weight: number, metric: string}) {
    try {
        const db = client.db('WorkoutApp')
        const collection = db.collection('WorkoutLogs')
        const result = await collection.deleteOne({ id: workout.id })
        if (result.deletedCount === 1) {
            console.log(`
                Workout: ${{workout}} deleted successfully.`
            )
            revalidatePath('/')
        } else {
            console.log(`No workout found.`)
        }
    } catch (error) {
        console.error('Error deleting workout:', error)
        throw new Error('Failed to delete workout')
    }
}

export async function logRun(formdata: FormData) {
    try {
        const id = crypto.randomUUID()
        const runtime = formdata.get('runtime') as string

        const runSession = {
            id,
            runtime
        }

        const db = client.db('WorkoutApp')
        const collection =db.collection('RunLogs')
        await collection.insertOne(runSession)
        console.log('Run logged successfully:', runSession)
        revalidatePath('/')
    } catch(error) {
        console.log('Error logging run:', error)
        throw new Error('Failed to log run')
    }
}

export async function getRuns() {
    try {
        const db = client.db('WorkoutApp')
        const collection = db.collection('RunLogs')
        const runs = await collection.find().toArray()
        console.log('Fetched runs successfully:', runs)
        return runs.map(run => ({
            id: run.id,
            runtime: run.runtime
        }))
    } catch(error) {
        console.log('Error fetching runs:', error)
        throw new Error('Failed to fetch runs')
    }
}

export async function deleteRun(id: string) {
    try {
        const db = client.db('WorkoutApp')
        const collection = db.collection('RunLogs')
        const result = await collection.deleteOne({id: id})
        console.log('Succesfully deleted run: ', result)
        revalidatePath('/')
    } catch(error) {
        console.log('Error deleting run:', error)
        throw new Error('Failed to delete run')
    }
}

export async function logBagwork(formdata: FormData) {
    try {
        const db = client.db('WorkoutApp')
        const collection = db.collection('BagworkLogs')
        const id = crypto.randomUUID()
        const bagworkSession = {
            id,
            session: formdata.get('workout') as string,
            time: formdata.get('time') as string,
            rounds: formdata.get('rounds') as string
        }
        await collection.insertOne(bagworkSession)
        console.log('Bagwork logged successfully:', bagworkSession)
        revalidatePath('/')
    } catch(err) {
        console.log('Error logging bagwork:', err)
        throw new Error('Failed to log bagwork')
    }
}

export async function getBagwork() {
    try {
        const db = client.db('WorkoutApp')
        const collection = db.collection('BagworkLogs')
        const bagworkSessions = await collection.find().toArray()
        console.log('Fetched bagwork successfully:', bagworkSessions)
        return bagworkSessions.map(session => ({
            id: session.id,
            session: session.session,
            time: session.time,
            rounds: session.rounds
        }))
    } catch(error) {
        console.log('Error fetching bagwork:', error)
        throw new Error('Failed to fetch bagwork')
    }
}

export async function deleteBagwork(id: string) {
    try {
        const db = client.db('WorkoutApp')
        const collection = db.collection('BagworkLogs')
        const result = await collection.deleteOne({id: id})
        console.log('Successfully deleted bagwork: ', result)
        revalidatePath('/')
    } catch(error) {
        console.log('Error deleting bagwork:', error)
        throw new Error('Failed to delete bagwork')
    }
}