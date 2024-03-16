"use client"
import { login } from "@/actions/login"
import { useState } from "react"

export default function LoginForm() {
    const [formData, setFormdata] = useState({
        email: '',
        password: ''
    })

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const res = await login(formData)
    
            console.log(res);
            
          } catch (error) {
            console.error(error);
          }
    }
    
    return (
        <form onSubmit={handleLogin}>
            <label>Email</label>
            <input type="email" onChange={(e) => { setFormdata({ ...formData, email: e.target.value }) }} />
            <label>Password</label>
            <input type="password" onChange={(e) => { setFormdata({ ...formData, password: e.target.value }) }} />
            <button type="submit" className="btn btn-primary">button</button>
        </form>
    )
}
