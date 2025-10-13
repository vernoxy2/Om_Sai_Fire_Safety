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
    description: "Automatic water-based fire suppression for safety.",
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
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
        {AllServices.map((item, index) => (
          <div
            key={item.id}
            className={`relative rounded-xl overflow-hidden shadow-lg group
            ${index === 0 ? "xl:col-span-2 xl:row-span-2" : ""}`}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute opacity-0 hover:opacity-100 inset-0 border-b-4 border-transparent group-hover:border-Border group-hover:bg-gradient-to-t from-primary/80 to-primary-transparent transition"></div>

            {/* Text Content */}
            <div className="absolute opacity-0 group-hover:opacity-100 bottom-0 p-6 space-y-6 text-white">
              <h1 className="text-2xl md:text-7xl font-bold">{item.title}</h1>
              <p className="">{item.description}</p>
              <PrimaryButton to={item.link}>Learn More</PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
