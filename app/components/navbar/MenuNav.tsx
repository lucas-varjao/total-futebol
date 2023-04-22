"use client";

import { Menu, Transition, Switch } from "@headlessui/react";
import { HiHome } from "react-icons/hi";
import {
  IoChevronDownCircle,
  IoChevronUpCircle,
  IoMenuSharp,
} from "react-icons/io5";

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

const MenuNav = () => {
  return (
    <div className="py-2 rounded-full flex flex-1 justify-start mr-auto">
      <div className="flex flex-row text-gray-500 dark:text-verde-50  justify-between items-center gap-2">
        {/* Página inicial */}
        <div className="block md:hidden cursor-pointer border-[1px] dark:border-verde-800 dark:hover:border-verde-500 dark:hover:text-verde-500 transition duration-300 rounded py-2 px-2 items-center justify-center">
          <IoMenuSharp size={30}></IoMenuSharp>
        </div>
        <div className="text-sm hidden md:block font-semibold transition">
          <a href="/" className="">
            <div className="flex flex-row gap-2 border-[1px] dark:border-verde-800 dark:hover:border-verde-500 dark:hover:text-verde-500 transition duration-300 rounded py-2 px-4 items-center justify-center">
              {/* <HiHome size={18}></HiHome> */}
              Inicio
            </div>
          </a>
        </div>
        {/* Times */}
        <div className="text-sm hidden md:block font-semibold">
          <Menu as={"div"} className={"relative inline-block text-right"}>
            <Menu.Button className={"focus:outline-none"}>
              <div className="flex flex-row gap-2 border-[1px] dark:border-verde-800 dark:hover:border-verde-500 dark:hover:text-verde-500 transition duration-300 rounded py-2 px-4 items-center justify-center">
                Times
                <IoChevronDownCircle size={18}></IoChevronDownCircle>
              </div>
            </Menu.Button>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={
                  "absolute left-0 mt-2 w-56 origin-top-left rounded-md shadow-lg bg-white dark:bg-verde-850 dark:text-verde-50 divide-y divide-gray-100 dark:divide-gray-100 focus:outline-none"
                }
              >
                <div className="py-1 px-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active
                            ? "bg-gray-100  text-gray-900 dark:bg-verde-800 dark:text-verde-50"
                            : "text-verde-50",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Time 1
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active
                            ? "bg-gray-100  text-gray-900 dark:bg-verde-800 dark:text-verde-50"
                            : "text-verde-50",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Time 2
                      </a>
                    )}
                  </Menu.Item>
                  {/* Adicione mais times aqui */}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Campeonatos */}

        <div className="text-sm hidden md:block font-semibold ">
          <Menu as={"div"} className={"relative inline-block text-right"}>
            <Menu.Button className={"focus:outline-none"}>
              <div className="flex flex-row gap-2 border-[1px] dark:border-verde-800 dark:hover:border-verde-500 dark:hover:text-verde-500 transition duration-300 rounded py-2 px-4 items-center justify-center">
                Campeonatos
                <IoChevronDownCircle size={18}></IoChevronDownCircle>
              </div>
            </Menu.Button>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={
                  "absolute left-0 mt-2 w-56 origin-top-left rounded-md shadow-lg bg-white dark:bg-verde-850 dark:text-verde-50 divide-y divide-gray-100 dark:divide-gray-100 focus:outline-none"
                }
              >
                <div className="py-1 px-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active
                            ? "bg-gray-100  text-gray-900 dark:bg-verde-800 dark:text-verde-50"
                            : "text-verde-50",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Campeonato 1
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active
                            ? "bg-gray-100  text-gray-900 dark:bg-verde-800 dark:text-verde-50"
                            : "text-verde-50",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Campeonato 2
                      </a>
                    )}
                  </Menu.Item>
                  {/* Adicione mais campeonatos aqui */}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
