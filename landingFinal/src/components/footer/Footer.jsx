import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo-chanel-removebg-preview.png";
import asset54 from "../../assets/asset 54.svg"

const Footer = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-10">
      <div className="rounded-lg border lg:border-none lg:bg-gray-50 bg-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
        <a className="font-light" href="">
          Documentaiton
        </a>
        <div className="flex gap-6 text-lg">
          <a className="text-gray-600 hover:text-gray-900" href="">
            <CiTwitter />
          </a>
          <a className="text-gray-600 hover:text-gray-900" href="">
            <FaGithub />
          </a>
        </div>
        <a className='flex gap-2 items-center flex-1' href="">
          <img className="object-cover max-w-12 max-h-12" src={logo} alt="" />
          <span className="text-lg font-medium">ToDesktop</span>
        </a>
      </div>

      <div className='flex flex-col gap-6 items-center justify-center my-12'>
        <div className='flex gap-2 items-center'>
          <img className='w-4 h-4' src={asset54} alt="" />
          <p>A Y combinator comapany</p>
        </div>
        <p className="text-sm text-gray-400">
          © 2024 ToDesktop, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer