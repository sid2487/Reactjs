import React from 'react'

const HeroText = () => {
  return (
    <div className="bg-black text-white p-[50px] min-h-screen">
      <hr className="w-full border-white mb-6" />

      <div className="flex flex-col justify-center items-start space-y-6">
        <p className="font-semibold text-xl">OUR WORK</p>

        <p className="text-9xl font-bold leading-[0.9]">
          EVERYTHING <br /> WE DO IS ROOTED <br /> IN STRATEGY <br /> TO BE{" "}
          <br /> EMOTIONALLY <br /> MOVING.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-10 ">
          <img
            src="https://cdn.prod.website-files.com/64f9ea5dc178183f58cd4436/650467c02cf10dea7dc358f9_Rectangle%2011.jpg"
            alt="image1"
            className="w-160 mx-50 my-120 p-10 rounded cursor-pointer transform transition-transform duration-500 hover:scale-105 "
          />
          <img
            src="https://cdn.prod.website-files.com/64f9ea5dc178183f58cd4436/65115e6580f5beddfaf202e1_Rectangle%202%20(1).jpg"
            alt="image2"
            className="w-[800px] h-auto rounded cursor-pointer m-4 p-6 transform transition-transform duration-500 hover:scale-105 "
          />
          <img
            src="https://cdn.prod.website-files.com/64f9ea5dc178183f58cd4436/650467d3fa9e0b76211f1dcb_Rectangle%2041.jpg"
            alt="image3"
            className="w-160 mx-50 my-120 p-10 rounded cursor-pointer transform transition-transform duration-500 hover:scale-105 "
          />
          <img
            src="https://cdn.prod.website-files.com/64f9ea5dc178183f58cd4436/650467cc9f72e9e5f74b873b_Rectangle%2012.jpg"
            alt="image4"
            className="w-[800px] h-auto rounded cursor-pointer m-4 p-6 transform transition-transform duration-500 hover:scale-105 "
          />
        </div>
      </div>
    </div>
  );
}

export default HeroText