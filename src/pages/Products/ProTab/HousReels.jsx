import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import HeadLine from "../../../assets/HeadLine.png";
import Pro1 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro1.webp";
import Pro2 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro2.png";
import Pro3 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro3.png";
import Pro4 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro4.png";
import Pro5 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro5.png";
import Pro6 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro6.png";
import PrimaryButton from "../../../components/PrimaryButton";
import { RiCloseFill } from "react-icons/ri";
import BaseLine from "../../../components/BaseLine";

const data = [
  {
    id: 1,
    img: Pro1,
    title: "Hydrant Valve",
    subtitle: "Single & Double Outlets",
    category: ["SS 202", "SS 304", "Gun Metal"],
    desc: "TECHNICAL SPECIFICATION",
    material: "Gun metal LTB-2 & Stainless steel",
    size: "63mm",
    specification: "Conforming to IS 5290 Performance Test",
    hydraulicTest: "Tested at 21 Kg/cm²",
  },
  {
    id: 2,
    img: Pro2,
    title: "RRL Hose Pipe",
    subtitle: "Canvas & RRL",
    category: ["SS 202", "SS 304", "Gun Metal"],
    desc: (
      <>
        Binding Type, GI, Copper & <br /> SS Technical Specification
      </>
    ),
    material: "Rubber Reinforced Lined (RRL) Hoses",
    size: "63mm",
    hydraulicTest: "Tested at 13 Kg/cm² & 21 Kg/cm²",
    length: "As per Client Requirement (15m & 30m)",
    bindingWire: "Copper or G.I Wire",
  },
  {
    id: 3,
    img: Pro3,
    title: "Hose Box",
    subtitle: "Available in MS & FRP",
    category: ["Single Door & Double Door"],
    desc: "TECHNICAL SPECIFICATION",
    size: "All sizes of boxes/Frames fabricated as per standards & client’s specification",
    type: "Single Door/Double Door type with locking arrangement, front glass and key",
  },
  {
    id: 4,
    img: Pro4,
    title: "Branch Pipe",
    subtitle: "Available in",
    category: ["Aluminium", "SS 202 & SS 304", "Gun Metal"],
    desc: "TECHNICAL SPECIFICATION",
    material: "Gun metal LTB-2, SS & Aluminium",
    size: "63 mm",
    specification: "Conforming to IS 903",
    hydraulicTest: "Tested at 21 Kgf/cm²",
    text: "BRANCH PIPE WITH NOZZLE",
  },
  {
    id: 5,
    img: Pro5,
    title: "Hose Reel Drum Set",
    subtitle: "Shut Off Nozzle PVC, Brass, SS Technical Specification",
    category: ["19mm", "25mm", "Compact", "Malaysian"],
    type: "Swinging Type, Wall Mounted",
    size: "Inlet 20 mm & 25 mm",
    hubWallBracket: "Grade LTB2 of IS 318",
    pipeWithFittings:
      "Rubber as per IS 444 or Thermoplastic as per IS 12585 Hose, Nozzle Performance IS 8090 Hydrostatic Pressures Test No Leakage at 21 Kg/cm² Range of Throw at 7 Kg/cm² Minimum 6 Meters Discharge at 7 Kg/cm² Minimum 24 LPM",
  },
  {
    id: 6,
    img: Pro6,
    title: "Fire Brigade Inlet",
    subtitle: "Two Way & Four Way",
    category: ["SS", "Gun Metal"],
    desc: "TECHNICAL SPECIFICATION",
    size: "63 mm Dia",
    material: "Gun Metal/SS & Cast Iron Body",
    performance: "Hydraulic",
    test: "Tested at 21 Kg/cm²",
  },
];

const HoseReels = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShow = (item) => {
    setShowModal(item);
  };
  const handleClose = () => {
    setShowModal(null);
  };
  return (
    <section>
      <div className="container space-y-16">
        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <PrimaryTitle
              gradientText="fire hydrant systems "
              normalText="& hose reels"
              titleClassName="text-start lg:max-w-lg"
            />
          </div>
          <div className="flex justify-center flex-col text-start lg:max-w-sm mx-auto">
            <p>We provide complete fire hydrant solutions including</p>
            <BaseLine/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center relative hover:-translate-y-3 transition duration-500 rounded-xl border-[1px] border-gray-200/50 h-full"
            >
              <div className="bg-white/10 w-full rounded-t-xl flex flex-col h-80">
                <img
                  src={item.img}
                  alt={item.title}
                  className="m-auto h-full mt-16"
                />
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
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 overflow-scroll py-20"
          onClick={handleClose}
        >
          <div
            className="bg-gradient-to-b from-primary-start to-primary-end rounded-xl px-8 w-11/12 max-w-2xl max-h-2/4 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={handleClose}
            >
              <RiCloseFill className="text-whitetext-3xl md:text-4xl font-bold " />
            </button>

            <div className="flex flex-col items-center pt-8">
              {/* Image */}
              <div className="w-full flex flex-col h-40 md:h-56">
                <img
                  src={showModal.img}
                  alt={showModal.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="py-8 w-full text-start text-white">
                <div className="flex justify-between">
                  <div className="flex flex-col md:-space-y-2">
                    <h3 className="font-bold text-4xl md:text-5xl leading-7">{showModal.title}</h3>
                    {showModal.subtitle && (
                      <p className=" text-2xl md:text-3xl uppercase">{showModal.subtitle}</p>
                    )}
                  </div>
                  {/* Category Box */}
                  <div className="bg-white w-60 rounded-[4px] p-1 ">
                    <p className="bg-gradient-to-r from-primary-start to-primary text-start px-1 uppercase font-semibold">
                      category
                    </p>
                    <ul className="flex flex-wrap gap-1">
                      {showModal.category.map((cap) => (
                        <li key={cap} className="text-start px-1">
                          <p className="text-[#696969] font-semibold uppercase">
                            {cap}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Description */}
                {showModal.desc && (
                  <div>
                    {/* <p className="font-semibold">SPECIFICATION</p> */}
                    <p className="text-2xl md:text-3xl font-semibold mt-1 uppercase leading-6">
                      {showModal.desc}
                    </p>
                  </div>
                )}
                {/* Features */}
                {showModal.features && (
                  <div>
                    <p className="font-semibold">De</p>
                    <p className=" mt-1 w-2/3 leading-6">
                      {showModal.description}
                    </p>
                  </div>
                )}
                {showModal.text && (
                  <div>
                    <p className="text-xl md:text-2xl mt-1 w-2/3 leading-6">{showModal.text}</p>
                  </div>
                )}

                <ul className="mt-2 space-y-1 text-xl uppercase w-1/2 leading-5">
                  {showModal.material && (
                    <li>
                      <span className="font-semibold">Material:</span>{" "}
                      {showModal.material}
                    </li>
                  )}
                  {showModal.size && (
                    <li>
                      <strong>size:</strong> {showModal.size}
                    </li>
                  )}
                  {showModal.length && (
                    <li>
                      <strong>length:</strong> {showModal.length}
                    </li>
                  )}
                  {showModal.type && (
                    <li>
                      <strong>type:</strong> {showModal.type}
                    </li>
                  )}
                  {showModal.Housing && (
                    <li>
                      <strong>Housing:</strong> {showModal.Housing}
                    </li>
                  )}
                  {showModal.Construction && (
                    <li>
                      <strong>Construction:</strong> {showModal.Construction}
                    </li>
                  )}
                  {showModal.Weight && (
                    <li>
                      <strong>Weight:</strong> {showModal.Weight}
                    </li>
                  )}
                  {showModal.dimension && (
                    <li>
                      <strong>Dimension:</strong> {showModal.dimension}
                    </li>
                  )}
                  {showModal.color && (
                    <li>
                      <strong>Color:</strong> {showModal.color}
                    </li>
                  )}
                  {showModal.speaker && (
                    <li>
                      <strong>Speaker:</strong> {showModal.speaker}
                    </li>
                  )}
                </ul>
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

export default HoseReels;
