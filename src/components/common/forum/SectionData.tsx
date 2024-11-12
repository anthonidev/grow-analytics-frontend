import React from "react";
import clsx from "clsx";

type Props = {
  number: string;
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
  state: "success" | "error" | "warning" | "info";
};

export const SectionData = ({
  title,
  number,
  children,
  state,
  description,
}: Props) => {
  return (
    <div
      className={clsx(
        "box_dashboard border-l-8 ",
        state === "info" ? "border-primary-400 " : " border-success-400 "
      )}
    >
      <div className="flex items-center space-x-5 rounded-r-xl  py-1 px-1">
        <span
          className={clsx(
            "rounded-r-md p-2 font-semibold text-xs text-gray-50",
            state === "info" ? "bg-primary-400 " : "bg-success-400"
          )}
        >
          {number}
        </span>
        <div className=" border-b-1 pr-40 pb-1">
          <p className="text-lg font-bold leading-6  text-default-900 ">
            {title}
          </p>
          <p className="text-xs  leading-3 text-default-700 ">{description}</p>
        </div>
      </div>
      <div className="mx-auto mt-5 ">{children}</div>
    </div>
  );
};
