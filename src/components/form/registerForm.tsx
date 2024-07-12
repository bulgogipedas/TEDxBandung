"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useFormData } from "@/hooks";
import { registerSchema } from "@/schemas/auth/registerSchema";

export default function RegisterForm() {
  const route = useRouter();

  const [formState, setFormstate] = useState({
    loading: false,
    error: "",
  });

  const defaultValue = {
    email: "",
    job: "",
  };

  const {
    formData,
    validationError,
    disabledButton,
    handleChangeFormData,
    handleBlurFormData,
  } = useFormData(defaultValue, registerSchema);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormstate((prev) => ({ ...prev, loading: true }));

    try {
      const res = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setFormstate((prev) => ({ ...prev, error: "Something went wrong" }));
        return;
      }

      setTimeout(() => {
        route.push("/auth/login");
      }, 1000);
    } finally {
      setFormstate((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSignup}>
        {formState.error.length > 0 && (
          <span className="text-red-500">{formState.error}</span>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className={`input input-primary ${validationError.error?.email?.length > 0 ? "input-error" : ""}`}
          onBlur={handleBlurFormData}
          onChange={handleChangeFormData}
        />
        {validationError.error?.email?.length > 0 &&
          validationError.error?.email.map((err, i) => {
            return (
              <span className="text-red-500" key={i}>
                {err}
              </span>
            );
          })}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className={`input input-primary ${validationError.error?.password?.length > 0 ? "input-error" : ""}`}
          onBlur={handleBlurFormData}
          onChange={handleChangeFormData}
        />
        {validationError.error?.password?.length > 0 &&
          validationError.error?.password.map((err, i) => {
            return (
              <span className="text-red-500" key={i}>
                {err}
              </span>
            );
          })}
        <button
          data-loading={formState.loading}
          type="submit"
          className="btn btn-primary"
          disabled={disabledButton || formState.loading}
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
