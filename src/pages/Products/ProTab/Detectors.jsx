import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import Detector1 from "../../../assets/ProductPageAssets/Tabview/detectors/detectors1.webp";
import Detector2 from "../../../assets/ProductPageAssets/Tabview/detectors/detectors2.webp";
import Detector3 from "../../../assets/ProductPageAssets/Tabview/detectors/detectors3.webp";
import Detector4 from "../../../assets/ProductPageAssets/Tabview/detectors/detectors4.webp";
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
    features: "Dual LED for 360 degree visibility 2wire based detectorAdvance algorithms provides advanced detection Easy installationLow maintenance High immunity against unwanted alarmsStable optical smoke sensing chamber, No adjustment or replacement required",
    power: "100V AC (with LMT) or 12/24 V AC",
    poweroi: "90 db",
    Weight: "340 gm",
    dimension: "L 115mm/D 75mm/W 115mm",
    speaker: "4 watt  ",
    consumption: "220 mA",
    Construction: "ABS Housing",
  },
];

const Detectors = () => {
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
          <div className="flex justify-center items-center text-start lg:max-w-sm mx-auto">
            <p>
              Early detection saves lives. Our smoke and heat detectors include
            </p>
          </div>
        </div>
        {/* Cards Content */}
      </div>
    </section>
  );
};

export default Detectors;
