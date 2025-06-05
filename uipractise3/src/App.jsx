import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar will be overlaid inside Hero */}
      <div className="relative">
        <Hero />
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
