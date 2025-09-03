import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import {
  FaBuilding,
  FaHospital,
  FaIndustry,
  FaShoppingCart,
  FaWarehouse,
  FaSchool,
} from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";

const IndustriesList = [
  {
    id: 1,
    icons: <FaBuilding className="text-3xl text-primary" />,
    title: "Corporate Offices & IT Parks",
    description:
      "Advanced fire detection and suppression systems for modern office environments and technology parks.",
  },
  {
    id: 2,
    icons: <FaIndustry className="text-3xl text-primary" />,
    title: "Factories & Manufacturing Units",
    description:
      "Industrial-grade fire safety solutions designed for high-risk manufacturing environments.",
  },
  {
    id: 3,
    icons: <FaShoppingCart className="text-3xl text-primary" />,
    title: "Shopping Malls & Multiplex",
    description:
      "Comprehensive fire safety systems for large public spaces and entertainment venues.",
  },
  {
    id: 4,
    icons: <MdRestaurant className="text-3xl text-primary" />,
    title: "Hotels & Restaurants",
    description:
      "Specialized fire protection for hospitality sector with kitchen and guest safety focus.",
  },
  {
    id: 5,
    icons: <FaSchool className="text-3xl text-primary" />,
    title: "Schools & Universities",
    description:
      "Safe learning environments with age-appropriate fire safety systems and emergency protocols.",
  },
  {
    id: 6,
    icons: <FaHospital className="text-3xl text-primary" />,
    title: "Hospitals & Healthcare Facilities",
    description:
      "Critical fire safety solutions ensuring patient safety and medical equipment protection.",
  },
  {
    id: 7,
    icons: <IoHomeSharp className="text-3xl text-primary" />,
    title: "Residential Apartments & Commercial",
    description:
      "Residential and commercial building fire safety with modern detection and alarm systems.",
  },
  {
    id: 8,
    icons: <FaWarehouse className="text-3xl text-primary" />,
    title: "Warehouses & Logistics Hubs",
    description:
      "Large-scale fire protection systems for storage facilities and distribution centers.",
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="z-10 py-12 md:py-20">
      {/* Section Title */}
      <div className="mb-12 text-center">
        <PrimaryTitle gradientText="Industries" normalText="We Serve" />
      </div>

      {/* Grid of Industries */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {IndustriesList.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 duration-500 transition transform dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6">
              <div className="mb-5 p-4 bg-primary/10 rounded-lg inline-flex items-center justify-center">
                {item.icons}
              </div>
              <h5 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h5>
              <p className="text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
