import React from "react";
import AboutHeadar from "./sections/AboutHeadar";
import AboutText from "./sections/AboutText";
import SafetySolution from "../../components/SafetySolution";
import MissionVission from "./sections/MissionVision";
import Clients from "./sections/Clients";

const About = () => {
  return (
    <div>
      <AboutHeadar />
      <AboutText/>
      <MissionVission/>
      <Clients/>
      <SafetySolution/>
    </div>
  );
};

export default About;
