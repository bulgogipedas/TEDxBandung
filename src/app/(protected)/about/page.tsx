import { auth } from "@/auth"

export default async function About(){
    const session = await auth()

    return (
        <main>
            <p>about {JSON.stringify(session)}</p>
        </main>
    )
}
