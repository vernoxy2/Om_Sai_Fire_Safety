import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import Img1 from "../../../assets/ServicesPageAssets/TebView/Alarm/Img1.webp";
import Img2 from "../../../assets/ServicesPageAssets/TebView/Alarm/Img2.webp";
import Img3 from "../../../assets/ServicesPageAssets/TebView/Alarm/Img3.webp";
import RightImg from "../../../assets/ServicesPageAssets/TebView/Alarm/Right.webp";
import LeftImg from "../../../assets/ServicesPageAssets/TebView/Alarm/Left.webp";
import GradientText from "../../../components/GradientText";

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
                titleClassName="text-start lg:pe-52"
              />
            </div>
            <div className="flex justify-center items-center text-start lg:pe-32">
              <p>
                Our{" "}
                <span className="font-semibold">
                  advanced fire alarm and detection systems
                </span>{" "}
                provide early smoke and heat alerts, integrate with sprinklers,
                and ensure quick emergency response—protecting lives and
                property in homes, offices, and industries.
              </p>
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
                <div className="absolute bottom-0 left-0 w-full bg-black/90 px-5 py-9 text-start">
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

        {/* Image With Text */}
        <div className="container px-0 mt-24 relative">
          <img
            src={RightImg}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 right-0 h-full max-w-md bg-black/90 px-9 text-start flex flex-col gap-5 justify-center items-center">
            <h1 className="text-6xl">
              <GradientText className="">
                conventional fire alarm system
              </GradientText>
            </h1>
            <p className="text-2xl">
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
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 h-full max-w-md bg-black/90 px-9 text-start flex flex-col gap-5 justify-center items-center">
            <h1 className="text-6xl">
              <GradientText className="">
                addressable fire alarm system
              </GradientText>
            </h1>
            <p className="text-2xl">
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
