import React from "react";
import GradientText from "../../../components/GradientText";
import Hero from "../../../assets/HomePageAssets/HomeHero.webp";

const Header = () => {
  return (
    <section
      className="h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="container text-start">
        <div className="w-11/12 lg:w-1/2 bg-gradient-to-r from-primary-start/60 to-transparent p-7 border-l-[3px] border-primary mr-auto md:space-y-5">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold">
              <GradientText>Protecting </GradientText>Lives.
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light">Securing Property</h1>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl pt-4">
            Trusted Fire Safety Solutions <br className="hidden lg:block" />
            for Every Space
          </h1>
          <button className="px-4 py-2 mt-4 font-semibold text-3xl text-white bg-gradient-to-t from-[#D9D9D9]/40 to-[#BFBFBF]/40 rounded-sm">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
