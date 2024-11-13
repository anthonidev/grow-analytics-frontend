import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      params.delete("page");
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="grid w-full grid-cols-2 items-center gap-2 lg:grid-cols-4">
      <div className="col-span-4">
        <Input
          className="w-full sm:max-w-[100%]"
          prefix={<MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />}
          size="large"
          onChange={(e) => {
            router.push(
              `${pathname}?${createQueryString("search", e.target.value)}`
            );
          }}
          placeholder="Buscar por nombre o apellido"
        />
      </div>
    </div>
  );
};
