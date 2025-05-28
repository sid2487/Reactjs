import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full px-4 py-3 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        {/* Left Logo + Nav Items */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <img
            className="w-24 cursor-pointer transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-100 rounded"
            src="https://www.svgrepo.com/show/354487/unbounce.svg"
            alt="logo"
          />

          {/* Hamburger Icon */}
          <button onClick={toggleMobileMenu} className="md:hidden text-2xl">
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {["Products", "Solutions", "Pricing", "Resources", "Contact"].map(
            (item) => (
              <li
                key={item}
                onMouseEnter={() =>
                  item === "Products" && setShowDropDown(true)
                }
                onMouseLeave={() =>
                  item === "Products" && setShowDropDown(false)
                }
                className="hover:text-gray-700 cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  {item} <FiChevronDown className="text-sm mt-[1px]" />
                </div>
              </li>
            )
          )}
        </ul>

        {/* Desktop Right Side */}
        <ul className="hidden md:flex items-center gap-4 font-semibold">
          <li className="cursor-pointer text-2xl">
            <CiSearch />
          </li>
          <li>
            <button className="text-blue-700 hover:text-white hover:bg-blue-700 border rounded-xl m-2 p-2 transition-all duration-300">
              Log in
            </button>
          </li>
          <li>
            <button className="bg-blue-700 text-white hover:text-blue-700 hover:bg-white hover:border transition-all duration-300 m-4 p-3 rounded-2xl">
              Start Building for free
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm px-2">
          {["Products", "Solutions", "Pricing", "Resources", "Contact"].map(
            (item) => (
              <div key={item} className="border-b pb-2">
                <div className="flex items-center gap-1">
                  {item} <FiChevronDown className="text-sm mt-[1px]" />
                </div>
              </div>
            )
          )}
          <div className="flex flex-col gap-2 pt-2 font-semibold">
            <button className="text-blue-700 border p-2 rounded-xl hover:bg-blue-700 hover:text-white">
              Log in
            </button>
            <button className="bg-blue-700 text-white p-2 rounded-2xl hover:bg-white hover:text-blue-700 hover:border">
              Start Building for free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
