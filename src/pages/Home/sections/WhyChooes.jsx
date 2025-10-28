import React from "react";
import ChooseBg from "../../../assets/HomePageAssets/Chooes/ChooesBg.webp";
import GradientText from "../../../components/GradientText";
import { LuSettings } from "react-icons/lu";
import { FaHeadset, FaTags } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdPerson2 } from "react-icons/md";

const Data = [
  {
    id: 1,
    title: "Certified ISI/BIS Products",
    icon: <LiaCertificateSolid />,
  },
  {
    id: 2,
    title: "Experienced Fire Safety Professionals",
    icon: <MdPerson2 />,
  },
  {
    id: 3,
    title: "Tailored Solutions for Every Industry",
    icon: <LuSettings />,
  },
  {
    id: 4,
    title: "24/7 Support & Quick Response",
    icon: <FaHeadset />,
  },
  {
    id: 5,
    title: "Affordable Safety Packages",
    icon: <FaTags />,
  },
];

const WhyChoose = () => {
  return (
    <section className="relative bg-black overflow-hidden py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-0 opacity-60">
        <img
          src={ChooseBg}
          alt="Background"
          className="w-full h-full object-cover md:object-contain"
        />
      </div>

      {/* Heading */}
      <div className="container relative z-10 text-center mb-12 md:mb-20">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-white">
          <GradientText>Why Choose </GradientText>Us
        </h1>
      </div>

      {/* Feature Cards (Flex Layout) */}
      <div className="container relative z-10 flex flex-wrap items-stretch justify-center gap-4 ">
        {Data.map((item) => (
          <div
            key={item.id}
            className="
              group 
              flex flex-col items-center justify-center text-center
              w-full sm:w-[48%] md:w-[30%] lg:w-[18%]
              rounded-lg border border-white/30 
              backdrop-blur-sm bg-white/30 
              p-5 sm:px-7 
              transition-transform duration-300 hover:scale-105 hover:bg-white/20
            "
          >
            <div className="text-4xl md:text-5xl text-white mb-4 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <p className=" font-semibold text-white leading-snug">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
