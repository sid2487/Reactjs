import React, { useRef, useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa";
import { FaHandBackFist } from "react-icons/fa6";
import { IoLaptopOutline } from "react-icons/io5";
import assets2 from "../../assets/asset 2.svg"
import asset0 from "../../assets/asset 0.png";



const Hero = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  // to decide how much to shift initially
  const initialTranslateLTR = -48 * 4; // -192
  const initialTranslateRTL = 36 * 4; // 144

  // custom animation engine
  const setupIntersectionObserver = (element, isLTR, speed) => {
    // How element should move on scroll
    const scrollHandler = () => {
      const translateX =
        (window.innerHeight - element.getBoundingClientRect().top) * speed;
      const totalTranslate = isLTR
        ? translateX + initialTranslateLTR
        : -(translateX + initialTranslateRTL);
      element.style.transform = `translateX(${totalTranslate}px)`;
    };

    // Browser feature, logic decides behavior
    // IntersectionObserver tells you when an element enters/leaves the screen.
    const intersectionCallback = (entries) => {
      const isIntersecting = entries[0].isIntersecting;
      if (isIntersecting) {
        document.addEventListener("scroll", scrollHandler);
      } else {
        document.removeEventListener("scroll", scrollHandler);
      }
    };

    const observer = new IntersectionObserver(intersectionCallback);
    observer.observe(element);
  };

  useEffect(() => {
    if (line1Ref.current)
      setupIntersectionObserver(line1Ref.current, true, 0.15);
    if (line2Ref.current)
      setupIntersectionObserver(line2Ref.current, false, 0.15);
    if (line3Ref.current)
      setupIntersectionObserver(line3Ref.current, true, 0.15);
  }, []);
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
      {/* hero-container */}
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl">
        <div className="flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group">
          <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
          <p className="font-medium text-yellow-600">
            v0.21.1:{" "}
            <span className="text-yellow-800">Find-in-page bug fixes</span>
          </p>
          <FaArrowRight className="text-yellow-600 group-hover:translate-x-1 transition duration-300 " />
        </div>

        {/* hero-feature */}
        <div className="hidden sm:flex gap-8 my-6">
          <div className="flex justify-center gap-2 items-center text-gray-500">
            <FaRegFileCode className="text-sm" />
            <p>Code Optional</p>
          </div>
          <div className="flex justify-center gap-2 items-center text-gray-500">
            <FaHandBackFist className="text-sm" />
            <p>Drag & drop builder</p>
          </div>
          <div className="flex justify-center gap-2 items-center text-gray-500">
            <IoLaptopOutline className="text-sm" />
            <p>Windows, Mac, Linux</p>
          </div>
        </div>

        <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">
          Web app to desktop app in minutes
        </h1>
        <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">
          Take your web app codebase and transform it into a cross platform
          desktop app with native functionality.
        </p>
        <div className="mt-12 flex gap-4 flex-col sm:flex-row">
          <button className="px-8 py-3 font-semibold rounded-lg text-white bg-blue-800 shadow-sm hover:opacity-90">
            Download now
          </button>
          <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">
            Read Docs
          </button>
        </div>
      </div>

      {/* companies container */}
      <div className="flex flex-col gap-10">
        <div className="flex justify-center gap-2">
          <img className="translate-y-2" src={assets2} alt="" />
          <span className="font-semibold">APPS POWERED BY TODESKTOP</span>
          <img className="translate-y-2 -scale-x-100" src={assets2} alt="" />
        </div>
        {/* lines */}
        <div className="flex flex-col gap-4 px-16 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-10">
          {/* line1 */}
          <div
            ref={line1Ref}
            className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear"
          >
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
          </div>

          {/* line2 */}
          <div
            ref={line2Ref}
            className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear"
          >
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
          </div>

          {/* line3 */}
          <div
            ref={line3Ref}
            className="flex md:hidden gap-4 w-screen  -translate-x-48 transition-transform ease-linear "
          >
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
              <img className="w-12 h-12 md:w-16 md:h-16" src={asset0} alt="" />
              <span className="text-[12px] font-semibold lg:text-[16px]">
                Unbouce1
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero