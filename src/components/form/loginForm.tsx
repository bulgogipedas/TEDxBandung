"use client"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { useFormData } from "@/hooks"
import { loginSchema } from "@/schemas/auth/loginSchema"
import { signIn } from "next-auth/react"

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
    handleBlurFormData,
    setValidationError
  } = useFormData(defaultValue)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
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
          .then(() => {
            // reload page when login success
            setTimeout(() => {
              window.location.reload()
            }, 1000);
          }).catch((err) => {
            console.error(err);
          });
      }
    } catch (error) {
      console.error("tedx error : ", error);
    }
  }

  const validateLogin = (data: typeof formData) => {
    const isValid = loginSchema.safeParse(data)

    return isValid
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
