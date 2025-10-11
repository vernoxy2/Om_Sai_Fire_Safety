import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import HeadLine from "../../../assets/HeadLine.png";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Image imports
import ABC1kg from "../../../assets/ProductPageAssets/Tabview/Portable/ABC_Powder/ABC1kg.webp";
import ABC6kg from "../../../assets/ProductPageAssets/Tabview/Portable/ABC_Powder/ABC6kg.webp";
import ABC50kg from "../../../assets/ProductPageAssets/Tabview/Portable/ABC_Powder/ABC50kg.webp";
import ABC75kg from "../../../assets/ProductPageAssets/Tabview/Portable/ABC_Powder/ABC75kg.webp";
import Co2 from "../../../assets/ProductPageAssets/Tabview/Portable/CO2_Extinguishers/Co2.webp";
import Co4_5 from "../../../assets/ProductPageAssets/Tabview/Portable/CO2_Extinguishers/Co45.webp";
import Co6_8 from "../../../assets/ProductPageAssets/Tabview/Portable/CO2_Extinguishers/Co68.webp";
import Co9 from "../../../assets/ProductPageAssets/Tabview/Portable/CO2_Extinguishers/Co9.webp";
import Co22_5 from "../../../assets/ProductPageAssets/Tabview/Portable/CO2_Extinguishers/Co225.webp";
import WaterCO29 from "../../../assets/ProductPageAssets/Tabview/Portable/Water_CO2/WaterCO29.webp";
import WaterCO250 from "../../../assets/ProductPageAssets/Tabview/Portable/Water_CO2/WaterCO250.webp";
import M_Foam9 from "../../../assets/ProductPageAssets/Tabview/Portable/M_Foam/M_Foam9.webp";
import M_Foam50 from "../../../assets/ProductPageAssets/Tabview/Portable/M_Foam/M_Foam50.webp";
import CleanAgent4 from "../../../assets/ProductPageAssets/Tabview/Portable/CleanAgent/CleanAgent4.webp";
import CleanAgent6 from "../../../assets/ProductPageAssets/Tabview/Portable/CleanAgent/CleanAgent6.webp";
import Pro5 from "../../../assets/ProductPageAssets/Tabview/Portable/Pro5.webp";

// Data for product cards
const data = [
  {
    id: 1,
    Img: [ABC1kg, ABC6kg, ABC50kg, ABC75kg],
    title: "ABC Powder Extinguishers",
    capacity: ["01kg", "06kg", "50kg", "75kg"],
  },
  {
    id: 2,
    Img: [Co2, Co4_5, Co6_8, Co9, Co22_5],
    title: "CO2 Extinguishers",
    capacity: ["02kg", "4.5kg", "6.8kg", "09kg", "22.5kg"],
  },
  {
    id: 3,
    Img: [WaterCO29, WaterCO250],
    title: "Water CO2 Extinguishers",
    capacity: ["09ltr", "50ltr"],
  },
  {
    id: 4,
    Img: [M_Foam9, M_Foam50],
    title: "Am. Foam Extinguishers",
    capacity: ["09ltr", "50ltr"],
  },
  {
    id: 5,
    Img: [CleanAgent4, CleanAgent6],
    title: "Clean Agent Extinguishers",
    capacity: ["04kg", "06kg"],
  },
];

const ABCPowder = () => {
  return (
    <section>
      <div className="container space-y-16">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <PrimaryTitle
              gradientText="Portable & Automatic"
              normalText="Fire Extinguishers"
              titleClassName="text-start lg:max-w-lg"
            />
          </div>
          <div className="flex justify-center items-center text-start lg:max-w-md mx-auto">
            <p>
              We offer a range of portable and automatic extinguishers for
              different fire types.
            </p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative hover:-translate-y-5 rounded-xl duration-500 transition overflow-hidden border-2 border-gray-200/10 bg-white/5 flex flex-col h-full"
            >
              {/* If multiple images -> use Swiper */}
              {item.Img.length > 1 ? (
                <Swiper
                  modules={[ Autoplay]}
                  autoplay={{ delay: 2000, disableOnInteraction: false , duration: 4000 }}
                  loop={true}
                  className="h-[100%] w-full"
                >
                  {item.Img.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${item.title} ${i + 1}`}
                        className="h-full object-contain mx-auto"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img
                  src={item.Img[0]}
                  alt={item.title}
                  className="h-[50%] object-contain mx-auto"
                />
              )}

              {/* Product Content */}
              <div className="bg-gradient-to-r from-primary-start to-primary z-10 w-full p-5 pb-12 h-full flex flex-col justify-between items-start gap-3">
                <div className="flex flex-col gap-2 items-start">
                  <p className="font-bold">{item.title}</p>

                  <div className="bg-white w-[70%] rounded-[4px] p-1">
                    <p className="bg-gradient-to-r from-primary-start to-primary text-start px-1 uppercase font-semibold">
                      Capacity
                    </p>
                    <ul className="flex flex-wrap gap-1">
                      {item.capacity.map((cap) => (
                        <li key={cap} className="text-start px-1">
                          <p className="text-[#696969] font-semibold uppercase">
                            {cap}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative divider */}
                <img
                  src={HeadLine}
                  alt="Section divider graphic"
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
