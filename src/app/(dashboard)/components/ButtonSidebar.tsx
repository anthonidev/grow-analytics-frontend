"use client";
import { useAppDispatch } from "@/context/hooks";
import { toggleSidebar } from "@/context/slice/configSlice";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";

const ButtonSidebar = () => {
  const dispatch = useAppDispatch();
  const handleToggleSidebar = () => dispatch(toggleSidebar());

  return (
    <button
      type="button"
      className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      onClick={handleToggleSidebar}
    >
      <span className="sr-only">Open sidebar</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default ButtonSidebar;
