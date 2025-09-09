import React from "react";
import ProHead from "../../../assets/ProHead.webp";
import GradientText from "../../../components/GradientText";

const Style = {
  backgroundImage: `url(${ProHead})`,
  backgroundSize: "cover",
  backgroundPosition: "center center", // ✅ fixed typo & value
};

const ProductHead = () => {
  return (
    <section style={Style} className="py-32">
      <div className="container text-start">
        <div className="w-11/12 lg:w-1/2 bg-gradient-to-r from-primary-start/60 to-transparent p-7 border-l-[3px] border-Border mt-20 mr-auto md:space-y-5">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold">
              <GradientText>Our </GradientText> Products
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white">
              Discover our certified fire safety products — extinguishers,
              alarms, detectors, and hose reels — all built for reliability
              when it matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHead;
