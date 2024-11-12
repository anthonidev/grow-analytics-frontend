"use client";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { Dialog, Transition } from "@headlessui/react";
import {
  CircleStackIcon,
  TableCellsIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";

import { useAppDispatch, useAppSelector } from "@/context/hooks";
import { toggleSidebar } from "@/context/slice/configSlice";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileSidebar = () => {
  const { status } = useSession();
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.config);
  const handleToggleSidebar = () => dispatch(toggleSidebar());

  const path = usePathname();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={handleToggleSidebar}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={handleToggleSidebar}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-200 px-6 pb-4 dark:bg-da">
                <div className="flex shrink-0 justify-center items-center border-b border-gray-300 pb-2">
                  <LogoIcon />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1"></ul>{" "}
                      {status === "authenticated" &&
                        navigations.map(({ href, icon: Icon, name }, index) => (
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
                    </li>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export const navigations = [
  {
    href: "/table1",
    icon: TableCellsIcon,
    name: "Tabla 1",
    role: ["employee", "admin"],
  },
  {
    href: "/table2",
    icon: CircleStackIcon,
    name: "Tabla 2",
    role: ["admin"],
  },
];
