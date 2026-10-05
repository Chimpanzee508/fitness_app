import { getBagwork } from '@/app/api/actions'
import Session from './Session'

export default async function BagworkList() {
    const session = await getBagwork()
 return (
    <section>
        <h2>Bagwork List</h2>
        <ul>
            {session.map((bagwork) => (
                <Session key={bagwork.id} bagwork={bagwork} />
            ))}
        </ul>
    </section>
 )
}