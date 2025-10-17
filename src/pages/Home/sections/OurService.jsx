import React from "react";
import ServicesBg from "../../../assets/HomePageAssets/Services/ServicesBg.webp";
import HeadLine from "../../../assets/HeadLine.png";
import PrimaryTitle from "../../../components/PrimaryTitle";
// Image imports
import HydrantSystems from "../../../assets/HomePageAssets/Services/HydrantSystems.webp";
import FireExtinguisherServices from "../../../assets/HomePageAssets/Services/FireExtinguisherServices.webp";
import FireAlarmDetection from "../../../assets/HomePageAssets/Services/FireAlarmDetectionSystems.webp";
import WatersprinklerSystem from "../../../assets/HomePageAssets/Services/watersprinklerSystem.webp";
import FireSafetyAudits from "../../../assets/HomePageAssets/Services/FireSafetyAuditsTraining.webp";
import AnnualMaintenanceContracts from "../../../assets/HomePageAssets/Services/AnnualMaintenanceContracts.webp";
import PrimaryButton from "../../../components/PrimaryButton";
import BaseLine from "../../../components/BaseLine";
import { link } from "framer-motion/client";

const AllServices = [
  {
    id: 1,
    title: "Pump House",
    description: "Robust firefighting infrastructure for large premises.",
    image: HydrantSystems,
    link: "/services/hydrant-systems",
  },
  {
    id: 2,
    title: "Fire Extinguisher Services",
    description: "Installation, refilling, and periodic servicing.",
    image: FireExtinguisherServices,
    link: "/services/fire-extinguisher-services",
  },
  {
    id: 3,
    title: "Fire Alarm & Detection Systems",
    description:
      "From Conventional to Advanced System Design, installation, and maintenance.",
    image: FireAlarmDetection,
    link: "/services/fire-alarm-detection-systems",
  },
  {
    id: 4,
    title: "Water Sprinkler System",
    description: "Hassle-free long-term protection for all fire systems.",
    image: WatersprinklerSystem,
    link: "/services/water-sprinkler-system",
  },
  {
    id: 5,
    title: "Hydrant Systems",
    description:
      "Compliance checks, evacuation drills, and awareness programs.",
    image: FireSafetyAudits,
    link: "/services/fire-safety-audits-training",
  },
  {
    id: 6,
    title: "Safety Training & (AMC)",
    description: "Hassle-free long-term protection for all fire systems.",
    image: AnnualMaintenanceContracts,
    link: "/services/annual-maintenance-contracts-amc",
  },
];

const OurService = () => {
  return (
    <section
      className="bg-cover bg-center relative flex flex-col gap-y-12 md:gap-y-16 py-12 md:py-20 lg:py-28"
      style={{ backgroundImage: `url(${ServicesBg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header Content */}
      <div className="relative container xl:px-24 flex flex-col gap-y-6 xl:flex-row gap-x-16 z-10 text-white">
        {/* Left Section */}
        <PrimaryTitle
          preImg={HeadLine}
          gradientText="Our"
          normalText="Services"
        />

        {/* Right Section */}
        <div className="xl:w-8/12 flex flex-col items-start md:text-left ">
          <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed lg:w-[90%]">
            At{" "}
            <span className="font-semibold">Om Sai Fire Safety Solutions,</span>{" "}
            we go beyond just supplying equipment — we provide end-to-end{" "}
            <span className="font-semibold">fire safety services</span> that
            ensure your premises are{" "}
            <span className="font-semibold">always protected.</span> From system
            design and installation to regular maintenance and safety audits,{" "}
            <span className="font-semibold">our services are tailored</span> to
            keep you{" "}
            <span className="font-semibold">
              compliant, prepared, and secure.
            </span>
          </p>
          <BaseLine />
        </div>
      </div>

      {/* Cards Section */}
      <div className=" container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
        {AllServices.map((item, index) => (
          <div
            key={item.id}
            className={`relative h-full w-full rounded-xl overflow-hidden shadow-lg group bg-white
            ${index === 0 ? "xl:col-span-2 xl:row-span-2" : ""}`}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative"
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 group-hover:border-b-4 border-transparent group-hover:border-Border bg-gradient-to-t hover:from-primary/60 to-primary-transparent transition z-0 duration-300">
              <div className="absolute  bottom-0 p-6 space-y-2 text-white z-10">
                <h1
                  className={`text-2xl md:text-3xl font-bold ${
                    index === 0 ? "xl:text-7xl" : ""
                  }`}
                >
                  {item.title}
                </h1>
                <div className="hidden group-hover:block duration-300 animate-fadeInUp space-y-2">
                  <p
                    className={`text-xl md:text-2xl ${
                      index === 0 ? "xl:text-3xl" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                  <PrimaryButton
                    to={item.link}
                    className={`text-lg md:text-2xl ${
                      index === 0 ? "xl:text-3xl" : ""
                    }`}
                  >
                    Learn More
                  </PrimaryButton>
                </div>
              </div>
            </div> */}
            <div className="absolute inset-0 group-hover:border-b-4 border-transparent group-hover:border-Border bg-gradient-to-t from-primary/50 via-transparent hover:from-primary/80 to-primary-transparent transition z-0 duration-300 hover:backdrop-blur-[2px]">
              <div className="absolute bottom-0 p-6  text-white z-10">
                <h1
                  className={`text-2xl md:text-3xl font-bold ${
                    index === 0 ? "xl:text-7xl" : ""
                  }`}
                >
                  {item.title}
                </h1>
                <div className="hidden group-hover:block duration-300 animate-fadeInUp space-y-1">
                  <p
                    className={`text-xl md:text-2xl ${
                      index === 0 ? "xl:text-3xl" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                  <PrimaryButton
                    to={item.link}
                    className={` lg:text-lg ${
                      index === 0 ? "xl:text-3xl" : ""
                    }`}
                  >
                    Learn More
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
