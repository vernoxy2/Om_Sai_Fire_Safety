import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import HeadLine from "../../../assets/HeadLine.png";

import Pro1 from "../../../assets/ProductPageAssets/Tabview/Portable/Pro1.webp";
import Pro2 from "../../../assets/ProductPageAssets/Tabview/Portable/Pro2.webp";
import Pro3 from "../../../assets/ProductPageAssets/Tabview/Portable/Pro3.webp";
import Pro4 from "../../../assets/ProductPageAssets/Tabview/Portable/Pro4.webp";
import Pro5 from "../../../assets/ProductPageAssets/Tabview/Portable/Pro5.webp";

const data = [
  {
    id: 1,
    Img: Pro1,
    title: "ABC Powder Extinguishers",
    capacity: ["01kg", "02kg", "04kg", "06kg", "09kg", "25kg", "50kg", "75kg"],
  },
  {
    id: 2,
    Img: Pro2,
    title: "CO2 Extinguishers",
    capacity: ["02kg", "4.5kg", "6.8kg", "09kg", "22.5kg"],
  },
  {
    id: 3,
    Img: Pro3,
    title: "Water CO2 Extinguishers",
    capacity: ["09ltr", "50ltr"],
  },
  {
    id: 4,
    Img: Pro4,
    title: "Am.Foam Extinguishers",
    capacity: ["09ltr", "50ltr"],
  },
  {
    id: 5,
    Img: Pro5,
    title: "Clean Agent Extinguishers",
    capacity: ["04kgr", "06kg"],
  },
];

const ABCPowder = () => {
  return (
    // ABC Powder Extinguishers
    <section>
      {/* Main container */}
      <div className="container space-y-16">
        {/* Headline Content */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <PrimaryTitle
              gradientText={"Portable & Automatic"}
              normalText={"Fire Extinguishers"}
              titleClassName="text-start lg:max-w-lg"
            />
          </div>
          <div className="flex justify-center items-center text-start lg:max-w-md mx-auto">
            <p>
              We offer a range of portable and automatic extinguishers for
              different fire types
            </p>
          </div>
        </div>
        {/* Product Cards Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative hover:-translate-y-5 rounded-xl duration-500 transition overflow-hidden border-2 border-gray-200/10 bg-white/5 flex flex-col h-full"
            >
              <img src={item.Img} alt={item.title} className="h-[50%] z-0 mx-auto" />
              <div className="bg-gradient-to-r from-primary-start to-primary z-10 w-full p-5 pb-12 h-full flex flex-col justify-between items-start gap-3">
                <div className="flex flex-col gap-2 items-start">
                  <p className=" font-bold">{item.title}</p>
                <div className="bg-white w-[70%] rounded-[4px] p-1">
                  <p className="bg-gradient-to-r from-primary-start to-primary text-start px-1 uppercase font-semibold">
                    Capacity
                  </p>
                  <ul className="flex flex-wrap gap-1">
                    {item.capacity.map((cap) => (
                      <li key={cap} className="text-start px-1">
                        <p className="text-[#696969] font-semibold uppercase">{cap}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
                <img
                                  src={HeadLine}
                                  alt="Section divider"
                                  className="ml-auto -mr-5 pt-14 w-[40%]"
                                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ABCPowder;
