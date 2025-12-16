import React from "react";
import { RiCloseFill } from "react-icons/ri";
import PrimaryTitle from "../../../components/PrimaryTitle";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Safety11 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety1.1.svg";
import Safety12 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety1.2.svg";
import Safety13 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety1.3.svg";
import Safety14 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety1.4.svg";
import Safety21 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety2.1.svg";
import Safety22 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety2.2.svg";
import Safety23 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety2.3.svg";
import Safety24 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety2.4.svg";
import Safety25 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety2.5.svg";
import Safety3 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety3.svg";
import Safety41 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety4.1.svg";
import Safety42 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety4.2.svg";
import Safety43 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety4.3.svg";
import Safety44 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety4.4.svg";
import Safety45 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety4.5.svg";
import PrimaryButton from "../../../components/PrimaryButton";
import HeadLine from "../../../assets/HeadLine.png";
import BaseLine from "../../../components/BaseLine";

const AccessoriesData = [
  {
    id: 1,
    img: [Safety11, Safety12, Safety13, Safety14],
    title: "Signages",
    desc: "Clear, durable signs to guide people during emergencies and ensure compliance.",
  },
  {
    id: 2,
    img: [Safety21, Safety22, Safety23, Safety24, Safety25],
    title: "Exit Lights",
    desc: "Bright, reliable illumination for safe evacuation in low-visibility situations.",
  },
  {
    id: 3,
    img: [Safety3],
    title: "Fire Blankets",
    desc: "Quick-response blankets to smother small fires and protect individuals.",
  },
  {
    id: 4,
    img: [Safety41, Safety42, Safety43, Safety44, Safety45],
    title: "Safety Gear",
    desc: "Protective equipment including helmets, gloves, and suits to safeguard personnel during hazardous conditions.",
  },
];

const Accessories = () => {
  const [show, setShow] = React.useState(null);

  const handleShow = (item) => {
    setShow(item);
  };

  const handleClose = () => {
    setShow(null);
  };

  return (
    <section className="relative">
      <div className="container mx-auto space-y-16">
        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <PrimaryTitle
            gradientText="Safety"
            normalText="Accessories"
            titleClassName="text-start lg:max-w-lg"
          />
          <div className="flex justify-center flex-col text-start lg:max-w-md mx-auto">
            <p>
              Essential for{" "}
              <span className="font-bold">
                comprehensive fire and workplace
              </span>{" "}
              safety, our safety accessories enhance protection, guidance, and
              emergency readiness.
            </p>
            <BaseLine />
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 ">
          {AccessoriesData.map((item) => (
            <div
              key={item.id}
              className="flex  flex-col items-center justify-between relative hover:-translate-y-3 transition duration-500 rounded-xl border-[1px] border-gray-200/50 h-full"
            >
              {/* If multiple images -> use Swiper */}
              {item.img.length > 1 ? (
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    duration: 4000,
                  }}
                  loop={true}
                  className=" w-full rounded-t-xl flex flex-col items-center justify-center"
                >
                  {item.img.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${item.title} ${i + 1}`}
                        className=" translate-y-5  object-contain mx-auto flex flex-col items-center justify-center  "
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img
                  src={item.img[0]}
                  alt={item.title}
                  className="-mb-8 object-contain mx-auto flex items-center justify-center translate-y-0 relative pt-16 "
                />
              )}
              <div className="bg-gradient-to-r  space-y-3 from-primary-start to-primary-end w-full rounded-b-xl p-4 pb-16 text-start relative">
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

      {/* Overlay Modal */}
      {show && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          {/* Modal Content */}
          <div
            className="bg-gradient-to-b from-primary-start to-primary-end rounded-xl p-6 md:p-16 w-11/12 max-w-2xl max-h-2/4 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold "
              onClick={handleClose}
            >
              <RiCloseFill className="text-white text-3xl md:text-4xl  font-bold " />
            </button>
            {/* Content */}
            <div className="flex flex-col md:flex-row items-center md:gap-14">
              {/* Image */}
              <div className=" w-full flex flex-col h-60 p-4 ">
                <img
                  src={show.img}
                  alt={show.title}
                  className="m-auto h-full object-contain "
                />
              </div>
              <div className="py-10 w-full text-start">
                <h3 className="font-bold text-white text-3xl md:text-5xl">
                  {show.title}
                </h3>
                <p className="text-white text-xl md:ext-2xl leading-6 mt-2">
                  {show.desc}
                </p>
                {/* <PrimaryButton onClick={() => handleClose()}>
                  Back
                </PrimaryButton> */}
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

export default Accessories;
