import React from "react";
import GradientText from "../../../components/GradientText";
import Img from "../../../assets/HomePageAssets/WhoWeAre.png"
import Bb from "../../../assets/HomePageAssets/WhoWeAreBg.webp"

const WhoWeAre = () => {
  return (
    <section style={{ backgroundImage: `url(${Bb})` }} className="bg-cover bg-center-center bg-no-repeat ">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-14">
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold">
            <GradientText>Who We</GradientText> Are
          </h1>
          <p className="text-2xl md:text-3xl 2xl:text-4xl">
            At Om Sai Fire Safety Solution, we believe that safety is not an
            option it’s a necessity.We are a trusted provider of fire protection
            systems, certified equipment, and expert services, dedicated to
            safeguarding lives and property across residential, commercial, and
            industrial spaces.
          </p>
          <p className="text-2xl md:text-3xl 2xl:text-4xl">
            With years of experience, our team of skilled professionals ensures
            end-to-end fire safety solutions from supply and installation to
            maintenance and training. Every product we deliver is ISI/BIS
            certified, and every service is designed to meet national safety
            standards.
          </p>
        </div>
        <div className="w-[90%] flex justify-center items-center mx-auto">
          <img src={Img} alt="" className="w-full"/>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
