import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] text-white shadow-inner">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Brand */}
        <div className="text-xl font-bold">LOGO</div>

        {/* Footer Links */}
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-gray-300 cursor-pointer">Terms of Service</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-6 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
