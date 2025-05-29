import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section
        className="h-screen bg-cover "
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/64f9ea5dc178183f58cd4436/64faf71ed874220681ab4bef_landing-hero.jpg')",
        }}
      >
        <header>
          <div className="flex justify-around items-center">
            <h2 className="text-[#FFFFFF] text-4xl font-semibold m-6 p-6">
              BOUVARD STUDIO
            </h2>
            <div className="bg-[#FFFFFF40] rounded-[80px]">
              <ul className="flex justify-between gap-8 m-[14px] py-[6px] text-white font-semibold  ">
                <li>
                  <Link className="bg-white text-black px-8 py-4 rounded-4xl">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link className="hover:ring hover:ring-[#FFFFFF] hover:ring-opacity-20 rounded-full transition duration-200">ABOUT</Link>
                </li>
                <li>
                  <Link>WORKS</Link>
                </li>
                <li>
                  <Link>CAREERS</Link>
                </li>
                <li>
                  <Link>CONTACT</Link>
                </li>
              </ul>
            </div>
            <h4>
              Bouvar is a branding agency with +10 years of experience in
              branding based in Paris and Singapore
            </h4>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Hero;
