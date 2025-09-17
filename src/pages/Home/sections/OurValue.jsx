import React from "react";
import value from "../../../assets/HomePageAssets/Value.webp";
import GradientText from "../../../components/GradientText";
import PrimaryButton from "../../../components/PrimaryButton";

const OurValue = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row px-0">
      {/* Left Section */}
      <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-6 lg:pl-24">
        <h2 className="text-2xl md:text-3xl xl:text-3xl font-bold text-black">Our Value</h2>
        <h1 className="text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl font-semibold"><GradientText>Reliable fire solutions <br className="xl:hidden 2xl:block" /> you can trust</GradientText></h1>
      </div>

      {/* Right Section with Background */}
      <div
        className="w-full lg:w-8/12 flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-6 h-64 xl:h-auto bg-center bg-cover lg:pl-52 lg:pr-24"
        style={{ backgroundImage: `url(${value})` }}
      >
        <p className="text-2xl leading-tight md:text-4xl lg:text-3xl 2xl:text-4xl">We protect lives and property by reducing risks, ensuring compliance, and delivering expert fire safety solutions</p>
        <PrimaryButton to="/contact">Get Free Consultation</PrimaryButton>
        {/* <button className="px-4 py-2 mt-4 font-semibold text-xl md:text-2xl lg:text-3xl text-white bg-gradient-to-t from-[#D9D9D9]/40 to-[#BFBFBF]/40 rounded-sm hover:scale-95 duration-200 ease-in-out ">
            Get Free Consultation
          </button> */}
      </div>
    </div>
  );
};

export default OurValue;
