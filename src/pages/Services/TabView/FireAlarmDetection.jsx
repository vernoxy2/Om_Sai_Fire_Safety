import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import Img1 from "../../../assets/ServicesPageAssets/TebView/Alarm/Img1.webp";
import Img2 from "../../../assets/ServicesPageAssets/TebView/Alarm/Img2.webp";
import Img3 from "../../../assets/ServicesPageAssets/TebView/Alarm/Img3.webp";
import RightImg from "../../../assets/ServicesPageAssets/TebView/Alarm/Right.webp";
import LeftImg from "../../../assets/ServicesPageAssets/TebView/Alarm/Left.webp";
import GradientText from "../../../components/GradientText";
import BaseLine from "../../../components/BaseLine";

const data = [
  {
    id: 1,
    img: Img1,
    title: "Smoke detectors",
    desc: "Smoke Detectors – Reliable devices that quickly sense smoke and provide early alerts, ensuring safety and timely response in homes, offices, and industries.",
  },
  {
    id: 2,
    img: Img2,
    title: "Panels & alarms",
    desc: "Professional Installation & Testing – Expertly installed fire hydrant systems with thorough inspections and pressure testing to ensure safety, reliability, and long-term performance.",
  },
  {
    id: 3,
    img: Img3,
    title: "system integration",
    desc: "Regular Maintenance & ComplianceRoutine checks ensure hydrant systems stay reliable, safe, and code-compliant. Fire Alarm & Detection Smoke detectors, panels, and alarms for quick fire response.",
  },
];

const FireAlarmDetection = () => {
  return (
    <div>
      {/* Fire Alarm Detection Service Tab */}
      <section>
        {/* main container */}
        <div className="container space-y-16">
          {/* Headline Content */}
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <PrimaryTitle
                gradientText={"FIRE ALARM &   "}
                normalText={"DETECTION SYSTEMS"}
                titleClassName="text-start w-[80%]"
              />
            </div>
            <div className="flex flex-col justify-center  text-start lg:pe-32">
              <p>
                Our{" "}
                <span className="font-semibold">
                  advanced fire alarm and detection systems
                </span>{" "}
                provide early smoke and heat alerts, integrate with sprinklers,
                and ensure quick emergency response—protecting lives and
                property in homes, offices, and industries.
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

                {/* Overlay (bottom text area) */}
                <div className="absolute bottom-0 left-0 w-full bg-[#565656]/70 backdrop-blur-[2px]  text-start">
                  <div className="flex items-center gap-3">
                    <span className="bg-gradient-to-l from-primary to-primary-start/80 bg-primary px-4 py-2 -mt-6">
                      <h1 className="text-3xl font-bold text-white">
                        {item.title}
                      </h1>
                    </span>
                  </div>
                  <p className="text-2xl text-white px-5 py-5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image With Text */}
        <div className="container px-0 mt-24 relative">
          <img
            src={RightImg}
            alt=""
            className="w-full h-full object-scale lg:object-cover xl:rounded-xl min-h-[200px]  lg:h-auto"
          />
          <div className="xl:absolute bottom-0 lg:right-0 lg:h-full xl:max-w-md bg-[#2a2a2a]/80 backdrop-blur-[2px] px-8 text-start flex flex-col gap-3 lg:gap-5 justify-center items-center py-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-start">
              <GradientText className="">
                conventional fire alarm system
              </GradientText>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-startl">
              A conventional fire alarm system is a reliable and cost-effective
              solution for small to medium-sized premises. It divides the
              protected area into zones, allowing the source of fire to be
              identified by zone rather than by exact location. This system
              provides timely alerts through detectors, call points, and
              sounders, ensuring occupants can evacuate safely during
              emergencies. Ideal for offices, schools, warehouses, and small
              industrial units
            </p>
          </div>
        </div>

        {/* Image With Text */}
        <div className="container px-0 mt-24 relative">
          <img
            src={LeftImg}
            alt=""
            className="w-full h-full object-scale xl:object-cover xl:rounded-xl min-h-[200px] lg:h-auto"
          />
          <div className="xl:absolute bottom-0 xl:left-0 xl:h-full xl:max-w-md bg-[#2a2a2a]/80 backdrop-blur-[2px] px-8 text-start flex flex-col gap-3 lg:gap-5 justify-center items-center py-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-start">
              <GradientText className="">
                addressable fire alarm system
              </GradientText>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-center xl:text-startl">
              An addressable fire alarm system offers advanced fire detection
              and pinpoint accuracy. Unlike conventional systems, it identifies
              the exact location of a triggered device, such as a smoke detector
              or call point, making emergency response faster and more
              efficient. This intelligent system is ideal for large buildings,
              hospitals, hotels, and industrial facilities where quick
              identification and detailed monitoring are critical for safety
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FireAlarmDetection;
