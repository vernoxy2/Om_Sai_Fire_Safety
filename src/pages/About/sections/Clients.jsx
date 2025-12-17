import React from "react";
import Bg from "../../../assets/HomePageAssets/Products/ProductsBg.webp";
import PrimaryTitle from "../../../components/PrimaryTitle";

const style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
};

const clientsGroup1 = [
  "H.V Connecting Infra Pvt. Ltd",
  "Billets Elektre Work",
  "Gavli Developers Premal Deep Square",
  "K. K Cinema Silvassa",
  "Haveli Entertainments Pvt Ltd",
  "Shreeji Developers",
  "Rashi Enterprise",
  "Alpla India Pvt. Ltd",
  "Intech Healthcar Intech Healthcar",
  "Vivan Chemical",
  "Chhatra Preeti Estate Pvt Ltd",
  "Bhanu Venture Dhanoli",
  "Hemani Intermediates Private Limited",
  "Jhaveri Spices Pvt Ltd",
  "Unitec Fibers Ltd",
];

const clientsGroup2 = [
  "Bhanu Venture Group",
  "Treat Resort",
  "Ram Enterprise Group",
  "Chhatra Preeti Estate Pvt Ltd.",
  "MAST MASALA",
  "Kunal Printing & Packaging Pvt Ltd",
  "Jiten Agro Land & Farm Pvt Ltd",
  "New Pack Chemical Industries",
  "Pacific Cyber Technology Pvt Ltd",
  "Spinvision India Llp",
  "Aniket Metal Pvt Ltd.",
  "Sun Infra",
  "Nobtech Enterprise",
  "Hotel Aditi Landmark",
  "Midmark India Pvt Ltd",
  "Rishika Industries Limited",
  "Sun Resort By Treat Resort",
];

const ClientList = ({ data, reverse }) => (
  <div
    className="flex animate-scroll hover:[animation-play-state:paused] w-fit"
    style={{ animationDirection: reverse ? "reverse" : "normal" }}
  >
    {[...data, ...data].map((item, index) => (
      <div
        key={index}
        className="bg-white px-6 py-3 rounded-lg flex-shrink-0 mx-2
                   hover:bg-gradient-to-l hover:from-primary hover:to-primary-start
                   group duration-300"
      >
        <h1
          className="text-xl md:text-2xl lg:text-3xl font-alumni font-bold text-black
                       group-hover:text-white duration-300 whitespace-nowrap"
        >
          {item}
        </h1>
      </div>
    ))}
  </div>
);

const Clients = () => (
  <section style={style} className="py-16 space-y-10">
    <div className="container flex items-start">
      <PrimaryTitle gradientText="Our" normalText=" Valued Clients" />
    </div>

    <div className="space-y-4 md:space-y-8 overflow-hidden container px-0">
      <ClientList data={clientsGroup1} />
      <ClientList data={clientsGroup2} reverse />
    </div>

    {/* Marquee Animation */}
    <style jsx>{`
      @keyframes scroll-marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .animate-scroll-marquee {
        animation: scroll-marquee 50s linear infinite;
        width: fit-content;
      }

      .animate-scroll-marquee:hover {
        animation-play-state: paused;
      }
    `}</style>
  </section>
);

export default Clients;
