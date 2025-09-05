import React from "react";
import Bg from "../../../assets/HomePageAssets/Products/ProductsBg.webp";
import PrimaryTitle from "../../../components/PrimaryTitle";
import { LuSettings } from "react-icons/lu";

const style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
};

const Data = [
  {
    id: 1,
    icon: <LuSettings />,
    title: "Government Approved Supplier",
    sutitle: "Regulatory compliant",
  },
  {
    id: 2,
    icon: <LuSettings />,
    title: "Authorized Distributor",
    sutitle: "Genuine, reliable products",
  },
  {
    id: 3,
    icon: <LuSettings />,
    title: "Trained Safety Experts",
    sutitle: "Professional fire safety services",
  },
];

const Certificate = () => {
  return (
    <section style={style} className="space-y-14 py-12">
      {/* Headline Content */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <PrimaryTitle
            gradientText="Certificate"
            normalText="and Accreditations"
          />
        </div>
        <div>
          <p className="text-base md:text-xl lg:text-2xl mt-6 leading-relaxed text-white">
            <span className="font-semibold">Om Sai Fire Safety Solutions</span>{" "}
            is certified, trusted, and fully compliant with all fire safety
            standards.
          </p>
        </div>
      </div>

      {/* Cards Content */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {Data.map((item) => (
          <div
            key={item.id}
            className="border-l-[3px] border-Border duration-300 hover:scale-105"
          >
            <div className="bg-gradient-to-r from-primary-start   to-transparent flex items-center gap-4 px-4 py-6">
              <div className="text-3xl text-white">{item.icon}</div>
              <div className="text-start">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm md:text-lg text-white">
                  {item.sutitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <p className="text-center font-semibold ">
        Your safety, our certified promise
      </p>
    </section>
  );
};

export default Certificate;
