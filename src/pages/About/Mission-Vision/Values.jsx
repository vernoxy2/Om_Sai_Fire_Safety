import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import ValuesImg from "../../../assets/AboutPageAssets/MissionVision/ValuesImg.webp";
import { desc } from "framer-motion/client";
import GradientText from "../../../components/GradientText";
import { IoMdArrowDropright } from "react-icons/io";

const ValuwsList = [
  {
    values: "Integrity",
    desc: "We do what’s right, every time.",
  },
  {
    values: "Reliability",
    desc: "Our solutions and services are built to last.",
  },
  {
    values: "Innovation",
    desc: "Constantly adapting with the latest fire safety standards.",
  },
  {
    values: "Commitment",
    desc: "Safeguarding lives andproperty is our highest priority.",
  },
];

const Values = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div>
        <img src={ValuesImg} alt="" className="mx-auto" />
      </div>
      <div>
        <PrimaryTitle
          gradientText={"Our"}
          normalText={"core values"}
        ></PrimaryTitle>
        <ul className="space-y-2 mt-12 px-14">
          {ValuwsList.map((item) => (
            <li className="flex ictems-center gap-2">
              <IoMdArrowDropright className="text-primary-start mb-auto text-4xl" />
              <p>
                <GradientText>{item.values}</GradientText> - {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Values;
