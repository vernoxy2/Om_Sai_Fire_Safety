import React from "react";
import { Link } from "react-router-dom";
import { useMetaTags } from "../../hooks/useMetaTags";
import GradientText from "../../components/GradientText";
import SafetySolution from "../../components/SafetySolution";
import { IoMdArrowDropright } from "react-icons/io";
import { FaHome, FaShieldAlt, FaTools, FaBoxes, FaBuilding, FaPhoneAlt, FaSitemap } from "react-icons/fa";

const SITEMAP_SECTIONS = [
  {
    title: "Main Navigation",
    icon: FaHome,
    links: [
      { name: "Home Page", path: "/", desc: "Welcome to Om Sai Fire Safety Solutions" },
      { name: "About Us", path: "/about", desc: "Our mission, vision, directors, and client trust" },
      { name: "Services Overview", path: "/services", desc: "Comprehensive fire protection & maintenance services" },
      { name: "Products Catalog", path: "/products", desc: "Certified fire safety products & PPE equipment" },
      { name: "Projects & Portfolio", path: "/projects", desc: "Turnkey installations & maintenance achievements" },
      { name: "Contact Us", path: "/contact", desc: "Get in touch, address, map & free quote requests" },
    ],
  },
  {
    title: "Fire Safety Services",
    icon: FaTools,
    links: [
      { name: "Fire Hydrant Systems", path: "/services/fire-hydrant-systems", desc: "High-pressure hydrant piping & pump rooms" },
      { name: "Fire Extinguisher Services", path: "/services/fire-extinguisher-services", desc: "Supply, installation & refilling services" },
      { name: "Fire Alarm & Detection Systems", path: "/services/fire-alarm-detection-systems", desc: "Smoke, heat, and alarm panel installation" },
      { name: "Automatic Water Sprinkler System", path: "/services/water-sprinkler-system", desc: "Automated overhead fire suppression" },
      { name: "Fire Safety Audits & Training", path: "/services/fire-safety-audits-training", desc: "Safety compliance & hands-on staff drills" },
      { name: "Annual Maintenance Contracts (AMC)", path: "/services/annual-maintenance-contracts-amc", desc: "Regular testing & preventive maintenance" },
    ],
  },
  {
    title: "Fire Protection Products",
    icon: FaBoxes,
    links: [
      { name: "ABC Powder Extinguishers", path: "/products/abc-powder", desc: "Multi-purpose Class A, B, C fire extinguishers" },
      { name: "Hydrant & Hose Reels", path: "/products/hydrant-and-hose-reels", desc: "Fire hoses, landing valves & nozzle branch pipes" },
      { name: "Smoke & Heat Detectors", path: "/products/detectors", desc: "Addressable optical sensors & manual call points" },
      { name: "Fire Rated Doors", path: "/products/fire-doors", desc: "Emergency exit steel doors & panic hardware" },
      { name: "HVWS Systems", path: "/products/hvws-systems", desc: "High velocity water spray transformer protection" },
      { name: "Safety Signages & Accessories", path: "/products/safety-accessories", desc: "Safety shoes, helmets, PPE & glow signages" },
    ],
  },
  {
    title: "Company & Support",
    icon: FaBuilding,
    links: [
      { name: "Request Safety Assessment", path: "/contact", desc: "Book an emergency inspection or product inquiry" },
      { name: "Headquarters & Office Address", path: "/contact", desc: "Vapi, Gujarat corporate office & warehouse" },
      { name: "WhatsApp Direct Chat", path: "https://wa.me/919827800077", external: true, desc: "Instant consultation via mobile WhatsApp" },
      { name: "XML Sitemap File", path: "/sitemap.xml", external: true, desc: "Raw XML feed for search engine crawlers" },
    ],
  },
];

const Sitemap = () => {
  useMetaTags({
    title: "HTML Sitemap – Website Navigation | Om Sai Fire Safety",
    description: "Browse the complete visual sitemap of Om Sai Fire Safety. Quickly locate pages for fire extinguishers, alarm systems, maintenance AMC, safety gear, and contact details.",
    keywords: "sitemap, Om Sai Fire Safety sitemap, website navigation, fire safety services index, fire safety products list",
    url: "https://omsaifiresafteysolutions.com/sitemap",
  });

  return (
    <div className="bg-black text-white font-alumni min-h-screen pt-28 pb-16">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-lg md:text-xl text-gray-400">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <FaHome className="text-primary text-base" /> Home
          </Link>
          <span className="text-primary-start font-bold">/</span>
          <span className="text-primary font-semibold">Sitemap</span>
        </nav>
      </div>

      {/* Hero / Page Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="border-l-4 border-primary-start pl-4 md:pl-6 bg-gradient-to-r from-zinc-900/90 to-black p-6 rounded-r-xl shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <FaSitemap className="text-primary text-3xl md:text-4xl" />
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide">
              Visual <GradientText>Sitemap</GradientText>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Navigate through our complete index of industrial fire safety products, installation services, AMC programs, and corporate information.
          </p>
        </div>
      </div>

      {/* Sitemap Content Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {SITEMAP_SECTIONS.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div
              key={idx}
              className="bg-zinc-950/80 border border-primary-start/30 hover:border-primary-start rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-primary-start/40">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center text-white shadow-md">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-orange-500">
                    {section.title}
                  </h2>
                </div>

                <ul className="space-y-4">
                  {section.links.map((item, lIdx) => (
                    <li key={lIdx} className="group">
                      {item.external ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 rounded-xl bg-zinc-900/50 hover:bg-gradient-to-r hover:from-primary-start/30 hover:to-transparent border border-transparent hover:border-primary-start/40 transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xl md:text-2xl font-semibold uppercase text-white group-hover:text-primary flex items-center gap-1">
                              <IoMdArrowDropright className="text-primary text-2xl group-hover:translate-x-1 transition-transform" />
                              {item.name}
                            </span>
                            <span className="text-xs uppercase bg-primary-start/40 text-orange-300 px-2 py-0.5 rounded border border-primary-start/50">
                              External
                            </span>
                          </div>
                          {item.desc && (
                            <p className="text-base text-gray-400 pl-6 mt-0.5 group-hover:text-gray-200">
                              {item.desc}
                            </p>
                          )}
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          className="block p-3 rounded-xl bg-zinc-900/50 hover:bg-gradient-to-r hover:from-primary-start/30 hover:to-transparent border border-transparent hover:border-primary-start/40 transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xl md:text-2xl font-semibold uppercase text-white group-hover:text-primary flex items-center gap-1">
                              <IoMdArrowDropright className="text-primary text-2xl group-hover:translate-x-1 transition-transform" />
                              {item.name}
                            </span>
                          </div>
                          {item.desc && (
                            <p className="text-base text-gray-400 pl-6 mt-0.5 group-hover:text-gray-200">
                              {item.desc}
                            </p>
                          )}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Safety Solution Call-to-action */}
      <SafetySolution />
    </div>
  );
};

export default Sitemap;
