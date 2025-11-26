import React, { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderHome({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // ref for mobile menu

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener when unmounted
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="text-white font-serif text-xl flex items-center">
            <img src="/logo1.png" alt="Prime Sales Logo" className="h-8 w-16" />
          </div>
        </Link>

        {/* Dark Mode Toggle (Desktop) */}
        <div
          className={`absolute top-5 right-4 hidden md:flex items-center justify-between w-12 h-6 p-1 rounded-full cursor-pointer transition-colors duration-300 ${
            dark ? "bg-gray-800" : "bg-gray-800"
          }`}
          onClick={() => setDark(!dark)}
        >
          <FaMoon
            className={`text-yellow-300 ${
              dark ? "opacity-100" : "opacity-50"
            } transition-opacity duration-300`}
          />
          <FaSun
            className={`text-yellow-400 ${
              dark ? "opacity-50" : "opacity-100"
            } transition-opacity duration-300`}
          />
          <div
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              dark ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-white/90 font-sans text-sm font-light">
          <a
            href="about"
            className="hover:text-white hover:scale-105 transition-all duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-white hover:scale-105 transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-white  hover:scale-105 transition-all duration-300"
          >
            Solutions
          </a>
          <a
            href="#"
            className="hover:text-white hover:scale-105 transition-all duration-300"
          >
            News
          </a>
          <a
            href="#"
            className="hover:text-white  hover:scale-105 transition-all duration-300"
          >
            Showcase
          </a>
          <a
            href="#"
            className="hover:text-white  hover:scale-105 transition-all duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-white  hover:scale-105 transition-all duration-300"
          >
            Careers
          </a>
          <button className="flex items-center gap-1 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
            EN
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white transition-transform duration-300 hover:scale-110"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className={`absolute top-16 right-6 bg-black/90 text-white rounded-lg shadow-lg p-6 flex flex-col gap-4 w-48 text-sm font-light animate-fadeIn`}
        >
          <a
            href="#"
            className="hover:text-primary transition-all duration-200"
          >
            Our Mission
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-200"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-200"
          >
            Products
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-200"
          >
            Support Us
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-200"
          >
            Contact
          </a>
          <button className="flex items-center gap-1 hover:text-primary transition-all duration-200">
            EN <ChevronDown size={14} />
          </button>

          {/* Dark Mode Toggle (Inside Mobile Menu) */}
          <div
            className={`absolute top-5 right-4 flex items-center justify-between w-12 h-6 p-1 rounded-full cursor-pointer transition-colors duration-300 ${
              dark ? "bg-gray-800" : "bg-gray-800"
            }`}
            onClick={() => setDark(!dark)}
          >
            <FaMoon
              className={`text-yellow-300 ${
                dark ? "opacity-100" : "opacity-50"
              } transition-opacity duration-300`}
            />
            <FaSun
              className={`text-yellow-400 ${
                dark ? "opacity-50" : "opacity-100"
              } transition-opacity duration-300`}
            />
            <div
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                dark ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default HeaderHome;
