import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import HVWS1 from "../../../assets/ProductPageAssets/Tabview/HVWS/HVWS1.webp";
import HVWS2 from "../../../assets/ProductPageAssets/Tabview/HVWS/HVWS2.webp";

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
  return (
    // HVWS
    <section>
      {/* Main container */}
      <div className="container space-y-16">
        {/* Headline Content */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <PrimaryTitle
              gradientText={"HVWS"}
              normalText={"system"}
              titleClassName="text-start lg:max-w-lg"
            />
          </div>
          <div className="flex justify-center items-center text-start lg:max-w-sm mx-auto">
            <p>
              High Velocity Water{" "}
              <span className="font-bold">Spray systems rapidly cool</span>{" "}
              surfaces, suppress flames, ensuring reliable, efficient fire
              control in industries.
            </p>
          </div>
        </div>
        {/* Cards Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HVWSData.map((item) => (
            <div
              key={item.id}
              className="rounded-xl transition overflow-hidden"
            >
              <img src={item.img} alt={item.title} className="w-full" />
              <div className=" h-full w-full bg-white/40"></div>
              <div className=" py-4 px-6">
                <h2 className="text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-white">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HVWS;
