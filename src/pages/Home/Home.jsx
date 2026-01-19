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
    title:'"Om Sai Fire Safety – Complete Fire Safety Solutions in India',
    description:'Om Sai Fire Safety provides certified fire safety equipment including fire extinguishers, alarm systems, safety shoes, helmets, hydrant valves, and branch pipes for homes, offices, and industries.',
    keywords:'fire safety, fire extinguishers, fire alarm system, safety equipment, Om Sai Fire Safety, industrial fire safety, fire protection',
    url:'https://www.omsaifiresafteysolutions.com/'
  })
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
