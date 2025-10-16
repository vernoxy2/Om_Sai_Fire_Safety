import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import SingleDoor from "../../../assets/ProductPageAssets/Tabview/Doors/SingleDoor.webp";
import DoubleDoor from "../../../assets/ProductPageAssets/Tabview/Doors/DoubleDoor.webp";
import HeadLine from "../../../assets/HeadLine.png";
import PrimaryButton from "../../../components/PrimaryButton";
import { RiCloseFill } from "react-icons/ri";

const HVWSData = [
  {
    id: 1,
    img: SingleDoor,
    title: "Single door",
    desc: "Single fire doors prevent the spread of fire and smoke, providing reliable safety and quick evacuation during emergencies. Compact, durable, and certified for protection.",
  },
  {
    id: 2,
    img: DoubleDoor,
    title: "Double Door",
    desc: "Double fire doors offer wider access with the same strong fire and smoke resistance, ensuring safety for larger openings and high-traffic areas. Durable, certified, and built for maximum protection.",
  },
];

const FireDoors = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShow = (item) => {
    setShowModal(item);
  };

  const handleClose = () => {
    setShowModal(null);
  };
  return (
    // Fire Doors
    <section>
      {/* Main container */}
      <div className="container space-y-16">
        {/* Headline Content */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <PrimaryTitle
              gradientText={"fire"}
              normalText={"doors"}
              titleClassName="text-start lg:max-w-lg "
            />
          </div>
          <div className="flex justify-center items-center text-start lg:max-w-sm mx-auto">
            <p>
              Fire doors block{" "}
              <span className="font-bold">
                fire and smoke, ensuring building safety
              </span>{" "}
              effectively.
            </p>
            {/* <RiCloseFill/> */}
          </div>
        </div>
        {/* Cards Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HVWSData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center relative hover:-translate-y-3 transition duration-500 rounded-xl border-[1px] border-gray-200/50 h-full"
            >
              <div className="bg-white/10 w-full rounded-t-xl flex flex-col h-80">
                <img src={item.img} alt={item.title} className="m-auto h-full mt-14" />
              </div>
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

      {/* Pop Up */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          {/* Modal Content */}
          <div
            className="bg-gradient-to-b from-primary-start to-primary-end rounded-xl p-16 w-11/12 max-w-2xl max-h-2/4 overflow-y-auto relative"
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
              <div className=" w-full flex flex-col h-72 ">
                <img
                  src={showModal.img}
                  alt={showModal.title}
                  className=" h-full  object-contain"
                />
              </div>
              <div className="py-10 w-full text-start ">
                <h3 className="font-bold text-white text-5xl">
                  {showModal.title}
                </h3>
                <p className="text-white text-2xl leading-6 mt-2">
                  {showModal.desc}
                </p>
                
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

export default FireDoors;
