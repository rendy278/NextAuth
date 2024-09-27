"use client";
import { useFormStatus } from "react-dom";

export const RegistButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center hover:bg-blue-700 transition-colors"
    >
      {pending ? "Registering..." : "Register"}
    </button>
  );
};

export const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center hover:bg-blue-700 transition-colors"
    >
      {pending ? "Login..." : "Login"}
    </button>
  );
};
