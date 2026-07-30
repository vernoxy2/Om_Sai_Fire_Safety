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
    title: "About Om Sai Fire Safety – Trusted Fire Protection Company in India",
    description: "Learn about Om Sai Fire Safety Solutions, a premier provider of certified fire protection equipment, safety gear, and professional installation & maintenance services.",
    keywords: "Om Sai Fire Safety, about us, fire safety company Vapi, fire protection services Gujarat, certified fire equipment India, industrial safety equipment",
    url: "https://omsaifiresafteysolutions.com/about",
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
