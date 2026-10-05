import { getRuns } from '@/app/api/actions'
import RunSession from './RunSession'

export default async function RoadWorkList() {
    const runs = await getRuns()
    return (
        <section>
            <h2>Runs</h2>
            <ul>
                {runs.map((run) => (
                    <li key={run.id}>
                        <RunSession session={run} />
                    </li>
                ))}
            </ul>
        </section>
    )
}