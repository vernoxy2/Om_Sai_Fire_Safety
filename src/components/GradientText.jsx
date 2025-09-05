import React from "react";

const GradientText = ({ children }) => {
  return (
    <span className="bg-gradient-to-l from-primary-end to-primary-start bg-clip-text text-transparent group-hover:text-white duration-500">
      {children}
    </span>
  );
};

export default GradientText;
