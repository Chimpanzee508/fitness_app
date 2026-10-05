'use client'

import { deleteBagwork } from "@/app/api/actions"

type BagworkSession = {
    id: string;
    session: string;
    rounds: number;
    time: number;
}

type Props = {
    bagwork: BagworkSession;
}

export default function Session({bagwork}: Props) {
    return (
        <section>
            <p>Bag Work: {bagwork.session}</p>
            <p>Rounds: {bagwork.rounds}</p>
            <p>Time: {bagwork.time}</p>
            <button onClick={() => deleteBagwork(bagwork.id)}>delete</button>
        </section>
    )
}