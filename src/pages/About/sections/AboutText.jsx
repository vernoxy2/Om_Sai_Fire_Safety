import React from "react";
import TextBg from "../../../assets/AboutPageAssets/AboutTextBg.webp";
import TextImg from "../../../assets/AboutPageAssets/AboutTextImg.webp";
import PrimaryTitle from "../../../components/PrimaryTitle";

const Style = {
  backgroundImage: `url(${TextBg})`,
  backgroundSize: "cover",
};

const AboutText = () => {
  return (
    <section style={Style}>
      <div className="container pl-0 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div>
          <img src={TextImg} alt="About Om Sai Fire Safety" className="" />
        </div>

        {/* Right Text */}
        <div className="text-right space-y-6">
          <div className="flex justify-end">
            <PrimaryTitle
            className="text-right"
            gradientText="About"
            normalText="Us"
            imgClassName="-scale-x-100"
          />
          </div>

          <p className="text-lg md:text-3xl leading-relaxed">
            At{" "}
            <span className="font-semibold">Om Sai Fire Safety Solution</span>, we are
            dedicated to fire safety and protection that goes beyond just supplying
            products.{" "}
            <span className="font-semibold">
              Along with certified fire safety equipment
            </span>
            , we provide expert services, training, and maintenance to keep{" "}
            <span className="font-semibold">your premises safe and compliant.</span>
          </p>

          <p className="text-lg md:text-3xl leading-relaxed">
            As a trusted{" "}
            <span className="font-semibold">fire safety company in India</span>, our
            goal is to deliver reliable fire safeguard solutions that protect lives,
            property, and businesses.{" "}
            <span className="font-semibold">With a professional team</span> and a
            customer-first approach, we ensure complete{" "}
            <span className="font-semibold">fire prevention and protection</span> —
            all under one roof.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutText;
