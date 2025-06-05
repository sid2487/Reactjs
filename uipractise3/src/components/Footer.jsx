import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Nav */}
        <div>
          <h1 className="text-2xl font-bold mb-4">LOGO</h1>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Products</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">App</li>
            <li className="hover:text-gray-400 cursor-pointer">Services</li>
            <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Newsletter or Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <p className="mb-4 text-gray-400">
            Subscribe to our newsletter for the latest updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md text-white border border-amber-50"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
