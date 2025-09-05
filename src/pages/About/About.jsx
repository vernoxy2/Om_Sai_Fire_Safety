import React from "react";
import AboutHeadar from "./sections/AboutHeadar";
import AboutText from "./sections/AboutText";
import Mission from "./sections/Mission";
import Certificate from "./sections/Certificate";

const About = () => {
  return (
    <div>
      <AboutHeadar />
      <AboutText/>
      <Mission/>
      <Certificate/>
    </div>
  );
};

export default About;
