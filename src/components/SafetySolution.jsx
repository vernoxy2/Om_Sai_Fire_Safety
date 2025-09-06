import React from "react";
import Bg from "../assets/BgRightUp.webp";
import UnderLineWhite from "../assets/UnderLineWhite.svg";
import PrimaryButton from "./PrimaryButton";
import SafetySolutionImg from "../assets/SafetySolutionImg.webp";
import GradientText from "./GradientText";

const Style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
};

const SafetySolution = () => {
  return (
    <section style={Style}>
      <div className="container relative">
        <div className="absolute top-0 left-0 z-10 translate-x-28 translate-y-10 ">
          <img src={SafetySolutionImg} alt="" className="relative" />
          <div className="w-full p-3 px-6 bg-black/40 absolute bottom-0">
            <h1 className="text-[88px] leading-[88px]">
              <GradientText>get the right Fire </GradientText>safety solution
            </h1>
          </div>
        </div>

        <div className="w-10/12 ml-auto py-14  bg-gradient-to-b from-primary-start to-primary rounded-xl relative">
          <img
            src={UnderLineWhite}
            alt=""
            className="absolute bottom-7 right-0 w-1/2"
          />
          <div className="w-7/12 ml-auto pr-48 space-y-6">
            <p className="text-3xl">
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
            <div className="w-1/2 h-1 bg-white/60"></div>
            <p className=" font-semibold">
              Don’t wait until it’s too late — choose the right solution today!
            </p>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
              {/* Top Row */}
              <PrimaryButton to="/contact" className="text-2xl">
                Request a Free Audit
              </PrimaryButton>
              <PrimaryButton to="/contact" className="text-2xl">
                Get Free Consultation
              </PrimaryButton>

              {/* Bottom Row - spans full width but centered */}
              <div className="col-span-1 md:col-span-2 flex justify-center">
                <PrimaryButton to="/contact" className="text-2xl" >Contact Now</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySolution;
