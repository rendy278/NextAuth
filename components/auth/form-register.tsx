"use client";
import { useState } from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signUpCredentials } from "@/lib/actions";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import { RegistButton } from "../Button";

const FormRegister = () => {
  const [state, formAction] = useFormState(signUpCredentials, null);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
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
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-gray-50 border border-gray-300
        text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2 ">
            {state?.error?.name}
          </span>
        </div>
      </div>
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
            type={passwordVisible ? "text" : "password"} // Toggle between text and password
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
      <div>
        <label
          htmlFor="Confirmpassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={confirmPasswordVisible ? "text" : "password"} // Toggle between text and password for confirm password
            name="Confirmpassword"
            placeholder="*****"
            className="bg-gray-50 border border-gray-300
            text-gray-900 rounded-lg w-full p-2.5"
          />
          <div
            className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          >
            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2 ">
            {state?.error?.Confirmpassword}
          </span>
        </div>
      </div>
      <RegistButton />
      <p className="text-sm font-light text-gray-600 flex items-center gap-2">
        Already have account?
        <Link href="/login" className="text-blue-600 font-bold hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
