import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import Img1 from "../../../assets/ServicesPageAssets/TebView/Hydrant/Img1.webp";
import Img2 from "../../../assets/ServicesPageAssets/TebView/Hydrant/Img2.webp";
import Img3 from "../../../assets/ServicesPageAssets/TebView/Hydrant/Img3.webp";
import RightImg from "../../../assets/ServicesPageAssets/TebView/Hydrant/Right.webp";
import LeftImg from "../../../assets/ServicesPageAssets/TebView/Hydrant/Left.webp";
import GradientText from "../../../components/GradientText";

const data = [
  {
    id: 1,
    img: Img1,
    title: "Design",
    desc: "Custom fire hydrant layouts with strategic placement and the right equipment—ensuring compliance, safety, and reliable emergency response.",
  },
  {
    id: 2,
    img: Img2,
    title: "Installation",
    desc: "Professional Installation & Testing – Expertly installed fire hydrant systems with thorough inspections and pressure testing to ensure safety, reliability, and long-term performance.",
  },
  {
    id: 3,
    img: Img3,
    title: "Maintenance",
    desc: "Regular Maintenance & ComplianceRoutine checks ensure hydrant systems stay reliable, safe, and code-compliant. Fire Alarm & Detection Smoke detectors, panels, and alarms for quick fire response.",
  },
];

const FireHydrant = () => {
  return (
    <div>
      {/* fire hydrant service Tab */}
      <section>
        {/* main container */}
        <div className="container space-y-16">
          {/* Headline Content */}
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="w-5/12">
              <PrimaryTitle
                gradientText={"Fire Hydrant "}
                normalText={"Systems"}
                titleClassName="text-start lg:pe-12"
              />
            </div>
            <div className="w-7/12 flex justify-center items-center text-start lg:pe-32">
              <p>
                We design and install custom{" "}
                <span className="font-semibold">
                  fire hydrant systems tailored
                </span>{" "}
                to your site, ensuring full{" "}
                <span className="font-semibold">
                  compliance with fire safety codes.
                </span>{" "}
                From planning to execution, our solutions are built for
                reliability and rapid{" "}
                <span className="font-semibold">emergency response.</span>
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
          <img src={RightImg} alt="" className="w-full h-full object-cover lg:rounded-xl min-h-[600px] lg:h-auto" />
          <div className="absolute bottom-0 lg:right-0 lg:h-full lg:max-w-md bg-black/90 px-8 text-start flex flex-col gap-3 lg:gap-5 justify-center items-center py-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              <GradientText className="">
                Commercial Building Hydrant Systems
              </GradientText>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-start">
              Engineered for large complexes, offices, factories, and
              warehouses, these systems are designed to handle high-risk
              environments. They feature robust hydrant layouts, heavy-duty
              equipment, and advanced safety compliance to protect people,
              property, and business continuity.
            </p>
          </div>
        </div>

        {/* Image With Text */}
        <div className="container px-0 mt-24 relative">
          <img src={LeftImg} alt="" className="w-full h-full object-cover lg:rounded-xl min-h-[600px] lg:h-auto" />
          <div className="absolute bottom-0 lg:left-0 lg:h-full lg:max-w-md bg-black/90 px-8 text-start flex flex-col gap-3 lg:gap-5 justify-center items-center py-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              <GradientText className="">
                Residential Fire Hydrant Systems
              </GradientText>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-startl">
              Specially designed for housing societies, apartments, and
              residential communities, these systems ensure quick water access,
              reliable coverage, and code compliance. They provide tailor-made
              protection for families and neighborhoods with user-friendly
              operation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FireHydrant;
