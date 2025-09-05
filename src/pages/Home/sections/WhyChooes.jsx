import React from "react";
import ChooseBg from "../../../assets/HomePageAssets/Chooes/ChooesBg.webp";
import ChooseImg from "../../../assets/HomePageAssets/Chooes/ChooesImg.png";

import GradientText from "../../../components/GradientText";
import { LuSettings } from "react-icons/lu";
import { FaHeadset, FaTags } from "react-icons/fa";

const Style = {
  backgroundImage: `url(${ChooseBg})`,
  backgroundSize: "cover",
};

const Data = [
  {
    id: 1,
    title: "Certified ISI/BIS Products",
    icon: <LuSettings />,
  },
  {
    id: 2,
    title: "Experienced Fire Safety Professionals",
    icon: <LuSettings />,
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

const WhyChooes = () => {
  return (
    <section style={Style}>
      <h1 className="text-7xl md:text-9xl lg:text-9xl font-bold text-center">
        <GradientText>Why Choose </GradientText>Us
      </h1>
      <img src={ChooseImg} alt="" className="mx-auto -mt-12 md:-mt-20 w-[80%] md:w-auto" />

      <div className="container flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 items-center justify-center -mt-20">
        {Data.map((item) => (
          <div
            key={item.id}
            className="p-[2px] rounded-lg bg-gradient-to-r from-primary/60 to-primary-start/60 transform transition duration-300 hover:scale-105 w-full sm:w-[45%] lg:w-[18%]"
          >
            <div className="border border-transparent bg-black/40 rounded-lg flex flex-col items-center justify-center text-center gap-4 px- xl:px-3 2xl:px-4 py-2">
              <div className="text-3xl text-white">{item.icon}</div>
              <h1 className=" text-xl md:text-2xl font-bold text-white leading-7">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooes;
