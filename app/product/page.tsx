import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
};
const page = () => {
  return (
    <div className="bg-slate-50 min-h-screen ">
      <div className="max-w-screen-md mx-auto py-10">
        <h1>Product List</h1>
      </div>
    </div>
  );
};

export default page;
