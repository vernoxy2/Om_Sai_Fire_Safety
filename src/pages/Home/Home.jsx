import React from "react";
import Headers from "../../pages/Home/sections/Header";
import WhoWeAre from "./sections/WhoWeAre";
import OurValue from "./sections/OurValue";
import OurService from "./sections/OurService";
import OurProducts from "./sections/OurProducts";
import WhyChooes from "./sections/WhyChooes";
import Testimonials from "./sections/Testimonials";
import SafetySolution from "../../components/SafetySolution";
import { useMetaTags } from "../../hooks/useMetaTags";

const Home = () => {
  useMetaTags({
    title: 'Om Sai Fire Safety – Fire Extinguishers, Alarm Systems & Safety Equipment Supplier',
    description: 'Om Sai Fire Safety Solutions provides certified fire extinguishers, fire alarm systems, hydrant valves, safety shoes, helmets & industrial fire safety services in Gujarat & India.',
    keywords: 'Om Sai Fire Safety, fire safety equipment, fire extinguisher supplier, fire alarm system, fire hydrant valve, safety shoes, safety helmets, industrial fire safety, fire protection services',
    url: 'https://omsaifiresafteysolutions.com/'
  });

  return (
    <div className="">
      <Headers />
      <WhoWeAre />
      <OurValue />
      <OurService />  
      <OurProducts />
      <WhyChooes />    
      <Testimonials/>
      <SafetySolution/>
    </div>
  );
};

export default Home;
