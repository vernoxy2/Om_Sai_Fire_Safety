import React from "react";
import Bg from "../assets/BgRightUp.webp";
import UnderLineWhite from "../assets/UnderLineWhite.svg";
import PrimaryButton from "./PrimaryButton";
import SafetySolutionImg from "../assets/SafetySolutionImg.webp";
import GradientText from "./GradientText";

const Style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const SafetySolution = () => {
  return (
    <section style={Style}>
      <div className="container relative">
        {/* Left Image with Title Overlay */}
        <div className="relative z-10 lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-5/12">
          {/* Image */}
          <img
            src={SafetySolutionImg}
            alt="Fire Safety"
            className="w-full mx-auto h-auto object-cover"
          />

          {/* Overlay Title */}
          <div className="absolute bottom-0 bg-black/40 p-3 md:px-6">
            <h1 className="text-4xl md:text-6xl lg:text-[88px] leading-tight md:leading-[88px]">
              <GradientText>get the right Fire </GradientText>
              safety solution
            </h1>
          </div>
        </div>

        {/* Right Content Box */}
        <div className="w-full lg:w-10/12 ml-auto mt-8 md:mt-0 py-10 md:py-14 bg-gradient-to-b from-primary-start to-primary rounded-xl relative">
          <img
            src={UnderLineWhite}
            alt="underline"
            className="absolute bottom-5 right-0 w-1/2 opacity-70"
          />
          <div className="w-full lg:w-7/12 ml-auto px-6 lg:pr-20 space-y-6">
            <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed">
              Every space has unique needs — whether it’s a{" "}
              <span className="font-semibold">
                home, office, factory, or commercial complex.
              </span>{" "}
              At Om Sai Fire Safety Solution,{" "}
              <span className="font-semibold">
                we deliver customized protection
              </span>{" "}
              systems to keep you safe and compliant.
            </p>

            <div className="w-1/3 h-1 bg-white/60 rounded-sm"></div>

            <p className="font-semibold ">
              Don’t wait until it’s too late — choose the right solution today!
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-y-6 gap-10 w-full justify-between">
              <PrimaryButton
                to="/contact"
                className="text-base md:text-xl w-full flex justify-center text-center"
              >
                Request a Free Audit
              </PrimaryButton>
              <PrimaryButton
                to="/contact"
                className="text-base md:text-xl w-full flex justify-center text-center"
              >
                Get Free Consultation
              </PrimaryButton>
            </div>

            <div className="w-full flex justify-center items-center">
              <PrimaryButton
                to="/contact"
                className="text-base md:text-xl w-full flex justify-center text-center"
              >
                Contact Now
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySolution;
