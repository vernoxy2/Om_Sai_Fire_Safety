import React from "react";
import AboutHeadar from "./sections/AboutHeadar";
import AboutText from "./sections/AboutText";
import SafetySolution from "../../components/SafetySolution";
import MissionVission from "./sections/MissionVision";
import Clients from "./sections/Clients";
import Director from "./sections/Director";
import { useMetaTags } from "../../hooks/useMetaTags";

const About = () => {
  useMetaTags({
    title:
      "About Om Sai Fire Safety – Trusted Fire Protection Company in India",
    description:
      "Learn about Om Sai Fire Safety Solutions, a trusted provider of fire safety equipment and services. Our mission is to protect lives and property with certified products and expert solutions.",
    keywords:
      "Om Sai Fire Safety, about us, fire safety company, fire protection services, certified fire equipment, industrial safety products",
    url: "https://www.omsaifiresafteysolutions.com/about",
  });
  return (
    <div>
      <AboutHeadar />
      <AboutText />
      {/* <Director/> */}
      <MissionVission />
      <Clients />
      <SafetySolution />
    </div>
  );
};

export default About;
