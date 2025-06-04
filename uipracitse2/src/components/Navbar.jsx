import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-7">
        <div className="font-bold text-xl">LOGO</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          <li className="font-bold cursor-pointer hover:text-gray-200">Home</li>
          <li className="font-bold cursor-pointer hover:text-gray-200">
            Contact Us
          </li>
          <li className="font-bold cursor-pointer hover:text-gray-200">
            Plans
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-md font-semibold hover:brightness-110 transition duration-300"
            >
              Register
            </a>
          </li>
        </ul>

        {/* Hamburger icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="w-8 h-8 cursor-pointer" />
          ) : (
            <HiMenu className="w-8 h-8 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-[#0F172A]  space-y-4 py-4 z-50 relative">
          <li className="font-bold cursor-pointer hover:text-gray-200">Home</li>
          <li className="font-bold cursor-pointer hover:text-gray-200">
            Contact Us
          </li>
          <li className="font-bold cursor-pointer hover:text-gray-200">
            Plans
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-md font-semibold hover:brightness-110 transition duration-300"
            >
              Register
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
