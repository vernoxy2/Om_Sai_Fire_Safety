import React from "react";
import AboutHeadar from "./sections/AboutHeadar";
import AboutText from "./sections/AboutText";
import SafetySolution from "../../components/SafetySolution";
import MissionVission from "./sections/MissionVision";
import Clients from "./sections/Clients";
import Director from "./sections/Director";

const About = () => {
  return (
    <div>
      <AboutHeadar />
      <AboutText/>
      {/* <Director/> */}
      <MissionVission/>
      <Clients/>
      <SafetySolution/>
    </div>
  );
};

export default About;
