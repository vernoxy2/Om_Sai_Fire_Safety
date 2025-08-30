import React from "react";
import Headers from "../../pages/Home/sections/Header";
import WhoWeAre from "./sections/WhoWeAre";
import OutValue from "./sections/OutValue";
import OurService from "./sections/OurService";
import OurProducts from "./sections/OurProducts";
import WhyChooes from "./sections/WhyChooes";
import Testimonials from "./sections/Testimonials";
import SafetySolution from "./sections/SafetySolution";

const Home = () => {
  return (
    <div className="">
      <Headers />
      <WhoWeAre />
      <OutValue />
      <OurService />  
      <OurProducts />
      <WhyChooes />    
      <Testimonials/>
      <SafetySolution/>
    </div>
  );
};

export default Home;
