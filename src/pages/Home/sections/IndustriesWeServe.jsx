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
import GradientText from "../../../components/GradientText";
import UnderLine from "../../../assets/UnderLine.svg";
import UnderLineWhite from "../../../assets/UnderLineWhite.svg";

const IndustriesList = [
  {
    id: 1,
    icons: <FaBuilding className="text-3xl text-primary" />,
    title: (
      <>
        Corporate Offices & <br className="hidden lg:block" /> IT Parks
      </>
    ),
    description:
      "Advanced fire detection and suppression systems for modern office environments and technology parks.",
  },
  {
    id: 2,
    icons: <FaIndustry className="text-3xl text-primary" />,
    title: (
      <>
        Factories & <br className="hidden lg:block" /> Manufacturing Units
      </>
    ),
    description:
      "Industrial-grade fire safety solutions designed for high-risk manufacturing environments.",
  },
  {
    id: 3,
    icons: <FaShoppingCart className="text-3xl text-primary" />,
    title: (
      <>
        Shopping Malls & <br className="hidden lg:block" /> Multiplex
      </>
    ),
    description:
      "Comprehensive fire safety systems for large public spaces and entertainment venues.",
  },
  {
    id: 4,
    icons: <MdRestaurant className="text-3xl text-primary" />,
    title: (
      <>
        Hotels & <br className="hidden lg:block" /> Restaurants
      </>
    ),
    description:
      "Specialized fire protection for hospitality sector with kitchen and guest safety focus.",
  },
  {
    id: 5,
    icons: <FaSchool className="text-3xl text-primary" />,
    title: (
      <>
        Schools & <br className="hidden lg:block" /> Universities
      </>
    ),
    description:
      "Safe learning environments with age-appropriate fire safety systems and emergency protocols.",
  },
  {
    id: 6,
    icons: <FaHospital className="text-3xl text-primary" />,
    title: (
      <>
        Hospitals & <br className="hidden lg:block" /> Healthcare Facilities
      </>
    ),
    description:
      "Critical fire safety solutions ensuring patient safety and medical equipment protection.",
  },
  {
    id: 7,
    icons: <IoHomeSharp className="text-3xl text-primary" />,
    title: (
      <>
        Residential Apartments & <br className="hidden xl:block" /> Commercial
        Buildings
      </>
    ),
    description:
      "Residential and commercial building fire safety with modern detection and alarm systems.",
  },
  {
    id: 8,
    icons: <FaWarehouse className="text-3xl text-primary" />,
    title: (
      <>
        Warehouses & <br className="hidden lg:block" /> Logistics Hubs
      </>
    ),
    description:
      "Large-scale fire protection systems for storage facilities and distribution centers.",
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="z-10 py-12 md:py-20">
      {/* Section Title */}
      <div className="container">
        <div className="mb-12 text-center lg:w-5/12">
        <PrimaryTitle gradientText="Industries" normalText="We Serve" />
      </div>

      </div>

      {/* Grid of Industries */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {IndustriesList.map((item) => (
          <div
            key={item.id}
            className="bg-white group hover:bg-gradient-to-t from-primary to-primary-start rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 duration-500 transition transform dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6">
              <div className="mb-5 p-4 bg-primary/10 duration-500 group-hover:bg-white rounded-lg inline-flex items-center justify-center">
                {item.icons}
              </div>
              <h5 className="text-3xl font-bold text-gray-900 group-hover:text-white dark:text-white mb-3 tracking-tight">
                <GradientText>{item.title}</GradientText>
              </h5>
              <p className="text-gray-700 group-hover:text-white duration-500 dark:text-gray-400 text-2xl">
                {item.description}
              </p>
            </div>
            {/* underline swap on hover */}
            <img
              src={UnderLine}
              alt=""
              className="ml-auto mb-6 my-auto block group-hover:hidden"
            />
            <img
              src={UnderLineWhite}
              alt=""
              className="ml-auto mb-6 my-auto hidden group-hover:block"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
