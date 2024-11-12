import { LogoIcon } from "@/components/icons/LogoIcon";
import React from "react";
import {
  MobileSidebar,
  Navbar,
  NavigationSidebar,
  SecundaryNav,
} from "@/app/(dashboard)/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MobileSidebar />

      <div className="hidden py-5  lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col ">
        <div className="flex grow flex-col items-center  rounded-r-3xl gap-y-5 overflow-y-auto border-r bg-white px-2 pb-4 dark:border-r-osc-200 dark:bg-da ">
          <div className="flex  shrink-0 items-center ">
            <LogoIcon />
          </div>
          <nav className="flex flex-1 flex-col ">
            <ul role="list" className="flex flex-1 flex-col gap-y-7 ">
              <li>
                <NavigationSidebar />
              </li>

              <li className="mt-auto">
                <SecundaryNav />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-cla dark:bg-da-100 lg:pl-72 lg:pr-5 lg:pt-5">
        <Navbar />

        <main
          className="mx-auto max-w-7xl px-5 py-8 lg:px-0"
          style={{ minHeight: "calc(100vh - 6.3rem)" }}
        >
          {children}
        </main>
      </div>
    </>
  );
}
