import React, { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="max-w-[1200px] w-full mx-auto bg-white mt-6 rounded-4xl text-black px-4">
      <div className="container mx-auto flex justify-between items-center px-4 py-8">
        <div className="font-bold text-xl">Logo</div>

        {/* desktop menue */}
        <ul className=" hidden md:flex gap-6">
          <li className="font-bold cursor-pointer hover:text-gray-800">Home</li>
          <li className="font-bold cursor-pointer hover:text-gray-800">
            Contactus
          </li>
          <li className="font-bold cursor-pointer hover:text-gray-800">Book</li>
          <li>
            <a className="bg-blue-600 my-2 mx-4 py-4 px-8 rounded-3xl cursor-pointer hover:bg-blue-700 text-white  ">
              Register
            </a>
          </li>
        </ul>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="w-8 h-8 cursor-pointer" />
          ) : (
            <HiMenu className="w-8 h-8 cursor-pointer" />
          )}
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-white space-y-4 py-4 z-50 relative">
          <li className="font-bold cursor-pointer hover:text-gray-800">Home</li>
          <li className="font-bold cursor-pointer hover:text-gray-800">
            Contactus
          </li>
          <li className="font-bold cursor-pointer hover:text-gray-800">Book</li>
          <li>
            <a className="bg-blue-600 my-2 mx-4 py-4 px-8 rounded-3xl cursor-pointer hover:bg-blue-700 text-white  ">
              Register
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar