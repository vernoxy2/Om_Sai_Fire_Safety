import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import HeadLine from "../../../assets/HeadLine.png";
import Pro1 from "../../../assets/ProductPageAssets/Tabview/Hydrant/Pro1.webp";

const data = [
  {
    id: 1,
    img: Pro1,
    title: "Hydrant Valve",
    subtitle: "Single & Double Outlets",
    category: ["SS 202", "SS 304", "Gun Metal"],
    desc: "TECHNICAL SPECIFICATION",
    Material: "Gun metal LTB-2 & Stainless steel",
    Size: "63mm",
    Specification: "Conforming to IS 5290 Performance Test",
    HydraulicTest: "Tested at 21 Kg/cm²",
  },
  {
    id: 2,
    img: Pro1,
    title: "RRL Hose Pipe",
    subtitle: "Canvas & RRL",
    category: ["SS 202", "SS 304", "Gun Metal"],
    desc: "Binding Type, GI, Copper & SS Technical Specification",
    Material: "Rubber Reinforced Lined (RRL) Hoses",
    Size: "63mm",
    Specification: "",
    HydraulicTest: "Tested at 13 Kg/cm² & 21 Kg/cm²",
    Length: "As per Client Requirement (15m & 30m)",
    BindingWin: "Copper or G.I Wire",
  },
  {
    id: 3,
    img: Pro1,
    title: "RRL Hose Pipe",
    subtitle: "Canvas & RRL",
    category: ["SS 202", "SS 304", "Gun Metal"],
    desc: "Binding Type, GI, Copper & SS Technical Specification",
    Material: "Rubber Reinforced Lined (RRL) Hoses",
    Size: "63mm",
    Specification: "",
    HydraulicTest: "Tested at 13 Kg/cm² & 21 Kg/cm²",
    Length: "As per Client Requirement (15m & 30m)",
    BindingWin: "Copper or G.I Wire",
  }
];

const HousReels = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative hover:-translate-y-5 rounded-xl duration-500 transition overflow-hidden border-2 border-gray-200/10 bg-white/5"
            >
              {/* Product Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-[70%] z-0 mx-auto"
              />

              {/* Content */}
              <div className="bg-gradient-to-r from-primary-start to-primary p-5 pb-8 text-start text-white flex flex-col gap-2  justify-between">
                <div><p className="uppercase font-bold">{item.title}</p>
                <p className="uppercase text-sm">{item.subtitle}</p>

                {/* Capacity */}
                <div className="bg-white w-[75%] rounded-[4px] p-1 my-3">
                  <p className="bg-gradient-to-r from-primary-start to-primary text-start px-1 uppercase font-semibold text-white">
                    Capacity
                  </p>
                  <ul className="flex flex-wrap gap-1 py-1">
                    {item.category.map((cap) => (
                      <li key={cap} className="text-start px-1">
                        <p className="text-[#696969] font-semibold ">
                          {cap}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specs */}
                <p className="uppercase font-semibold">{item.desc}</p>
                {item.Material && (
                  <p className="text-2xl">
                    <span className="font-semibold">MATERIAL:</span>{" "}
                    {item.Material}
                  </p>
                )}
                {item.Size && (
                  <p className="text-2xl">
                    <span className="font-semibold">SIZE:</span> {item.Size}
                  </p>
                )}
                {item.Specification && (
                  <p className="text-2xl">
                    <span className="font-semibold">SPECIFICATION:</span>{" "}
                    {item.Specification}
                  </p>
                )}
                {item.HydraulicTest && (
                  <p className="text-2xl">
                    <span className="font-semibold">HYDRAULIC TEST:</span>{" "}
                    {item.HydraulicTest}
                  </p>
                )}
                {item.Length && (
                  <p className="text-2xl">
                    <span className="font-semibold">LENGTH:</span>{" "}
                    {item.Length}
                  </p>
                )}
                {item.BindingWin && (
                  <p className="text-2xl">
                    <span className="font-semibold">BINDING WIRE:</span>{" "}
                    {item.BindingWin}
                  </p>
                )}</div>
                <img src={HeadLine} alt="" className="ml-auto -mr-5 pt-14 w-[40%]"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousReels;
