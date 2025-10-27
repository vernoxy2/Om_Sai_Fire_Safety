import React from "react";
import Img from "../../../assets/ServicesPageAssets/WeDoImg.webp";
import bgImg from "../../../assets/AboutPageAssets/AboutTextBg.webp";
import DirectorImg from "../../../assets/AboutPageAssets/DirectorImg.webp";
import GradientText from "../../../components/GradientText";
import BaseLine from "../../../components/BaseLine";
import PrimaryTitle from "../../../components/PrimaryTitle";

const Style = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center bottom",
};

const Director = () => {
  return (
      <div className=" pr-0 space-y-7">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center">
          <GradientText>Our </GradientText> Director
        </h1>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container">
          {/* Text */}
          <div className=" flex flex-col gap-y-6 justify-center items-start">
            <PrimaryTitle 
              gradientText={"Mr. Miroz"}
              normalText={"Dawoodani"}
              spanText="Founder & Director, Om Sai Fire Safety Solutions"
              className="justify-start"
            ></PrimaryTitle>
            <p className="text-left">
              With over Decade of expertise in the fire safety industry,{" "}
              <spa className="font-semibold">Mr. Miroz Dawoodani</spa> has been
              the cornerstone of Om Sai Fire Safety Solutions’{" "}
              <span className="font-semibold">growth and reputation.</span> His
              leadership is defined by a deep commitment to quality, innovation,
              and customer trust.
            </p>
            <p className="text-left">
              Through his vision,{" "}
              <span className="font-semibold">
                the company has established itself
              </span>{" "}
              as a reliable supplier of certified and high-performance fire
              safety products.{" "}
              <span className="font-semibold">Mr. Dawoodani continues</span> to
              lead Om Sai Fire Safety Solutions with a focus on excellence,
              ensuring every solution contributes to a safer and{" "}
              <span className="font-semibold">more secure environment.</span>
            </p>
            <BaseLine className="mr-auto"/>
          </div>
          {/* Image */}
          <div className="h-[90%]">
            <img src={DirectorImg} alt="Director" className="h-full object-cover" />
          </div>
        </div>
      </div>
  );
};

export default Director;
