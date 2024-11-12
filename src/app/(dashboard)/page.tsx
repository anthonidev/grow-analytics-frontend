"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { navigations } from "./components/MobileSidebar";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;
  if (!session) return null;

  return (
    <main className=" mx-auto max-w-7xl">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
        Modulos disponibles
      </h2>

      <ul className="grid grid-cols-2 gap-5 ">
        {navigations.map(({ href, icon: Icon, name }) => (
          <li
            key={href}
            className="border border-gray-200 rounded-md p-4 text-gray-900 dark:border-gray-700  dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Link href={href} className="flex gap-2 items-center">
              <Icon aria-hidden="true" className="h-6 w-6 shrink-0" />
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
