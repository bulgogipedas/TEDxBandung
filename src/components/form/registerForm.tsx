"use client"
import { useFormData } from "@/hooks"
import { useRouter } from "next/navigation"
import { useState } from "react"

import * as zod from "zod"

export default function RegisterForm() {
  const route = useRouter()

  const [formState, setFormstate] = useState({
    loading: false,
    error: ''
  })

  const defaultValue = {
    email: '',
    job: ''
  }

  const schema = zod.object({
    email: zod.string().email().min(1, "email required"),
    job: zod.string().min(1, "job required")
  })

  const {
    formData,
    validationError,
    disabledButton,
    handleChangeFormData,
    handleBlurFormData,
  } = useFormData(defaultValue, schema)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormstate(prev => ({ ...prev, loading: true }))

    try {
      const res = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        setFormstate(prev => ({ ...prev, error: 'Something went wrong' }))
        return
      }

      setTimeout(() => {
        route.push('/auth/login')
      }, 1000);

    } finally {
      setFormstate(prev => ({ ...prev, loading: false }))
    }
  }

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSignup}>
        {formState.error.length > 0 && <span className="text-red-500">{formState.error}</span>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          className={`input input-primary ${validationError.error?.email?.length > 0 ? 'input-error' : ''}`}
          onBlur={handleBlurFormData}
          onChange={handleChangeFormData}
        />
        {
          validationError.error?.email?.length > 0 &&
          validationError.error?.email.map((err, i) => {
            return (
              <span className="text-red-500" key={i}>{err}</span>
            )
          })
        }
        <label>Job</label>
        <input
          type="text"
          name="job"
          className={`input input-primary ${validationError.error?.job?.length > 0 ? 'input-error' : ''}`}
          onBlur={handleBlurFormData}
          onChange={handleChangeFormData}
        />
        {
          validationError.error?.job?.length > 0 &&
          validationError.error?.job.map((err, i) => {
            return (
              <span className="text-red-500" key={i}>{err}</span>
            )
          })
        }
        <button data-loading={formState.loading} type="submit" className="btn btn-primary" disabled={disabledButton || formState.loading}>submit</button>
      </form>
      <p className="mt-2">Already have account? <a className="font-bold" href="/auth/login">Login</a></p>
    </>
  )
}
