import React from "react";
import TextBg from "../../../assets/BgLeft.webp";
import TextImg from "../../../assets/AboutPageAssets/AboutTextImg.webp";
import PrimaryTitle from "../../../components/PrimaryTitle";
import Director from "./Director";
import BaseLine from "../../../components/BaseLine";

const Style = {
  backgroundImage: `url(${TextBg})`,
  backgroundSize: "cover",
};

const AboutText = () => {
  return (
    <><section style={Style} className="space-y-20">
      <div className="container pl-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div>
          <img src={TextImg} alt="About Om Sai Fire Safety" className="" />
        </div>

        {/* Right Text */}
        <div className="text-right space-y-6 container lg:px-0">
          <div className="lg:flex justify-end">
            <PrimaryTitle
            className="text-right"
            gradientText="About"
            normalText="Us"
            imgClassName="-scale-x-100 ml-auto"
          />
          </div>

          <p className="text-lg md:text-3xl leading-relaxed text-right">
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

          <p className="text-lg md:text-3xl leading-relaxed text-right">
            As a trusted{" "}
            <span className="font-semibold">fire safety company in India</span>, our
            goal is to deliver reliable fire safeguard solutions that protect lives,
            property, and businesses.{" "}
            <span className="font-semibold">With a professional team</span> and a
            customer-first approach, we ensure complete{" "}
            <span className="font-semibold">fire prevention and protection</span> —
            all under one roof.
          </p>
          <BaseLine className="ml-auto"/>
        </div>
      </div>
      <Director/>
    </section>
    </>
  );
};

export default AboutText;
