import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import LogoName from "../assets/LogoName.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `hover:text-white transition duration-300  ${
      isActive ? "text-white font-black" : "text-gray-200"
    }`;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent font-alumni">
      <div className="container mx-auto pl-0 flex items-center gap-10 py-4 px-6 lg:px-12">
        {/* Logo */}
        <div className="rounded-[4px] p-1 md:p-2 lg:p-3 px-4 md:px-12 lg:px-14 pr-2 md:pr-6 bg-gradient-to-l from-[#d6d6d6] to-transparent">
          <img src={LogoName} alt="Logo" className="lg:scale-125" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-full gap-10 text-xl bg-[#D9D9D9]/40 py-2 px-8 border border-white rounded-sm">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-white ml-auto"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu (Slide In) */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-3/4 bg-black/90 text-white flex flex-col items-start gap-6 p-8 pt-20 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={closeMenu}
        >
          <X size={28} />
        </button>

        {/* Links */}
        <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/services" onClick={closeMenu} className={navLinkClass}>
          Services
        </NavLink>
        <NavLink to="/products" onClick={closeMenu} className={navLinkClass}>
          Products
        </NavLink>
        <NavLink to="/projects" onClick={closeMenu} className={navLinkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
