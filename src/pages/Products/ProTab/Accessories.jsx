import React from "react";
import { RiCloseFill } from "react-icons/ri";
import PrimaryTitle from "../../../components/PrimaryTitle";
import Safety1 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety1.svg";
import Safety2 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety2.svg";
import Safety3 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety3.svg";
import Safety4 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety4.svg";
import PrimaryButton from "../../../components/PrimaryButton";
import HeadLine from "../../../assets/HeadLine.png";
import BaseLine from "../../../components/BaseLine";

const AccessoriesData = [
  {
    id: 1,
    img: Safety1,
    title: "Signages",
    desc: "Clear, durable signs to guide people during emergencies and ensure compliance.",
  },
  {
    id: 2,
    img: Safety2,
    title: "Exit Lights",
    desc: "Bright, reliable illumination for safe evacuation in low-visibility situations.",
  },
  {
    id: 3,
    img: Safety3,
    title: "Fire Blankets",
    desc: "Quick-response blankets to smother small fires and protect individuals.",
  },
  {
    id: 4,
    img: Safety4,
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
            <BaseLine/>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 ">
          {AccessoriesData.map((item) => (

            <div key={item.id} className="flex flex-col items-center relative hover:-translate-y-3 transition duration-500 rounded-xl border-[1px] border-gray-200/50 h-full">
              <div className="bg-white/10 w-full rounded-t-xl flex flex-col h-60">
                <img src={item.img} alt={item.title} className="m-auto" />
              </div>
              <div className="bg-gradient-to-r from-primary-start to-primary-end w-full rounded-b-xl p-4 pb-16 text-start ">
                <h3 className="font-bold text-white text-3xl ">
                  {item.title}
                </h3>
                <PrimaryButton
                  className=""
                  onClick={() => handleShow(item)}
                >
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
                <h3 className="font-bold text-white text-3xl md:text-5xl">{show.title}</h3>
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
