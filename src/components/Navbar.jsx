import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import LogoName from "../assets/LogoName.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `hover:text-primary transition duration-300 ${
      isActive ? "text-primary font-bold underline" : "text-[#696969]"
    }`;

  // 🔹 Menu items array
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    // { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className=" top-0 left-0 w-full z-50 bg-transparent font-alumni sticky">
      <div className=" mx-auto pl-0 flex items-center justify-between  py-4 px-6 lg:ps-8 bg-white/95">
        {/* Logo */}
        <div className=" px-4 md:px-10 lg:px-12 pr-2 md:pr-6 ">
          <img src={LogoName} alt="Logo" className="" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-around w-full  text-2xl px-8">
          {menuItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Line */}
        <div className="h-[2px] w-full bg-black"></div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-white ml-auto"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} className="text-black" />
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
        className={`lg:hidden fixed top-0 right-0 h-screen w-3/4 bg-black/90 text-white text-xl md:text-2xl flex flex-col items-start gap-6 p-8 pt-20 z-50 transform transition-transform duration-300 ${
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
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={navLinkClass}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
