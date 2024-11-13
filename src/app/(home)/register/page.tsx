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
      <div className="flex flex-col justify-center items-center">
        <h2 className="pt-5 text-center text-3xl font-bold text-gray-800 dark:text-gray-100">
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
