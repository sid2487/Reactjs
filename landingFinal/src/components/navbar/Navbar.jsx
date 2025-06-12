import React, { useState } from 'react'
import logo from "../../assets/logo-chanel-removebg-preview.png";
import svg1 from "../../assets/asset 4.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className="p-3 flex bg-white justify-between items-center fixed top-0 left-0 right-0 z-20 shadow-md">
      <div className="flex gap-2 items-center flex-1">
        <img className="object-cover max-w-12" src={logo} alt="" />
        <span className="text-lg font-medium">ToDesktop</span>
      </div>
      <ul className="hidden lg:flex gap-12">
        <li className="cursor-pointer font-medium hover:text-red-800">
          Pricing
        </li>
        <li className="cursor-pointer font-medium hover:text-red-800">Docs</li>
        <li className="cursor-pointer font-medium hover:text-red-800">
          Changelog
        </li>
        <li className="cursor-pointer font-medium hover:text-red-800">Blogs</li>
        <li className="cursor-pointer font-medium hover:text-red-800">Login</li>
      </ul>
      <div className="hidden lg:flex justify-end flex-1">
        <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600 cursor-pointer ">
          <span className="font-medium">Electron Developers</span>
          <FaLongArrowAltRight />
        </button>
      </div>

      {/* haburger icon for mobile */}
      <button className="p-2 lg:hidden" onClick={handleMenu}>
        {isOpen ? (
          <IoMdClose className="text-gray-600 text-2xl" />
        ) : (
          <CiMenuBurger className="text-gray-600 text-2xl" />
        )}
      </button>
      {/* // for mobile Navbar */}
      {isOpen && (
        <div className=" fixed z-10 lg:hidden bg-white inset-0 p-3">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2 items-center">
              <img className="object-cover max-w-12" src={logo} alt="" />
              <span className="text-lg font-medium">ToDesktop</span>
            </div>
            <IoMdClose className="text-2xl cursor-pointer" onClick={handleMenu}/>
          </div>

          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li className="cursor-pointer hover:text-red-800">Pricing</li>
            <li className="cursor-pointer hover:text-red-800">Docs</li>
            <li className="cursor-pointer hover:text-red-800">Changelog</li>
            <li className="cursor-pointer hover:text-red-800">Blogs</li>
            <li className="cursor-pointer hover:text-red-800">Login</li>
          </ul>

          <button className="flex gap-2 items-center border border-gray-400 px-4 py-2 rounded-lg hover:border-gray-600 mt-6 w-fit">
            <span>Electron Developers</span>
            <FaLongArrowAltRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar