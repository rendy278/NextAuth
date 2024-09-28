import FormRegister from "@/components/auth/form-register";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};
const page = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
      <FormRegister />
    </div>
  );
};

export default page;
