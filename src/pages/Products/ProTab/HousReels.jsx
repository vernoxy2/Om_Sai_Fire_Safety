import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import HeadLine from "../../../assets/HeadLine.png";
import Pro1 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro1.webp";
import Pro2 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro2.png";
import Pro3 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro3.png";
import Pro4 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro4.png";
import Pro5 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro5.png";
import Pro6 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro6.png";

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
    desc: "Binding Type, GI, Copper & SS Technical Specification",
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
  },
  {
    id: 5,
    img: Pro5,
    title: "Hose Reel Drum Set",
    subtitle: "Available in MS & FRP",
    category: ["19mm", "25mm", "Compact", "Malaysian"],
    desc: "Shut Off Nozzle PVC, Brass, SS Technical Specification",
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
    type: "Single Door/Double Door type with locking arrangement, front glass and key",
  },
];

const HoseReels = () => {
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
          <div className="flex justify-center items-center text-start lg:max-w-sm mx-auto">
            <p>We provide complete fire hydrant solutions including</p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative hover:-translate-y-5 rounded-xl duration-500 transition overflow-hidden border-2 border-gray-200/10 bg-white/5 flex flex-col h-full "
            >
              {/* Product Image */}
              <img
                src={item.img}
                alt={`${item.title} product image`}
                className="h-[50%] z-0 mx-auto"
              />

              {/* Content */}
              <div className="bg-gradient-to-r from-primary-start to-primary p-5 pb-8 text-start text-white flex flex-col gap-2 h-full justify-between">
                <div>
                  <p className="uppercase font-bold">{item.title}</p>
                  <p className="uppercase">{item.subtitle}</p>

                  {/* Capacity */}
                  {item.category && (
                    <div className="bg-white w-[80%] rounded-[4px] p-1 my-3">
                      <p className="bg-gradient-to-r from-primary-start to-primary text-start px-1 uppercase font-semibold text-white">
                        Capacity
                      </p>
                      <ul className="flex flex-wrap justify-between gap-1 py-1">
                        {item.category.map((cap) => (
                          <li key={cap} className="text-start px-1">
                            <p className="text-[#696969] font-semibold ">
                              {cap}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technical Specs */}
                  <p className="uppercase font-semibold">{item.desc}</p>
                  {item.material && (
                    <p className="text-2xl break-words">
                      <span className="font-semibold">Material:</span> {item.material}
                    </p>
                  )}
                  {item.size && (
                    <p className="text-2xl break-words">
                      <span className="font-semibold">Size:</span> {item.size}
                    </p>
                  )}
                  {item.specification && (
                    <p className="text-2xl break-words">
                      <span className="font-semibold">Specification:</span> {item.specification}
                    </p>
                  )}
                  {item.hydraulicTest && (
                    <p className="text-2xl break-words">
                      <span className="font-semibold">Hydraulic Test:</span> {item.hydraulicTest}
                    </p>
                  )}
                  {item.length && (
                    <p className="text-2xl break-words">
                      <span className="font-semibold">Length:</span> {item.length}
                    </p>
                  )}
                  {item.bindingWire && (
                    <p className="text-2xl break-words">
                      <span className="font-semibold">Binding Wire:</span> {item.bindingWire}
                    </p>
                  )}
                  {item.type && (
                    <p className="text-2xl break-words">
                      <span className="font-semibold">Type:</span> {item.type}
                    </p>
                  )}
                  {item.hubWallBracket && (
                    <p className="text-2xl break-words">
                      <span className="font-semibold">SIDWS, Hub, Wall Bracket:</span> {item.hubWallBracket}
                    </p>
                  )}
                  {item.pipeWithFittings && (
                    <p className="text-2xl break-words">
                      <span className="font-semibold">Pipe With Fittings:</span> {item.pipeWithFittings}
                    </p>
                  )}
                  {item.test && (
                    <p className="text-2xl break-words">
                      <span className="font-semibold">Test:</span> {item.test}
                    </p>
                  )}
                  
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

export default HoseReels;
