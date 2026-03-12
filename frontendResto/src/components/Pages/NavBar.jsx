import React from "react";

function NavBar() {
  return (
    <div className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2 text-orange-400">
          <span className="text-3xl text-orange-400">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
            </svg>
          </span>
          <h2 className="text-2xl font-black tracking-tight text-slate-100">
            Resto<span className="text-orange-400">Premium</span>
          </h2>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-orange-400">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-orange-400">
            Menu
          </a>
          <a href="#" className="text-gray-300 hover:text-orange-400">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-orange-400">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
