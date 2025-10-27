import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import Detector1 from "../../../assets/ProductPageAssets/Tabview/detectors/detectors1.webp";
import Detector2 from "../../../assets/ProductPageAssets/Tabview/detectors/detectors2.webp";
import Detector3 from "../../../assets/ProductPageAssets/Tabview/detectors/detectors3.webp";
import Detector4 from "../../../assets/ProductPageAssets/Tabview/detectors/detectors4.webp";
import HeadLine from "../../../assets/HeadLine.png";
import PrimaryButton from "../../../components/PrimaryButton";
import { RiCloseFill } from "react-icons/ri";
import BaseLine from "../../../components/BaseLine";

const Data = [
  {
    id: 1,
    img: Detector1,
    title: "FIRE ALARM MCP",
    subtitle: "MANUAL CALL POINT",
    category: ["abs", "ms"],
    description:
      "Compatibility with all conventional fire control panel Alarm sest key facilities Glass protected by thin film Wall mounted.LED blinking facility aptionell",
    poweri: "24 v dc",
    Current_Consumption: "na/30ma (Normal/Fire)",
    Housing: "abs",
    Weight: "150 gm",
    dimension: "85 x 85 x 50",
    color: "Red",
  },
  {
    id: 2,
    img: Detector2,
    title: "FIRE ALARM HOOTER",
    subtitle: "",
    category: ["abs", "ms"],
    power: "100V AC (with LMT) or 12/24 V AC",
    poweroi: "90 db",
    Weight: "340 gm",
    dimension: "L 115mm/D 75mm/W 115mm",
    speaker: "4 watt  ",
    consumption: "220 mA",
    Construction: "ABS Housing",
  },
  {
    id: 3,
    img: Detector3,
    title: "SMOKE DETECTOR",
    subtitle: "SMOKE HEAT MULTI",
    category: ["abs", "ms"],
    features:
      "Dual LED for 360 degree visibility 2wire based detectorAdvance algorithms provides advanced detection Easy installationLow maintenance High immunity against unwanted alarmsStable optical smoke sensing chamber, No adjustment or replacement required",
    power: "100V AC (with LMT) or 12/24 V AC",
    poweroi: "90 db",
    Weight: "340 gm",
    dimension: "L 115mm/D 75mm/W 115mm",
    speaker: "4 watt  ",
    consumption: "220 mA",
    Construction: "ABS Housing",
  },
  {
    id: 4,
    img: Detector4,
    title: "FIRE ALARM PANEL",
    subtitle: "TECHNICAL SPECIFICATIONS",
    category: ["2 zone", "4 zone", "etc"],
    features:
      "Operating Voltage AC 220v 50Hz ±10%, DC 24v 1 AMPOperating Temperature 0°C to 50°COperating Humidity 95% (non-condensing).Hooter Output -1 A (24v DC)EOL 4k7 ohm, 1 per zoneWeight-4.5 Kg Construction 1.8 mm CRCA sheet duly power coatedDimension H 272mm W 346mm D 96mmColour Caramel White/Red",
  },
];

const Detectors = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShow = (item) => {
    setShowModal(item);
  };

  const handleClose = () => {
    setShowModal(null);
  };
  return (
    // Smock & Heat Detectors
    <section>
      {/* Main container */}
      <div className="container space-y-16">
        {/* Headline Content */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <PrimaryTitle
              gradientText={"smoke & heat"}
              normalText={"detectors"}
              titleClassName="text-start lg:max-w-lg"
            />
          </div>
          <div className="flex justify-center flex-col text-start lg:max-w-sm mx-auto">
            <p>
              Early detection saves lives. Our smoke and heat detectors include
            </p>
            <BaseLine/>
          </div>
        </div>

        {/* Cards Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-10">
          {Data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center relative hover:-translate-y-3 transition duration-500 rounded-xl border-[1px] border-gray-200/50 h-full"
            >
              <div className="bg-white/10 w-full rounded-t-xl flex flex-col h-52 md:h-80">
                <img
                  src={item.img}
                  alt={item.title}
                  className="m-auto h-full mt-14"
                />
              </div>
              <div className="bg-gradient-to-r space-y-3 from-primary-start to-primary-end w-full rounded-b-xl p-4 pb-16 text-start ">
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

      {/* Pop up */}
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
                  <div className="flex flex-col -space-y-3">
                    <h3 className="font-bold text-4xl md:text-5xl">{showModal.title}</h3>
                    {showModal.subtitle && (
                      <p className="text-2xl md:text-3xl ">{showModal.subtitle}</p>
                    )}
                  </div>
                  {/* Category Box */}
                  <div className="bg-white w-1/3 rounded-[4px] p-1">
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
                {showModal.description && (
                  <div>
                    <p className="font-semibold">SPECIFICATION</p>
                    <p className="text-lg md:text-2xl mt-1 md:w-2/3 leading-6">
                      {showModal.description}
                    </p>
                  </div>
                )}
                {showModal.features && (
                  <div>
                    <p className="font-semibold">FEATURES</p>
                    <p className="text-lg md:text-2xl mt-1 md:w-2/3 leading-6">
                      {showModal.features}
                    </p>
                  </div>
                )}

                <ul className="mt-2 space-y- text-xl">
                  {showModal.power && (
                    <li>
                      <>Power:</> {showModal.power}
                    </li>
                  )}
                  {showModal.poweri && (
                    <li>
                      <strong>Power:</strong> {showModal.poweri}
                    </li>
                  )}
                  {showModal.Current_Consumption && (
                    <li>
                      <strong>Current Consumption:</strong>{" "}
                      {showModal.Current_Consumption}
                    </li>
                  )}
                  {showModal.Consumption && (
                    <li>
                      <strong>Consumption:</strong> {showModal.Consumption}
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

export default Detectors;
