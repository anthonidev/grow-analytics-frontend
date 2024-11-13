import { ThemeSwitcher } from "@/components/common";
import Link from "next/link";

export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="flex  flex-col lg:flex-row ">
      <main className="flex p-4  h-screen min-h-screen  w-full flex-col  items-center  justify-center space-y-2 bg-indigo-100  bg-points dark:bg-osc lg:w-1/2 ">
        <ThemeSwitcher />

        <section className="mx-4 max-w-lg w-full  bg-white overflow-hidden rounded-xl  shadow-2xl dark:bg-osc-200">
          {children}
          <p className="text-xs text-center text-gray-500">or login with </p>
          <div className="flex justify-center space-x-5  p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="bg-blue-200 p-1 rounded-full hover:bg-blue-300 cursor-pointer"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              className="bg-red-200 p-1 rounded-full hover:bg-red-300 cursor-pointer"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              className="bg-yellow-200 p-1 rounded-full hover:bg-yellow-300 cursor-pointer"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
            </svg>
          </div>
        </section>
      </main>
      <div className="relative hidden w-full items-center   justify-center bg-indigo-900 bg-points bg-cover bg-center bg-no-repeat dark:bg-osc-200 lg:flex lg:w-1/2">
        <h1 className="px-20 font-serif text-7xl font-bold  text-white">
          GROW ANALYTICS
        </h1>
        <div className="absolute bottom-5 right-5 text-xs text-gray-100">
          <span>by </span>
          <Link
            href="https://github.com/anthonidev"
            className="font-bold text-white hover:underline"
          >
            Anthoni Portocarrero
          </Link>
        </div>
      </div>
    </div>
  );
}
