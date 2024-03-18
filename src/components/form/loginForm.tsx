"use client"
import { login } from "@/actions/login"
import { useFormData } from "@/hooks"

export default function LoginForm() {
  const defaultValue = {
    email: '',
    password: ''
  }

  const {
    formData,
    validationError,
    disabledButton,
    handleChangeFormData,
    handleBlurFormData
  } = useFormData(defaultValue)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await login(formData as typeof defaultValue)

      if (res?.error) {
        throw res
      }

    } catch (error) {
      console.error("tedx error : ", error);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label>Email</label>
      <input
        type="email"
        name="email"
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
      <button type="submit" className="btn btn-primary" disabled={disabledButton}>button</button>
    </form>
  )
}
