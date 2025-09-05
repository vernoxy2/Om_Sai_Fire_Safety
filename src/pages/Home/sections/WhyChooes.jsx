import React from 'react'
import ChooseBg from "../../../assets/HomePageAssets/Chooes/ChooesBg.webp";


const Style = {
  backgroundImage: `url(${ChooseBg})`,
  backgroundSize: "cover",


};

const WhyChooes = () => {
  return (
    <section style={Style}>
      why chooes Section of Home
    </section>
  )
}

export default WhyChooes
