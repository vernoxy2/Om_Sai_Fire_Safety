import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import Img1 from "../../../assets/ServicesPageAssets/TebView/Sprinkler/Img1.webp";
import Img2 from "../../../assets/ServicesPageAssets/TebView/Sprinkler/Img2.webp";
import Img3 from "../../../assets/ServicesPageAssets/TebView/Sprinkler/Img3.webp";
import RightImg from "../../../assets/ServicesPageAssets/TebView/FE/Right.webp";
import GradientText from "../../../components/GradientText";
import BaseLine from "../../../components/BaseLine";

const data = [
  {
    id: 1,
    img: Img1,
    title: "System design",
    desc: "Smoke Detectors – Reliable devices that quickly sense smoke and provide early alerts, ensuring safety and timely response in homes, offices, and industries.",
  },
  {
    id: 2,
    img: Img2,
    title: "Regular testing",
    desc: "Professional Installation & Testing – Expertly installed fire hydrant systems with thorough inspections and pressure testing to ensure safety, reliability, and long-term performance.",
  },
  {
    id: 3,
    img: Img3,
    title: "Suitable for industrial",
    desc: "Regular Maintenance & Compliance Routine checks ensure hydrant systems stay reliable, safe, and code-compliant. Fire Alarm & Detection Smoke detectors, panels, and alarms for quick fire response.",
  },
];

const AutomaticSprinkler = () => {
  return (
    <div>
      {/* Automatic Sprinkler Service Tab */}
      <section>
        {/* main container */}
        <div className="container space-y-16">
          {/* Headline Content */}
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <PrimaryTitle
                gradientText={"AUTOMATIC   "}
                normalText={"SPRINKLER SYSTEMS"}
                titleClassName="text-start"
              />
            </div>
            <div className="flex justify-center flex-col text-start lg:pe-32">
              <p>
                We provide automatic sprinkler solutions designed to contain fires instantly
              </p>
              <BaseLine/>
            </div>
          </div>

          {/* Cards Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item) => (
              <div
                key={item.id}
                className="relative hover:-translate-y-5 rounded-xl duration-500 transition overflow-hidden"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Bottom Text */}
                <div className="absolute bottom-0 left-0 w-full bg-[#565656]/70 backdrop-blur-[2px] px-5 py-9 text-start">
                  <p className="text-2xl">{item.desc}</p>
                </div>

                {/* Title ABOVE the black box */}
                <div className="absolute bottom-[180px] left-0 px-3 py-1.5 bg-primary">
                  <h1 className="text-3xl font-bold">{item.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </section>
    </div>
  );
};

export default AutomaticSprinkler;
