import React from "react";
import bg from "../../../assets/ServicesPageAssets/WeDo.webp";
import Img from "../../../assets/ServicesPageAssets/WeDoImg.webp";
import GradientText from "../../../components/GradientText";
import BaseLine from "../../../components/BaseLine";

const Style = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center bottom",
};

const WeDo = () => {
  return (
    <section style={Style} className=" relative py-0 ml-auto overflow-hidden">
      {/* Overlay */}
      <img
        src={Img}
        alt=""
        className="absolute inset-0 h-full object-cover z-0 hidden xl:block"
      />

      {/* Content */}
      <div className="relative z-10 container py-44 flex flex-col md:w-1/2 justify-center items-center space-y-4">
        <h1 className="text-5xl md:text-7xl lg:text-9xl text-start">
          <GradientText>what </GradientText> we do
        </h1>
        <p className="text-start">
          At Om Sai Fire Safety Solutions, we go beyond just providing equipment
          — we offer comprehensive fire safety solutions tailored to your
          premises.
        </p>
        <BaseLine className="mr-auto"/>
      </div>
    </section>
  );
};

export default WeDo;
