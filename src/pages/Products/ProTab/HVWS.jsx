import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import HVWS1 from "../../../assets/ProductPageAssets/Tabview/HVWS/HVWS1.webp";
import HVWS2 from "../../../assets/ProductPageAssets/Tabview/HVWS/HVWS2.webp";
import HeadLine from "../../../assets/HeadLine.png";
import PrimaryButton from "../../../components/PrimaryButton";
import { RiCloseFill } from "react-icons/ri";
import BaseLine from "../../../components/BaseLine";

const HVWSData = [
  {
    id: 1,
    img: HVWS1,
    title: "ABC & CO₂ Flooding Systems",
    desc: "Foam and water systems create a protective layer to smother flammable liquid fires. Efficient, cooling, and essential for fuel storage and chemical facilities.",
  },
  {
    id: 2,
    img: HVWS2,
    title: "FIRE ALARM HOOTER",
    desc: "ABC and CO₂ flooding systems deliver rapid and reliable fire suppression. ABC powder controls Class A, B, and C fires efficiently, while CO₂ flooding displaces oxygen to extinguish fires in electrical and enclosed areas — ensuring complete, residue-free protection for critical spaces.",
  },
];

const HVWS = () => {
  const [show, setShow] = React.useState(false);

  const handleShow = (item) => {
    setShow(item);
  };

  const handleClose = () => {
    setShow(null);
  };
  return (
    // HVWS
    <section className="relative">
      {/* Main container */}
      <div className="container mx-auto space-y-16">
        {/* Headline Content */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          <PrimaryTitle
            gradientText={"HVWS"}
            normalText={"system"}
            titleClassName="text-start lg:max-w-lg"
          />
          <div className="flex justify-center flex-col text-start lg:max-w-sm mx-auto">
            <p>
              High Velocity Water{" "}
              <span className="font-bold">Spray systems rapidly cool</span>{" "}
              surfaces, suppress flames, ensuring reliable, efficient fire
              control in industries.
            </p>
            <BaseLine/>
          </div>
        </div>

        {/* Cards Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HVWSData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center relative hover:-translate-y-3 transition duration-500 rounded-xl border-[1px] border-gray-200/50 h-full"
            >
              <div className="bg-white/10 w-full rounded-t-xl flex flex-col h-full">
                <img src={item.img} alt={item.title} className="m-auto" />
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
      {show && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          {/* Modal Content */}
          <div
            className="bg-gradient-to-b from-primary-start to-primary-end rounded-xl py-6 px-6 md:px-16 w-11/12 max-w-2xl max-h-2/4 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-white font-bold "
              onClick={handleClose}
            >
              <RiCloseFill className="text-white text-3xl md:text-4xl font-bold " />
            </button>
            {/* Content */}
            <div className="flex flex-col  items-center ">
              {/* Image */}
              <div className=" flex flex-col md:h-60 p-4 ">
                <img
                  src={show.img}
                  alt={show.title}
                  className="m-auto h-full object-contain "
                />
              </div>
              <div className="py-10 w-full text-start">
                <h3 className="font-bold text-white text-3xl md:text-5xl">{show.title}</h3>
                <p className="text-white md:text-2xl leading-6 mt-2">
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

export default HVWS;
