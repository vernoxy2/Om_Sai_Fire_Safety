import React from "react";

import PrimaryTitle from "../../../components/PrimaryTitle";
import Img1 from "../../../assets/ServicesPageAssets/TebView/Training/Img1.webp";
import Img2 from "../../../assets/ServicesPageAssets/TebView/Training/Img2.webp";
import Img3 from "../../../assets/ServicesPageAssets/TebView/Training/Img3.webp";
import RightImg from "../../../assets/ServicesPageAssets/TebView/FE/Right.webp";
import GradientText from "../../../components/GradientText";

const data = [
  {
    id: 1,
    img: Img1,
    title: " Awareness Programs",
    desc: "Interactive fire safety sessions that equip people with knowledge, safe practices, and confidence to act responsibly during emergencies.",
  },
  {
    id: 2,
    img: Img2,
    title: "Evacuation Drills",
    desc: "We train people to evacuate quickly, calmly, and safely during fire emergencies, practicing routes, assembly points, and real-time response under expert guidance.",
  },
  {
    id: 3,
    img: Img3,
    title: "Prevention & Preparedness",
    desc: "We help organizations stay fire-ready with inspections, safety planning, equipment checks, and training preventing risks, strengthening awareness, and ensuring workplaces are fully prepared for emergencies.",
  },
];

const FireSafetyAuditsTraining = () => {
  return (
    <div>
      {/* Fire Safety Audits & Training */}
      <section>
        {/* main container */}
        <div className="container space-y-16">
          {/* Headline Content */}
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <PrimaryTitle
                gradientText={"Fire Safety Audits"}
                normalText={"& Training"}
                titleClassName="text-start"
              />
            </div>
            <div className="flex justify-center items-center text-start lg:pe-32">
              <p>
                Our team conducts on-site audits and training programs to improve fire readiness
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
      <div className="container px-0 mt-24 relative ">
        <img
          src={RightImg}
          alt=""
          className="w-full h-full object-cover lg:rounded-xl min-h-[600px] lg:h-auto"
        />
        <div className="absolute bottom-0 lg:right-0 lg:h-full lg:max-w-md bg-black/90 px-8 text-start flex flex-col gap-3 lg:gap-5 justify-center items-center py-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl"><GradientText className="">
            Right Extinguisher for Your Needs
          </GradientText></h1>
          <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-start">
            Choosing the correct fire extinguisher is crucial for effective
            safety. We assess your space, potential fire hazards, and specific
            requirements to recommend the most suitable extinguisher.{" "}
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-start">
            Our expert guidance ensures you are fully prepared for any
            emergency.
          </p>
        </div>
      </div>
      </section>
    </div>
  );
};

export default FireSafetyAuditsTraining;
