import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen overflow-x-hidden"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/64f9ea5dc178183f58cd4436/64faf71ed874220681ab4bef_landing-hero.jpg')",
      }}
    >
      <header className="pt-6  w-full z-50">
        <div className="flex justify-between items-start px-10 relative">
          <h2 className="text-[#FFFFFF] text-4xl font-semibold m-2 p-1">
            <Link>BOUVARD STUDIO</Link>
          </h2>
          <div className=" fixed top-6 left-1/2 -translate-x-1/2 bg-[#FFFFFF40] rounded-[100px]">
            <ul className="flex justify-between gap-8 m-2 py-3 px-3  text-white font-semibold  ">
              <li>
                <Link className="bg-white text-black px-8 py-4 rounded-4xl">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100">ABOUT</Link>
              </li>
              <li>
                <Link className="hover:text-gray-100">WORKS</Link>
              </li>
              <li>
                <Link className="hover:text-gray-100">CAREERS</Link>
              </li>
              <li>
                <Link className="hover:text-gray-100">CONTACT</Link>
              </li>
            </ul>
          </div>
          <h4 className="mt-2 p-1 text-[#FFFFFF] text-xl font-semibold text-right">
            BOUVAR IS A BRANDING AGENCY <br />
            <span>WITH +10 YEARS OF EXPERIENCE IN</span>
            <br />
            BRANDING BASED IN PARIS AND <br />
            <span className="block">Singapore</span>
          </h4>
        </div>
      </header>

      <h1 className="text-[#FFFFFF] text-[10rem] p-14 font-bold pt-180 w-full tracking-wider scale-x-120 origin-left">
        YOUR BRAND <br /> <span className="block mb-0">ON STERIODS</span>
      </h1>
    </section>
  );
};

export default Hero;
