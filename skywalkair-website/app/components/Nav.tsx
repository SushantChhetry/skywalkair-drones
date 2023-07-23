import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-2 py-2">
        <button className="hover:text-gray-300 py-2 px-4 rounded-2xl text-blue-700 text-2xl">
          <GiHamburgerMenu />
        </button>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-2xl">
          Contact Us!
        </button>
      </nav>
    </div>
  );
};

export default Nav;
