"use client"
import { useFormData } from "@/hooks"
import { useState } from "react"
import { login } from "@/actions/login"
import { loginSchema } from "@/schemas/auth/loginSchema"

export default function LoginForm() {
  const [formState, setFormstate] = useState({
    loading: false,
    error: ''
  })

  const defaultValue = {
    email: '',
    password: ''
  }

  const {
    formData,
    validationError,
    disabledButton,
    handleChangeFormData,
    handleBlurFormData,
  } = useFormData(defaultValue, loginSchema)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormstate(prev => ({ ...prev, loading: true }))
    try {
      const res = await login(formData as { email: string, password: string })

      if (res?.error) {
        setFormstate(prev => ({ ...prev, error: res.error as string }))
        return
      }

      setTimeout(() => {
        window.location.reload()
      }, 1000);
    } finally {
      setTimeout(() => {
        setFormstate(prev => ({ ...prev, loading: false }))
      }, 1000);
    }
  }

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
        <label>Password</label>
        <input
          type="password"
          name="password"
          className={`input input-primary ${validationError.error?.password?.length > 0 ? 'input-error' : ''}`}
          onBlur={handleBlurFormData}
          onChange={handleChangeFormData}
        />
        {
          validationError.error?.password?.length > 0 &&
          validationError.error?.password.map((err, i) => {
            return (
              <span className="text-red-500" key={i}>{err}</span>
            )
          })
        }
        <button data-loading={formState.loading} type="submit" className="btn btn-primary" disabled={disabledButton || formState.loading}>submit</button>
      </form>
      <p className="mt-2">Don&apos;t have account yet? <a className="font-bold" href="/auth/register">Register</a></p>
    </>
  )
}
