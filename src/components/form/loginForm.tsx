"use client";
import { useForm } from "react-hook-form";

import { login } from "@/actions/login";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isLoading },
    trigger,
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async () => {
    try {
      const res = await login(getValues());

      if (res?.error) {
        setError("root", { message: res?.error as string });
        return;
      }

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      /** TODO: handle error on submit */
      console.error(error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleLogin)}
      >
        {errors.root && (
          <span className="text-red-500">{errors.root.message}</span>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="email"
          className={`input ${errors.email ? "input-error" : "input-primary"}`}
          {...register("email", {
            required: {
              value: true,
              message: "email is required",
            },
            onBlur: () => trigger("email"),
            onChange: () => trigger("email"),
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          className={`input ${errors.password ? "input-error" : "input-primary"}`}
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
            onBlur: () => trigger("password"),
            onChange: () => trigger("password"),
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <button
          data-loading={isLoading}
          type="submit"
          className="btn btn-primary btn-base-black"
          disabled={Object.keys(errors).length > 0 || isLoading}
        >
          submit
        </button>
      </form>
      <p className="mt-2">
        Don&apos;t have account yet?{" "}
        <a className="font-bold" href="/auth/register">
          Register
        </a>
      </p>
    </>
  );
}
