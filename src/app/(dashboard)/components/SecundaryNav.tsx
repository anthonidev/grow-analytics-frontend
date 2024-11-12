"use client";

import { useSession } from "next-auth/react";
import { createElement } from "react";
import { ReceptionIcon, SystemIcon } from "@/components/icons/CommonIcons";

const roleDisplayNames: {
  [key: string]: string;
} = {
  admin: "Administrador",
  employee: "Empleado",
};

const roleIcons: {
  [key: string]: (props: React.ComponentProps<"svg">) => JSX.Element;
} = {
  admin: SystemIcon,
  employee: ReceptionIcon,
};

export const SecundaryNav = () => {
  const { data: session, status } = useSession();

  return (
    <nav className=" flex flex-col items-center rounded-lg bg-primary-50 px-2 py-1 transition-all">
      {status === "loading" ? (
        <div>
          <p className="p-4 text-center text-sm font-medium text-gray-800 dark:text-gray-300">
            ...
          </p>
        </div>
      ) : (
        status === "authenticated" && (
          <ul
            role="list"
            className="flex  flex-col items-center justify-center space-y-2"
          >
            <li className="flex flex-col items-center  rounded-md bg-white p-2 font-serif uppercase dark:bg-da text-gray-800 dark:text-gray-300">
              {roleIcons[session.user.tipo_usuario]
                ? createElement(roleIcons[session.user.tipo_usuario], {
                    className: "h-10 w-10 ",
                  })
                : null}
              <p className=" text-sm font-bold  ">
                {roleDisplayNames[session.user.tipo_usuario] || "Unknown Role"}
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <p className="font-medium capitalize text-gray-800 dark:text-gray-300">
                {session.user.usuario}
              </p>
            </li>
          </ul>
        )
      )}
    </nav>
  );
};
