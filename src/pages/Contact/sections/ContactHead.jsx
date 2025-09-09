import React from 'react'
import Head from "../../../assets/ContactHead.webp";
import GradientText from '../../../components/GradientText';

const Style = {
  backgroundImage: `url(${Head})`,
  backgroundSize: "cover",
  backgroundPosition: "center center", // ✅ fix
};

const ContactHead = () => {
  return (
    <section style={Style} className="py-32">
      <div className="container text-end">
        <div className="w-11/12 lg:w-1/2 ml-auto bg-gradient-to-l from-primary-start/60 to-transparent p-7 border-r-[3px] border-Border mt-20 md:space-y-5">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold">
              <GradientText>Contact </GradientText>Us
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHead;
