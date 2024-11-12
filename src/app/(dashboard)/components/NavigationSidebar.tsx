"use client";
// import { getNavigation } from "@/lib/navigation";

import { useSession } from "next-auth/react";
import { navigations } from "./MobileSidebar";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }
export const NavigationSidebar = () => {
  const { data: session, status } = useSession();
  const path = usePathname();

  return (
    <nav>
      {status === "authenticated" && (
        <ul role="list" className="-mx-2 space-y-1 ">
          {navigations.map(({ href, icon: Icon, name }, index) => (
            <li key={index}>
              <Link
                className={clsx(
                  path == href
                    ? "bg-indigo-700 text-white"
                    : "text-gray-500 hover:bg-indigo-700 hover:text-white",
                  "group flex cursor-pointer gap-x-3 rounded-md px-8 py-2 text-sm leading-6 hover:bg-indigo-700 hover:text-white"
                )}
                href={href}
              >
                <Icon
                  className={clsx(
                    path == href
                      ? "text-white"
                      : "text-gray-500 group-hover:text-white",
                    "h-6 w-6 shrink-0"
                  )}
                  aria-hidden="true"
                />
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
