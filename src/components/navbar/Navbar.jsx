"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const menus = [
  { label: " หน้าแรก", pathname: "/" },
  { label: " สมัครสอน", pathname: "/register-tutor" },
  { label: " สมัครเรียน", pathname: "/register-student" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-6 flex justify-between md:items-center md:px-12 xl:px-36">
      <div className="w-32">
        <Link href="/">
          <Image src="/logo-main.svg" width={200} height={200} alt="" />
        </Link>
      </div>

      <div className="hidden md:flex text-xl mt-4 md:mt-0">
        {menus.map((menu, index) => (
          <Link
            key={`menu-${index + 1}`}
            href={menu.pathname}
            className={`${
              pathname === menu.pathname ? "text-primary" : ""
            } p-4`}
          >
            {menu.label}
          </Link>
        ))}
      </div>

      {/* Overlay menu for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 text-right text-xl transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed inset-y-0 right-0 w-2/3 bg-white p-5 z-30 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={toggleMenu} className="mb-8 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <ul className="space-y-8">
            <li>
              {menus.map((menu, index) => (
                <Link
                  key={`menu-${index + 1}`}
                  href={menu.pathname}
                  className="block text-secondary hover:text-primary"
                  onClick={toggleMenu}
                >
                  {menu.label}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="relative w-6 h-6 focus:outline-none"
        >
          {/* Hamburger icon bars */}
          <div
            className={`block absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 top-2.5" : "top-0"
            }`}
          />
          <div
            className={`block absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "top-2.5"
            }`}
          />
          <div
            className={`block absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 top-2.5" : "top-5"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
