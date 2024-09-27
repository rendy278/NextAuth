import FormLogin from "@/components/auth/form-login";
import React from "react";

const page = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Sign In account</h1>
      <FormLogin />
    </div>
  );
};

export default page;
