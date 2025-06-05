import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen">
      <img
        src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg"
        alt="BG"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    </div>
  );
}

export default Hero