import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ children, to = "/", className = "" }) => {
  return (
    <div className="inline-block p-[1px] bg-gradient-to-r from-transparent to-white hover:scale-95 duration-200 ease-in-out rounded-[3px]">
      <Link
        to={to}
        className={`block px-4 py-2 font-semibold uppercase text-white bg-gray-600/20 rounded-[3px] w-full h-full text-center ${className}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default PrimaryButton;
