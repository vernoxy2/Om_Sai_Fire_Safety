import React, { useRef, useEffect, useState } from "react";
import GradientText from "./GradientText";
import HeadLine from "../assets/HeadLine.svg";

const PrimaryTitle = ({
  preImg = HeadLine,
  gradientText,
  normalText,
  className = "",
  titleClassName = "",
  imgClassName = "",
  spanText = "",
}) => {
  const titleRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    // Check if we're on the client side and ref is available
    if (typeof window !== "undefined" && titleRef.current) {
      setTextWidth(titleRef.current.offsetWidth);
    }
  }, [gradientText, normalText]);

  return (
    <div
      className={`flex flex-col gap-3 items-center   ${className}`}
    >
      {(gradientText || normalText) && (
        <>
          {preImg && (
            <img
              src={preImg}
              alt="headline"
              style={{ width: `${textWidth}px` }}
              className={` ${imgClassName}`}
            />
          )}
          <h2
            ref={titleRef}
            className={`text-5xl md:text-6xl 2XL:text-7xl text-white uppercase inline-block hero-title *:${titleClassName}`}
          >
            {gradientText && <GradientText>{gradientText}</GradientText>}{" "}
            {normalText}
          </h2>
          <p className="-mt-5 text-white text-start">{spanText}</p>
        </>
      )}
    </div>
  );
};

export default PrimaryTitle;
