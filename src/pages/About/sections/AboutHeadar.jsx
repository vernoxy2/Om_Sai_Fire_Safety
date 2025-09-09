import React from 'react'
import Head from "../../../assets/AboutPageAssets/AboutHead.webp";
import GradientText from '../../../components/GradientText';

const Style = {
  backgroundImage: `url(${Head})`,
  backgroundSize: "cover",
  backgroundposition : "center,bottom"
};

const AboutHeadar = () => {
  return (
    <section style={Style}>
      <div className="container text-start">
        <div className="w-11/12 lg:w-1/2 bg-gradient-to-r from-primary-start/60 to-transparent p-7 border-l-[3px] border-Border mt-20 mr-auto md:space-y-5">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold">
              <GradientText>about </GradientText>us
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeadar
