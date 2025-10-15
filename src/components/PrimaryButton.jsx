import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ children, to = "/", linkClassName = "", divClassName = "", ...props }) => {
  return (
    <div
      className={`px-4 py-2 font-semibold uppercase text-primary bg-[#F9F9F9] rounded-[3px] ${divClassName}`}
    >
      <Link
        to={to}
        className={`text-center block ${linkClassName}`}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default PrimaryButton;
