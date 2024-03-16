"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {};

export default function NavBar({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex lg:px-16 fixed md:static z-20 w-full md:px-8 px-4 bg-palete-4 py-4 md:py-8 font-ubuntu">
      <nav className="w-full relative ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/image/logo-asc.png"
              width={32}
              height={32}
              alt="ASC Property Logo"
              className="w-16"
            />
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" > */}
            <span className="self-center text-2xl whitespace-nowrap text-palete-1 font-bold hidden sm:flex">
              ASC
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-x-2">
            <button
              type="button"
              className="text-white bg-palete-1 font-medium rounded-lg lg:px-8 px-4 py-2 text-center hover:text-palete-1 hover:bg-white hover:shadow-md hover:shadow-palete-1/50 duration-200"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              onClick={() => setOpen(!open)}
              type="button"
              className="inline-flex items-center w-10 h-10 justify-center text-sm text-palete-1 rounded-lg lg:hidden hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="items-center flex-1 justify-between hidden w-full lg:flex font-medium px-8">
            <ul className="flex items-center gap-x-8">
              <li>
                <a
                  href="#home"
                  className="block py-2 px-4 text-palete-1 hover:text-palete-3 duration-200"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-palete-1 hover:text-palete-3 duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="block py-2 px-3 text-palete-1 hover:text-palete-3 duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-palete-1 hover:text-palete-3 duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={
            open
              ? "absolute lg:hidden bg-white rounded-xl p-4 w-[150px] z-20 shadow-md top-16 right-2"
              : "hidden"
          }
        >
          <ul className="flex items-center gap-y-2 text-left flex-col">
            <li>
              <a
                href="#home"
                className="block py-2 px-4 text-palete-1 hover:text-palete-3 duration-200"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-4 text-palete-1 hover:text-palete-3 duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block py-2 px-4 text-palete-1 hover:text-palete-3 duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-4 text-palete-1 hover:text-palete-3 duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
