import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PrimaryButton = ({
  children,
  to = null,
  onClick = null,
  className = "",
  // divClassname = "",
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (to) {
      navigate(to);
    }
  };

  return (
      <button
        onClick={handleClick}
        className={` bg-[#f9f9f9] py-2 px-4 rounded-[3px] text-primary-start font-semibold text-xl uppercase hover:scale-95 duration-200 ease-in-out ${className}`}
      >
        {children}
      </button>
  );
};

export default PrimaryButton;
