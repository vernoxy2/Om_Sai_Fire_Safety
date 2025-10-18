import React from "react";
import GradientText from "../../../components/GradientText";
import Img from "../../../assets/HomePageAssets/WhoWeAre.png"
import Bb from "../../../assets/HomePageAssets/WhoWeAreBg.webp"
import PrimaryTitle from "../../../components/PrimaryTitle";

const WhoWeAre = () => {
  return (
    <section style={{ backgroundImage: `url(${Bb})` }} className="bg-cover bg-center-center bg-no-repeat ">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-14">
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6">
          <PrimaryTitle gradientText="Who We" normalText=" Are"></PrimaryTitle>
          <p className="text-xl md:text-2xl 2xl:text-3xl leading-6">
            At Om Sai Fire Safety Solution, we believe that safety is not an
            option it’s a necessity.We are a trusted provider of fire protection
            systems, certified equipment, and expert services, dedicated to
            safeguarding lives and property across residential, commercial, and
            industrial spaces.
          </p>
          <p className="text-xl md:text-2xl 2xl:text-3xl">
            With years of experience, our team of skilled professionals ensures
            end-to-end fire safety solutions from supply and installation to
            maintenance and training. Every product we deliver is ISI/BIS
            certified, and every service is designed to meet national safety
            standards.
          </p>
        </div>
        <div className="w-[80%] my-auto mx-auto">
          <img src={Img} alt="" className="w-full"/>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
