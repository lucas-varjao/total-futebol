"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logoCampoCheioInclinado from "@/public/images/logo-campo-cheio-inclinado-verde.svg";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex items-center py-2 px-4">
      <div className="flex items-center w-auto cursor-pointer">
        <Image
          className="h-8 w-auto"
          src={logoCampoCheioInclinado}
          alt="Logo"
        ></Image>
        <span className="text-lg hidden lg:block font-bold ml-2 text-gray-900 dark:text-verde-50">
          TOTAL FUTEBOL
        </span>
        <span className="text-lg block lg:hidden font-bold ml-2 text-gray-900 dark:text-verde-50">
          TF
        </span>
      </div>
    </div>
  );
};

export default Logo;
