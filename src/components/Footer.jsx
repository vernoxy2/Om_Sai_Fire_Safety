import React from "react";
import Bg from "../assets/HomePageAssets/Services/ServicesBg.webp";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import LogoName from "../assets/LogoName.svg";
import { Link } from "react-router-dom";

const Links = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About Us", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "Product", link: "/products" },
  // { id: 5, title: "Project", link: "/projects" },
];

// Services links
const Services = [
  {
    id: 1,
    title: "Fire Hydrant Systems",
    link: "/services/fire-hydrant-systems",
  },
  {
    id: 2 ,
    title: "Fire Extinguisher Services",
    link: "/services/fire-extinguisher-services",
  },
  {
    id: 3,
    title: "Fire Alarm & Detection Systems",
    link: "/services/fire-alarm-detection-systems",
  },
  {
    id: 4,
    title: "Annual Maintenance Contracts (AMC)",
    link: "/services/annual-maintenance-contracts-amc",
  },
  {
    id: 5,
    title: "Water Sprinkler System",
    link: "/services/water-sprinkler-system",
  },
  {
    id: 6,
    title: "Fire Safety Audits & Training",
    link: "/services/fire-safety-audits-training",
  },
];

// Product links mirror the Product Tabs order and slugs
const Products = [
  { id: 1, title: "ABC Powder Extinguishers", slug: "abc-powder" },
  { id: 2, title: "Fire Hydrant Systems & Hose Reels", slug: "hydrant-and-hose-reels" },
  { id: 3, title: "Smoke & Heat Detectors", slug: "detectors" },
  { id: 4, title: "Fire Doors", slug: "fire-doors" },
  { id: 5, title: "HVWS Systems", slug: "hvws-systems" },
  { id: 6, title: "Safety Signages & Accessories", slug: "safety-accessories" },
];

const Footer = () => {
  return (
    <section
      className="text-white font-alumni bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 ">
        {/* Logo & About */}
        <div>
          <div className="rounded-[4px] p-2 lg:p-3 pr-6  bg-gradient-to-r from-[#999999]/5 via-white to-white inline-block">
            <img
              src={LogoName}
              alt="Om Sai Fire Safety Logo"
              className="lg:scale-125 mx-8"
            />
          </div>
          <p className="text-lg md:text-xl mt-4 leading-relaxed">
            Your safety, our mission — delivering advanced fire protection
            systems, reliable products, and expert safety services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:mx-auto">
          <h3 className="text-orange-500 font-semibold text-2xl mb-3 border-b border-orange-500 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 text-lg md:text-xl uppercase">
            {Links.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="hover:text-orange-400 transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-orange-500 font-semibold text-2xl mb-3 border-b border-orange-500 inline-block">
            Services
          </h3>
          <ul className="space-y-2 text-lg md:text-xl uppercase">
            {Services.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-orange-500 font-semibold text-2xl mb-3 border-b border-orange-500 inline-block">
            Products
          </h3>
          <ul className="space-y-2 text-lg md:text-xl uppercase">
            {Products.map((item) => (
              <li key={item.id}>
                <Link to={`/products/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-primary-start pt-6 ">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-orange-500 mt-1" />
          <p className="text-lg md:text-xl uppercase">
            B-7M Cube Business Hub, Opp. Vapi Taluka Seva Sadan, N.H. No. 8,
            Balitha, Vapi, Dist Valsad, Gujarat. PIN - 396191
          </p>
        </div>

        <div className="flex items-start gap-3 md:mx-auto">
          <FaPhoneAlt className="text-orange-500 mt-1" />
          <p className="text-lg md:text-xl ">
            +91 98278 00077 <br /> +91 93131 74925
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FaEnvelope className="text-orange-500 mt-1" />
          <p className="text-lg md:text-xl">omsafiresafety77@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
