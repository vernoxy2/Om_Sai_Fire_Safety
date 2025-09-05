import React from 'react'
import MissionBg from "../../../assets/HomePageAssets/Services/ServicesBg.webp";

const style = {
  backgroundImage: `url(${MissionBg})`,
  backgroundSize: "cover",
}

const Mission = () => {
  return (
    <section style={style}>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-8'></div>
    </section>
  )
}

export default Mission
