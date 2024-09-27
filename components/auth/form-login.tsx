"use client";
import { useState } from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signInCredentials } from "@/lib/actions";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginButton } from "../Button";

const FormLogin = () => {
  const [state, formAction] = useFormState(signInCredentials, null);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form action={formAction} className="space-y-6">
      {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-50"
          role="alert"
        >
          {state?.message}
        </div>
      ) : null}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          className="bg-gray-50 border border-gray-300
        text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2 ">
            {state?.error?.email}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="*****"
            className="bg-gray-50 border border-gray-300
            text-gray-900 rounded-lg w-full p-2.5"
          />
          <div
            className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2 ">
            {state?.error?.password}
          </span>
        </div>
      </div>
      <LoginButton />
      <p className="text-sm font-light text-gray-600 flex items-center gap-2">
        Don&apos;t have an account yet?
        <Link
          href="/register"
          className="text-blue-600 font-bold hover:underline"
        >
          Register Here
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
