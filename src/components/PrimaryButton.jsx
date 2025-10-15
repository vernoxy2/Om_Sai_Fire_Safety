import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PrimaryButton = ({
  children,
  to = null,
  onClick = null,
  LinkclassName = "",
  divClassname = "",
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
    <div className={`inline-block rounded-[3px] ${divClassname}`}>
      <button
        onClick={handleClick}
        className={`block px-4 py-2 font-semibold uppercase text-primary bg-[#F9F9F9] rounded-[3px] text-center transition-transform duration-200 ease-in-out hover:scale-95 ${LinkclassName}`}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
