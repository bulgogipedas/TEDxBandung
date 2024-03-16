"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function RegisterForm() {
    const [formData, setFormdata] = useState({
        email: '',
        password: ''
    })

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const res = await signIn('credentials', {
              email: "test@gmail.com",
              password: "1234",
            })
    
            console.log(res);
            
          } catch (error) {
            console.error(error);
          }
    }
    
    return (
        <form onSubmit={handleSignup}>
            <label>Email</label>
            <input type="email" onChange={(e) => { setFormdata({ ...formData, email: e.target.value }) }} />
            <label>Password</label>
            <input type="password" onChange={(e) => { setFormdata({ ...formData, password: e.target.value }) }} />
            <button type="submit" className="btn btn-primary">button</button>
        </form>
    )
}
