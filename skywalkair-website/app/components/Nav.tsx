"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  };
  return (
    <div className="bg-blue-50">
      <nav className="flex items-center justify-between px-2 py-2">
        <button
          className="hover:text-gray-300 py-2 px-4 rounded-2xl text-blue-700 text-2xl "
          onClick={handleClick}
        >
          <GiHamburgerMenu />
        </button>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-2xl">
            Contact Us!
          </button>
        </Link>
      </nav>
      {navOpen ? (
        <div className=" max-w-screen bg-indigo-600 text-white p-4 h-40">
          <ul>
            <li className="hover:text-gray-400  w-fit">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
            <li className="hover:text-gray-400 w-fit">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="hover:text-gray-400 w-fit">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="hover:text-gray-400 w-fit">
              <Link
                activeClass="active"
                to="client"
                spy={true}
                smooth={true}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li className="hover:text-gray-400 w-fit">
              <Link
                activeClass="active"
                to="ceo"
                spy={true}
                smooth={true}
                duration={500}
              >
                CEO
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
