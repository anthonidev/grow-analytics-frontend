import Image from "next/image";

export const LogoIcon = () => (
  <Image
    className="h-20 w-20 rounded-full object-cover border-2 border-whit mt-2"
    src="/logo.jpeg"
    alt="Logo"
    width={400}
    height={400}
  />
);
