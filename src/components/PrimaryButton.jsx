import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ children, to = "/", className = "" }) => {
  return (
    <div className="inline-block p-[2px] bg-gradient-to-r from-transparent to-white hover:scale-95 duration-200 ease-in-out rounded-md">
      <Link
        to={to}
        className={`block px-4 py-2 font-semibold uppercase text-white bg-gradient-to-r from-[#D9D9D9]/20 to-[#BFBFBF]/90 rounded-md w-full h-full text-center ${className}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default PrimaryButton;
