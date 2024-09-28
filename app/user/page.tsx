import React from "react";
import { Metadata } from "next";
import UserTable from "@/components/auth/user-table";

export const metadata: Metadata = {
  title: "UserList",
};
const page = () => {
  return (
    <div className="bg-slate-50 min-h-screen ">
      <div className="max-w-screen-md mx-auto py-10">
        <h1>User List</h1>
        <UserTable />
      </div>
    </div>
  );
};

export default page;
