import Link from "next/link";
import { Metadata } from "next";
import SignUp from "./components/Signup";
export const metadata: Metadata = {
  title: "Grow analytics - Sign Up",
  description: "Prueba técnica para Grow analytics",
};

export default function RegisterPage() {
  return (
    <>
      <header className="flex flex-col items-center justify-center  space-y-2 rounded-b-[45px] bg-indigo-900 p-5 py-10 text-white dark:bg-osc-400">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="max-w-sm text-center text-xs">
          Sign up to access your account
        </p>
      </header>

      <div className="flex flex-col justify-center items-center">
        <h2 className="pt-10 text-center text-3xl font-bold text-gray-800 ">
          Sign Up
        </h2>

        <Link
          href="/login"
          className="text-center text-sm  text-blue-500  hover:text-blue-700 border-b border-blue-500 hover:border-blue-700"
        >
          login
        </Link>
      </div>
      <SignUp />
    </>
  );
}
