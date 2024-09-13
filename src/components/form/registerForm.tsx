"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { register as registerAction } from "@/actions/register";
export default function RegisterForm() {
  const route = useRouter();

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    clearErrors,
    setError,
    formState: { errors, isLoading },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      job: "",
    },
  });

  const handleSignup = async () => {
    try {
      const res = await registerAction(getValues());

      if (res.error) {
        console.log(res);
        setError("root", {
          message: (res!.error as string) || "Something went wrong",
        });

        setTimeout(() => {
          clearErrors("root");
        }, 2000);
        return;
      }

      setTimeout(() => {
        route.push("/auth/login");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleSignup)}
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
            minLength: {
              value: 10,
              message: "email must be at least 10 characters",
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
            minLength: {
              value: 8,
              message: "password must be at least 8 characters",
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
          className="btn btn-primary btn-brand"
          disabled={Object.keys(errors).length > 0 || isLoading}
        >
          submit
        </button>
      </form>
      <p className="mt-2">
        Already have account?{" "}
        <a className="font-bold" href="/auth/login">
          Login
        </a>
      </p>
    </>
  );
}
