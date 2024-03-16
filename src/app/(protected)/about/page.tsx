"use client"

import { signOut, useSession } from "next-auth/react"

export default function About(){
    const session = useSession()
    const handleLogout = async () => {
        await signOut()
    }

    return (
        <main>
            <p>about {JSON.stringify(session)}</p>
            <button onClick={handleLogout}>logout</button>
        </main>
    )
}
