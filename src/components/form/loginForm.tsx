"use client"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { useFormData } from "@/hooks"
import { loginSchema } from "@/schemas/auth/loginSchema"
import { signIn } from "next-auth/react"
import { useState } from "react"

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
    setValidationError
  } = useFormData(defaultValue)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormstate(prev => ({ ...prev, loading: true }))
    try {
      const isValid = validateLogin(formData)

      if (!isValid.success) {
        const error = isValid.error.flatten().fieldErrors
        setValidationError({ error })
      } else {
        setValidationError({ error: {} })
        await signIn('credentials', {
          ...formData,
          callbackUrl: DEFAULT_LOGIN_REDIRECT,
          redirect: false
        })
          .then((res) => {
            if (res?.error === "CredentialsSignin") {
              setFormstate(prev => ({ ...prev, error: 'Invalid email or password' }))
              return
            }

            setFormstate(prev => ({ ...prev, error: '' }))
            
            // reload page when login success
            setTimeout(() => {
              window.location.reload()
            }, 1000);

          }).catch((err) => {
            console.log("error : ", err);
            setFormstate(prev => ({ ...prev, error: err }))
          });
      }
    } catch (error) {
      console.error("tedx error : ", error);
    } finally {
      setTimeout(() => {
        setFormstate(prev => ({ ...prev, loading: false }))
      }, 1000);
    }
  }

  const validateLogin = (data: typeof formData) => {
    const isValid = loginSchema.safeParse(data)

    return isValid
  }

  return (
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
  )
}
