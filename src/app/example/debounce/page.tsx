"use client"

import { useDebouncedValue } from "@/hooks"
import { useEffect, useState } from "react"

export default function Debounce() {
    const [searchValue, setSearchValue] = useState("")
    const [data, setData] = useState<{ title: string }[]>([])
    const searchFunction = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${debouncedValue}`, {
            method: 'get'
        })

        if (!res.ok)
            return

        setData(await res.json())
    }

    const { debouncedValue, isLoading } = useDebouncedValue(searchValue, 1000)

    useEffect(() => {
        console.log("debouncedvalue : ", debouncedValue);
        if(debouncedValue.length > 0) searchFunction()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])

    return (
        <main>
            <p>debounce will start fetching if you stop typing</p>
            <form>
                <input
                    type="text"
                    className="input input-primary"
                    placeholder="type: sunt"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </form>
            <div className="posts">
                <ul className={`${isLoading ? "opacity-30" : ""}`}>
                    {
                        data.length > 0 ?
                        data.map((post, index) => {
                            return(
                                <li key={index}>{index + 1}. {post.title}</li>
                            )
                        })
                        :
                        <p>data not found</p>
                    }
                </ul>
                <button data-loading={isLoading} className="btn btn-primary">button</button>
            </div>
        </main>
    )
}
