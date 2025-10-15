import React from "react";
import bg from "../../../assets/ServicesPageAssets/WeDo.webp";
import Img from "../../../assets/ServicesPageAssets/WeDoImg.webp";
import GradientText from "../../../components/GradientText";

const Style = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundposition: "center,bottom",
};

const WeDo = () => {
  return (
    <section style={Style} className="py-0 ">
      <div className="container flex-col md:w-1/2 justify-center items-center space-y-4 relative">
        {/* <img src={Img} alt="" className='absolute border-' /> */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl">
          <GradientText>what </GradientText> we do
        </h1>
        <p>
          At Om Sai Fire Safety Solutions, we go beyond just providing equipment
          — we offer comprehensive fire safety solutions tailored to your
          premises.
        </p>
      </div>
    </section>
  );
};

export default WeDo;
