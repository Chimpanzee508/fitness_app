'use client'
import { deleteRun } from "@/app/api/actions";

type Run = {
    id: string;
    runtime: string;
}

type Props = {
    session: Run
}


export default function RunSession({ session }: Props) {
    return (
        <section>
            <p>Runtime: {session.runtime}</p>
            <button onClick={() => deleteRun(session.id)}>delete</button>
        </section>
    )
}