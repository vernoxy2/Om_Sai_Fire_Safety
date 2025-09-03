import React from "react";
import ServicesBg from "../../../assets/HomePageAssets/Services/ServicesBg.webp";
import GradientText from "../../../components/GradientText";
import HeadLine from "../../../assets/HeadLine.png";
import PrimaryTitle from "../../../components/PrimaryTitle";
import HydrantSystems from "../../../assets/HomePageAssets/Services/HydrantSystems.webp";
import FireExtinguisherServices from "../../../assets/HomePageAssets/Services/FireExtinguisherServices.webp";
import FireAlarmDetection from "../../../assets/HomePageAssets/Services/FireAlarmDetectionSystems.webp";
import WatersprinklerSystem from "../../../assets/HomePageAssets/Services/watersprinklerSystem.webp";
import FireSafetyAudits from "../../../assets/HomePageAssets/Services/FireSafetyAuditsTraining.webp";
import AnnualMaintenanceContracts from "../../../assets/HomePageAssets/Services/AnnualMaintenanceContracts.webp";

const AllServices = [
  {
    id: 1,
    title: "Hydrant Systems",
    description: "Robust firefighting infrastructure for large premises.",
    image: HydrantSystems,
  },
  {
    id: 2,
    title: "Fire Extinguisher Services",
    description: "Installation, refilling, and periodic servicing.",
    image: FireExtinguisherServices,
  },
  {
    id: 3,
    title: "Fire Alarm & Detection Systems",
    description:
      "From Conventional to Advanced System Design, installation, and maintenance.",
    image: FireAlarmDetection,
  },
  {
    id: 4,
    title: "Water Sprinkler System",
    description: "Hassle-free long-term protection for all fire systems..",
    image: WatersprinklerSystem,
  },
  {
    id: 5,
    title: "Fire Safety Audits & Training",
    description:
      "Compliance checks, evacuation drills, and awareness programs.",
    image: FireSafetyAudits,
  },
  {
    id: 6,
    title: "Annual Maintenance Contracts (AMC)",
    description: "Hassle-free long-term protection for all fire systems.",
    image: AnnualMaintenanceContracts,
  },
];

const OurService = () => {
  return (
    <section
      className="bg-cover bg-center relative flex items-center justify-center flex-col gap-y-6 md:gap-y-12 py-12 md:py-16 lg:py-24"
      style={{ backgroundImage: `url(${ServicesBg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header Content */}
      <div className="relative  w-full container xl:px-24 flex flex-col gap-y-6 xl:flex-row gap-x-24 z-10 text-center text-white">
        {/* Left Section */}

        <PrimaryTitle
          preImg={HeadLine}
          gradientText="Our"
          normalText="Services"
        ></PrimaryTitle>
        {/* Right Section */}
        <div className="xl:w-8/12 flex flex-col items-start md:text-left">
          <p className="text-xl md:text-3xl">
            At{" "}
            <span className="font-semibold">Om Sai Fire Safety Solutions,</span>{" "}
            we go beyond just supplying equipment we provide end-to-end{" "}
            <span className="font-semibold">fire safety services</span> that
            ensure your premises are{" "}
            <span className="font-semibold">always protected.</span> From system
            design and installation to regular maintenance and safety audits,{" "}
            <span className="font-semibold">our services are tailored</span> to
            keep you{" "}
            <span className="font-semibold">
              compliant, prepared, and secure at all.
            </span>
            times.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-14 z-10">
        {AllServices.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center gap-4 
        ${index === 0 ? "xl:col-span-2 xl:row-span-2" : ""}`}
          >
            <img src={item.image} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
