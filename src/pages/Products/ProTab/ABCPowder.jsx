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
import PrimaryButton from "../../../components/PrimaryButton";
import { RiCloseFill } from "react-icons/ri";
import BaseLine from "../../../components/BaseLine";

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
  const [showModal, setShowModal] = React.useState(false);

  const handleShow = (item) => {
    setShowModal(item);
  };

  const handleClose = () => {
    setShowModal(null);
  };
  return (
    // ABC Powder
    <section>
      {/* Container */}
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
          <div className="flex justify-center flex-col text-start lg:max-w-md mx-auto">
            <p>
              We offer a range of portable and automatic extinguishers for
              different fire types.
            </p>
            <BaseLine/>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="relflex flex-col items-center relative hover:-translate-y-3 transition duration-500 rounded-xl border-[1px] border-gray-200/50 h-full"
            >
              {/* If multiple images -> use Swiper */}
              {item.Img.length > 1 ? (
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    duration: 4000,
                  }}
                  loop={true}
                  className="bg-white/10 w-full rounded-t-xl flex flex-col h-96 "
                >
                  {item.Img.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${item.title} ${i + 1}`}
                        className=" object-contain mx-auto "
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
              <div className="bg-gradient-to-r from-primary-start to-primary-end w-full rounded-b-xl p-4 pb-16 text-start ">
                <h3 className="font-bold text-white text-3xl ">{item.title}</h3>
                <PrimaryButton className="" onClick={() => handleShow(item)}>
                  View Details
                </PrimaryButton>
              </div>
              <div className="absolute bottom-7 right-0">
                <img src={HeadLine} alt="" className="ml-auto w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop Up  */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          {/* Modal Content */}
          <div
            className="bg-gradient-to-b from-primary-start to-primary-end rounded-xl p-8 w-11/12 max-w-2xl max-h-2/4 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold "
              onClick={handleClose}
            >
              <RiCloseFill className="text-whitetext-3xl md:text-4xl font-bold " />
            </button>
            {/* Content */}
            <div className="flex flex-col md:flex-row items-center md:gap-14">
              {/* Image */}
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  duration: 4000,
                }}
                loop={true}
                className=" w-full rounded-t-xl flex flex-col h-52 md:h-96"
              >
                {showModal.Img.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${showModal.title} ${i + 1}`}
                      className="h-full object-contain mx-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="py-10 w-full text-start ">
                <h3 className="font-bold text-white text-4xl md:text-5xl">
                  {showModal.title}
                </h3>
                <div className="bg-white w-[80%] rounded-[4px] p-1">
                  <p className="bg-gradient-to-r from-primary-start to-primary text-start px-1 uppercase font-semibold">
                    category
                  </p>
                  <ul className="flex flex-wrap gap-1">
                    {showModal.capacity.map((cap) => (
                      <li key={cap} className="text-start px-1">
                        <p className="text-[#696969] font-semibold uppercase">
                          {cap}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 right-0">
              <img src={HeadLine} alt="" className="ml-auto w-2/3" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ABCPowder;
