import FormLogin from "@/components/auth/form-login";
import React from "react";
import { Metadata } from "next";
import { GithubButton, GoogleButton } from "@/components/auth/social-button";

export const metadata: Metadata = {
  title: "Sign In",
};
const page = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Sign In account</h1>
      <FormLogin />
      <div
        className="my-4 flex items-center justify-center before:flex-1 before:border-t 
      before:border-gray-600 after:flex-1 after:border-t 
      after:border-gray-600"
      >
        <p className="mx-4 mb-0 text-center font-semibold text-gray-600">Or</p>
      </div>
      <GoogleButton />
      <GithubButton />
    </div>
  );
};

export default page;
