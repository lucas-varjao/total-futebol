"use client";
import Avatar from "./../Avatar";
import { IoChevronDownCircle, IoChevronUpCircle } from "react-icons/io5";

const UserMenu = () => {
  return (
    <div className="flex flex-1 justify-end items-center ml-auto py-2">
      <div className="flex flex-row transition hover:shadow-lg dark:hover:border-verde-500 dark:text-verde-50 items-center gap-2 cursor-pointer border-[1px] dark:border-verde-800 dark:hover:text-verde-500 dark:bg-verde-950 rounded shadow-md py-1 px-2">
        <Avatar></Avatar>
        <div className="flex flex-col text-xs font-medium">
          <span className="hidden md:block">Logado Silva Santos</span>
          {/* <span>emailusuario@email.com</span> */}
        </div>
        <IoChevronDownCircle className="" size={18}></IoChevronDownCircle>
      </div>
    </div>
  );
};

export default UserMenu;
