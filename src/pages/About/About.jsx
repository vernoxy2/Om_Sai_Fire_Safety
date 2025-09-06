import React from "react";
import AboutHeadar from "./sections/AboutHeadar";
import AboutText from "./sections/AboutText";
import Certificate from "./sections/Certificate";
import SafetySolution from "../../components/SafetySolution";
import MissionVission from "./sections/MissionVision";

const About = () => {
  return (
    <div>
      <AboutHeadar />
      <AboutText/>
      <MissionVission/>
      <Certificate/>
      <SafetySolution/>
    </div>
  );
};

export default About;
