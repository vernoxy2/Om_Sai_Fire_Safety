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
    <section style={Style} className="py-12 md:py-20">
      <div className="container relative">
        {/* Left Image with Title Overlay */}
        <div className="relative z-10 lg:absolute top-1/2 -translate-y-1/2 w-full md:w-6/12 lg:w-5/12">
  {/* Image */}
  <img
    src={SafetySolutionImg}
    alt="Fire Safety"
    className=" h-auto object-cover"
  />

  {/* Overlay Title */}
  <div className="absolute bottom-0 2xl:max-w-[95%] bg-black/40 p-3 md:px-6">
    <h1 className="text-4xl md:text-6xl lg:text-[88px] leading-tight md:leading-[88px]">
      <GradientText>get the right Fire </GradientText>
      safety solution
    </h1>
  </div>
</div>


        {/* Right Content Box */}
        <div className="w-full md:w-10/12 ml-auto mt-8 md:mt-0 py-10 md:py-14 bg-gradient-to-b from-primary-start to-primary rounded-xl relative">
          <img
            src={UnderLineWhite}
            alt="underline"
            className="absolute bottom-5 right-0 w-1/2 opacity-70"
          />
          <div className="w-full md:w-7/12 ml-auto px-6 md:pr-20 space-y-6">
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

            <div className="w-1/3 h-1 bg-white/60"></div>

            <p className="font-semibold ">
              Don’t wait until it’s too late — choose the right solution today!
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PrimaryButton to="/contact" className="text-base md:text-xl">
                Request a Free Audit
              </PrimaryButton>
              <PrimaryButton to="/contact" className="text-base md:text-xl">
                Get Free Consultation
              </PrimaryButton>

              <div className="col-span-1 sm:col-span-2 flex justify-center">
                <PrimaryButton to="/contact" className="text-base md:text-xl">
                  Contact Now
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySolution;
