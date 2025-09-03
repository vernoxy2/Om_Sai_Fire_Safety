import React from "react";
import GradientText from "./GradientText";
import HeadLine from "../assets/HeadLine.png";

const PrimaryTitle = ({
  preImg = HeadLine,
  gradientText,
  normalText,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col gap-3 items-center md:items-start ${className}`}
    >
      {preImg && (
        <img
          src={preImg}
          alt="headline"
          className="w-[55%] md:w-[33%] xl:w-[85%] 2xl:w-[70%]"
        />
      )}

      {(gradientText || normalText) && (
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white uppercase">
          {gradientText && <GradientText>{gradientText}</GradientText>}{" "}
          {normalText}
        </h2>
      )}
    </div>
  );
};

export default PrimaryTitle;
