import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F6FBF8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm text-gray-600 text-center md:text-left">
          © {new Date().getFullYear()} FoodHub. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="text-gray-700 hover:text-green-600 transition">
            Privacy
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 transition">
            Terms
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;