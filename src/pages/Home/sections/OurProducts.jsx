import React from "react";
import ProductsBg from "../../../assets/HomePageAssets/Products/ProductsBg.webp";
import PrimaryTitle from "../../../components/PrimaryTitle";
import FireExtinguishers from "../../../assets/HomePageAssets/Products/FireExtinguishers.webp";
import HVWsSystems from "../../../assets/HomePageAssets/Products/HVWsSystems.webp";
import FireAlarmSystems from "../../../assets/HomePageAssets/Products/FireAlarmSystems.webp";
import FireHydrantSprinklerSystems from "../../../assets/HomePageAssets/Products/FireHydrantSprinklerSystems.webp";
import FireDoor from "../../../assets/HomePageAssets/Products/FireDoor.webp";
import SafetyAccessories from "../../../assets/HomePageAssets/Products/SafetyAccessories.webp";
import IndustriesWeServe from "./IndustriesWeServe";
import PrimaryButton from "../../../components/PrimaryButton";
import { Link } from "react-router-dom";
import BaseLine from "../../../components/BaseLine";

const Style = {
  backgroundImage: `url(${ProductsBg})`,
  backgroundSize: "cover",
  backgroundHight: "100vh",
};

const AllProducts = [
  {
    id: 1,
    title: "Fire Extinguishers",
    description: "ABC, CO₂, Foam, Water, and Clean Agent types.",
    image: FireExtinguishers,
    Link: "/products/abc-powder",
  },
  {
    id: 2,
    title: "HVWs Systems",
    description: "Heavy-duty firefighting infrastructure.",
    image: HVWsSystems,
    Link: "/products/hvws-systems",
  },
  {
    id: 3,
    title: "Fire Alarm Systems",
    description: "Smoke detectors, heat detectors, control panels, and sirens.",
    image: FireAlarmSystems,
    Link: "/products/detectors",
  },
  {
    id: 4,
    title: (
      <>
        Fire Hydrant & <br /> Sprinkler Systems
      </>
    ),
    description: "ABC, CO₂, Foam, Water, and Clean Agent types.",
    image: FireHydrantSprinklerSystems,
    Link: "/products/hydrant-and-hose-reels",
  },
  {
    id: 5,
    title: "Fire Door",
    description: "ABC, CO₂, Foam, Water, and Clean Agent types.",
    image: FireDoor,
    Link: "/products/fire-doors",
  },
  {
    id: 6,
    title: "Safety Accessories",
    description: "Signages, exit lights, fire blankets, safety gear.",
    image: SafetyAccessories,
    Link: "/products/safety-accessories",
  },
];

const OurProducts = () => {
  return (
    <section
      className="bg-cover bg-center relative flex items-center justify-center flex-col gap-y-6 md:gap-y-12 py-12 md:py-16 lg:py-24"
      style={Style}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header Content */}
      <div className="relative  w-full container xl:px-24 flex flex-col-reverse gap-y-6 xl:flex-row gap-x-24 z-10 text-center text-white">
        {/* Right Section */}
        <div className="xl:w-8/12 flex flex-col items-start md:text-right">
          <p className="text-xl md:text-3xl ">
            We supply a comprehensive range of{" "}
            <span className="font-semibold">ISI/BIS-certified fire safety</span>{" "}
            products designed for homes, businesses, and industries. Each
            product is <span className="font-semibold">carefully chosen </span>
            for its reliability, durability, and compliance with safety
            standards, giving you complete{" "}
            <span className="font-semibold">
              confidence in your fire protection
            </span>{" "}
            systems.
          </p>
          <BaseLine className="ml-auto" />
        </div>
        {/* Left Section */}

        <PrimaryTitle
          gradientText="Our"
          normalText="Products"
          imgClassName="-scale-x-100 w-full flex justify-end"
        ></PrimaryTitle>
      </div>

      {/* Products */}
      <div className="container z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 gap-y-20 mt-12 md:mt-16 lg:mt-24 lg:pb-24">
        {AllProducts.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col justify-top items-center gap-4 relative "
          >
            {/* Product Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Info Card */}
            <div className="absolute -bottom-12 w-[90%] transform transition-transform duration-500 ease-in-out delay-75 group-hover:-translate-y-16 flex flex-col items-start justify-start p-4 bg-gradient-to-r from-primary-start/90 to-primary-start/40 border-l-[3px] border-Border backdrop-blur-sm">
              <div className="flex  justify-between items-start w-full ">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
                  {product.title}
                </h1>
                <PrimaryButton
                  to={product.Link}
                  linkClassName="text-lg sm:text-xl md:text-2xl"
                  className="-translate-y-4 sm:-translate-y-6 md:-translate-y-8 translate-x-3 sm:translate-x-5 md:translate-x-7"
                >
                  Learn More
                </PrimaryButton>
              </div>

              <p className="text-base md:text-xl xl:text-lg 2xl:text-xl flex ">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Industries We Serve */}
      <IndustriesWeServe />
    </section>
  );
};

export default OurProducts;
