import { signIn } from "@/auth";
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io5";

export const GoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
      className=""
    >
      <button
        type="submit"
        className="flex items-center gap-2 py-2.5 rounded-lg uppercase 
      text-white font-medium text-sm bg-blue-500 w-full justify-center hover:bg-blue-600 transition-colors"
      >
        <IoLogoGoogle size={24} />
        Sign In with Google
      </button>
    </form>
  );
};

export const GithubButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-center gap-2 py-2.5 rounded-lg uppercase text-white font-medium text-sm bg-gray-500 w-full"
      >
        <IoLogoGithub size={24} />
        Sign In with Github
      </button>
    </form>
  );
};
