import React from "react";
import Bg from "../assets/HomePageAssets/Services/ServicesBg.webp";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import LogoName from "../assets/LogoName.svg";

const style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
};

const Footer = () => {
  return (
    <section style={style} className="text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="rounded-[4px] p-1 md:p-2 lg:p-3 pr-2 md:pr-6 bg-gradient-to-l from-[#d6d6d6] to-transparent">
            <img src={LogoName} alt="Logo" className="lg:scale-125" />
          </div>
          <p className="text-2xl ">
            Your safety, our mission delivering advanced fire protection
            systems, reliable products, and expert safety services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-500 font-bold text-lg mb-3 border-b border-orange-500 inline-block">
            QUICK LINK
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">Services</li>
            <li className="hover:text-orange-400 cursor-pointer">Product</li>
            <li className="hover:text-orange-400 cursor-pointer">Project</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-orange-500 font-bold text-lg mb-3 border-b border-orange-500 inline-block">
            SERVICES
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Hydrant Systems</li>
            <li>Fire Extinguisher Services</li>
            <li>Fire Alarm & Detection Systems</li>
            <li>Annual Maintenance Contracts (AMC)</li>
            <li>Fire Safety Audits & Training</li>
            <li>Water Sprinkler System</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-orange-500 font-bold text-lg mb-3 border-b border-orange-500 inline-block">
            PRODUCTS
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Fire Extinguishers</li>
            <li>HVWS Systems</li>
            <li>Fire Alarm Systems</li>
            <li>Fire Hydrant & Sprinkler Systems</li>
            <li>Fire Door</li>
            <li>Safety Accessories</li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-700 pt-6">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-orange-500 mt-1" />
          <p className="text-sm text-gray-300">
            B-7M Cube Business Hub, Opp. Vapi Taluka Seva Sadan, N.H. No. 8,
            Balitha, Vapi, Dist Valsad, Gujarat. PIN - 396191
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FaPhoneAlt className="text-orange-500 mt-1" />
          <p className="text-sm text-gray-300">
            +91 98278 00077 <br /> +91 93131 74925
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FaEnvelope className="text-orange-500 mt-1" />
          <p className="text-sm text-gray-300">omsafiresafety77@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
