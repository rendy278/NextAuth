import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  // Definisikan link secara dinamis berdasarkan peran user
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Product",
      href: "/product",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
  ];

  if (session?.user.role === "admin") {
    links.push({
      name: "User",
      href: "/user",
    });
  }

  return (
    <nav className="bg-white border-200 border-b">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/">Ren NextAuth</Link>
        <div className="flex items-center gap-3">
          {session && (
            <ul className="hidden md:flex items-center gap-4 mr-5 font-semibold text-gray-600 hover:text-gray-800">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          )}
          {session && (
            <div className="flex gap-3 items-center">
              <div className="flex flex-col justify-center -space-y-1">
                <span className="font-semibold text-gray-500 text-right capitalize">
                  {session.user.name}
                </span>
                <span className="font-semibold text-gray-500 text-right capitalize">
                  {session.user.role}
                </span>
              </div>
              <button
                type="button"
                className="text-sm ring-2 bg-gray-100 rounded-full"
              >
                <Image
                  src={session?.user.image || "/avatar.svg"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="w-8 h-8 rounded-full object-fit"
                />
              </button>
            </div>
          )}
          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500"
              >
                Log Out
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
