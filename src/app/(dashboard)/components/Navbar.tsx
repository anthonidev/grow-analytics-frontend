import ButtonSidebar from "./ButtonSidebar";
import UserDrop from "./UserDrop";

import { ThemeSwitcher } from "@/components/common";
export const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 rounded-3xl  bg-white px-4 shadow-sm dark:bg-da sm:gap-x-6 sm:px-6 lg:px-8">
      <ButtonSidebar />
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <p className="flex-colz-40 flex h-full w-full items-center justify-center space-x-2   px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none dark:text-gray-200 ">
          <span className="text-lg font-semibold">Dashboard</span>
        </p>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            aria-hidden="true"
          />
          <div className="hidden lg:block">
            <ThemeSwitcher />
          </div>
          <UserDrop />
        </div>
      </div>
    </div>
  );
};
