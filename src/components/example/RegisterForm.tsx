"use client"
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    /**
     * This component is a form for user registration. It uses React Hook
     * Form for handling form state and validation. The `register` function
     * is used to register a new input, `handleSubmit` is for handling form
     * submission, `trigger` is for triggering validation, and `formState`
     * is for getting the validation error.
     */
    const { 
        register,
        handleSubmit,
        trigger,
        watch,
        formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    /** use watch to get the value of the input */
    const watchedValue = watch()

    const onSubmit = () => {
        console.log("submitted")
        alert(
            `form submitted successfully!! ${JSON.stringify(watchedValue)}`
        )
        /* your next action goes here */
    }
    return ( 
        <form onSubmit={handleSubmit(onSubmit)} className="form flex flex-col w-1/2">
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                id="email" 
                className={`input my-3 ${errors.email ? "input-error" : "input-primary"}`}
                placeholder="email"
                {...register("email", {
                    required: {
                        value: true,
                        message: "email is required"
                    },
                    minLength: {
                        value: 10,
                        message: "email must be at least 10 characters"
                    },
                    onBlur: () => trigger("email"),
                    onChange: () => trigger("email")
                })}
            />
            {errors.email && <span className="text-red-400 mb-3">{errors.email.message}</span>}
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                id="password"
                className={`input my-3 ${errors.password ? "input-error" : "input-primary"}`}
                placeholder="password"
                {...register("password", { 
                    required: {
                        value: true,
                        message: "password is required"
                    },
                    minLength: {
                        value: 8,
                        message: "email must be at least 8 characters"
                    },
                    onBlur: () => trigger("password"),
                    onChange: () => trigger("password")
                })}
            />
            {
                errors.password && 
                    <span className="text-red-400 mb-3">{errors.password.message}</span>
            }
            <button 
                disabled={Object.keys(errors).length > 0 || isSubmitting}
                type="submit"
                className="btn btn-primary btn-base-black">
                Submit
            </button>
            <p className="mt-10 mb-3 font-semibold">watched value</p>
            <pre>
                {JSON.stringify(watchedValue, null, 2)}
            </pre>
        </form>
     );
}
 
export default RegisterForm;
