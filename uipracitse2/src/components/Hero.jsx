import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Image Background */}
      <img
        src="https://images.pexels.com/photos/17840/pexels-photo.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-1" />

      {/* Hero text */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          BECOME THE BEAST
        </h1>
        <hr className="w-24 border-t-4 border-blue-500 mb-4" />
        <p className="text-xl md:text-2xl italic">JUST COME WITH THE COURAGE</p>
        <p className="text-md mt-2 text-gray-300">REST WE WILL ASSURE YOU!</p>
      </div>
    </div>
  );
};

export default Hero;
