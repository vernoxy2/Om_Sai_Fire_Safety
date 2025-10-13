import React from "react";
import Bg from "../../../assets/HomePageAssets/Products/ProductsBg.webp";
import PrimaryTitle from "../../../components/PrimaryTitle";

const style = { backgroundImage: `url(${Bg})`, backgroundSize: "cover" };

const clientsGroup1 = [
  "H.V Connecting Infra Pvt. Ltd", "Billets Elektre Work", "Gavli Developers Premal Deep Square",
  "K. K Cinema Silvassa", "Haveli Entertainments Pvt Ltd", "Shreeji Developers",
  "Rashi Enterprise", "Alpla India Pvt. Ltd", "Intech Healthcar Intech Healthcar",
  "Vivan Chemical", "Chhatra Preeti Estate Pvt Ltd", "Bhanu Venture Dhanoli",
  "Hemani Intermediates Private Limited"
];

const clientsGroup2 = [
  "Bhanu Venture Group", "Treat Resort", "Ram Enterprise Group",
  "Chhatra Preeti Estate Pvt Ltd.", "MAST MASALA", "Kunal Printing & Packaging Pvt Ltd",
  "Jiten Agro Land & Farm Pvt Ltd", "New Pack Chemical Industries", "Pacific Cyber Technology Pvt Ltd",
  "Spinvision India Llp", "Aniket Metal Pvt Ltd.", "Sun Infra", "Nobtech Enterprise",
  "Hotel aditi Landmark"
];

const ClientList = ({ data, reverse }) => (
  <div className={`flex ${reverse ? "animate-scrollReverse" : "animate-scroll"} whitespace-nowrap`}>
    {[...data, ...data].map((item, index) => (
      <div
        key={index}
        className="bg-white px-3 md:px-6 py-2 md:py-5 rounded-lg inline-block mr-4 hover:bg-gradient-to-l from-primary to-primary-start group duration-300"
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-alumni font-bold text-black group-hover:text-white duration-300">
          {item}
        </h1>
      </div>
    ))}
  </div>
);

const Clients = () => (
  <section style={style} className="space-y-10 ">
    <div className="container flex items-start">
      <PrimaryTitle gradientText="Our" normalText=" Valued Clients" />
    </div>
    <div className="overflow-hidden relative space-y-8 container px-0">
      <ClientList data={clientsGroup1} />
      <ClientList data={clientsGroup2} reverse />
    </div>
  </section>
);

export default Clients;
