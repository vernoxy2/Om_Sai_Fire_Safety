import React from "react";
import Bg from "../assets/FooterBg.webp";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import LogoName from "../assets/LogoName.svg";
import { Link } from "react-router-dom";
import BottomLine from "../assets/HeadLine.svg";
import { IoMdArrowDropright } from "react-icons/io";

// Page Links
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
    id: 2,
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
  {
    id: 2,
    title: "Fire Hydrant Systems & Hose Reels",
    slug: "hydrant-and-hose-reels",
  },
  { id: 3, title: "Smoke & Heat Detectors", slug: "detectors" },
  { id: 4, title: "Fire Doors", slug: "fire-doors" },
  { id: 5, title: "HVWS Systems", slug: "hvws-systems" },
  { id: 6, title: "Safety Signages & Accessories", slug: "safety-accessories" },
];

const Footer = () => {
  const textRef = React.useRef(null);
  const [textWidth, setTextWidth] = React.useState(0);
  const extrapx = 10;

  React.useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth + extrapx);
    }
  }, []);
  return (
    <section
      className="text-white bg-black font-alumni bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 py-10 ">
        {/* Logo & About */}
        <div>
          <div className="rounded-[4px] p-2 lg:p-3 pr-6  bg-white/60 inline-block">
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
          <h3 className="text-orange-500 font-semibold text-2xl mb-3 inline-block uppercase">
            <span ref={textRef}>Quick Links</span>
            <img
              src={BottomLine}
              alt=""
              style={{ width: textWidth + 30 + "px" }}
              className="block -mt-1"
            />
          </h3>
          <ul className="space-y-2 text-lg md:text-xl uppercase">
            {Links.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="flex gap-1 hover:text-primary-end duration-200 transition-colors"
                >
                  <span>
                    <IoMdArrowDropright className="text-3xl text-primary" />
                  </span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-orange-500 font-semibold text-2xl mb-3 inline-block uppercase">
            <span ref={textRef}>Services</span>
            <img
              src={BottomLine}
              alt=""
              style={{ width: textWidth + 30 + "px" }}
              className="block -mt-1"
            />
          </h3>
          <ul className="space-y-2 text-lg md:text-xl uppercase">
            {Services.map((item) => (
              <li key={item.id}>
                <Link
                  className="flex hover:text-primary-end duration-200 transition-colors"
                  to={item.link}
                >
                  <span>
                    <IoMdArrowDropright className="text-3xl text-primary" />
                  </span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-orange-500 font-semibold text-2xl mb-3 inline-block uppercase">
            <span ref={textRef}>Products</span>
            <img
              src={BottomLine}
              alt=""
              style={{ width: textWidth + 30 + "px" }}
              className="block -mt-1"
            />
          </h3>
          <ul className="space-y-2 text-lg md:text-xl uppercase">
            {Products.map((item) => (
              <li key={item.id}>
                <Link
                  className="flex hover:text-primary-end duration-200"
                  to={`/products/${item.slug}`}
                >
                  <span>
                    <IoMdArrowDropright className="text-3xl text-primary" />
                  </span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 border-t border-primary-start pt-6 ">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-orange-500 mt-1 text-3xl" />
          <p className="text-lg md:text-xl uppercase">
            1st Floor, E 104-105 M Cube Business Hub, Opp. Vapi Taluka Seva
            Sadan, N.H. No. 8, Balitha, Vapi, Dist Valsad, Gujarat.{" "}
            <br className="hidden 2xl:block" /> PIN - 396191
          </p>
        </div>

        <div className="flex items-start gap-3 md:mx-auto">
          <FaPhoneAlt className="text-orange-500 mt-1" />
          <p className="text-lg md:text-xl ">
            <a href="tel:+917984550077">+91 79845 50077</a> <br />
            <a href="tel:+918849592829"> +91 88495 92829</a> <br />
            <a href="tel:+919827800077"> +91 98278 00077</a>
            
          </p>
        </div>

        <a
          href="mailto:omsafiresafety77@gmail.com"
          className="flex items-start gap-3 cursor-pointer"
        >
          <FaEnvelope className="text-orange-500 mt-1" />
          <p className="text-lg md:text-xl">omsafiresafety77@gmail.com</p>
        </a>
      </div>
    </section>
  );
};

export default Footer;
