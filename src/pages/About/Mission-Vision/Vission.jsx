import React from 'react'
import VisionImg from "../../../assets/AboutPageAssets/MissionVision/VisionImg.webp";
import PrimaryTitle from '../../../components/PrimaryTitle';

const Vission = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div>
        <img src={VisionImg } alt="" className="mx-auto" />
      </div>
      <div className='space-y-12'>
        <PrimaryTitle
          gradientText={"Our"}
          normalText={"Vision"}
          titleClassName='text-center'
        ></PrimaryTitle>
        <p className='text-center px-8'>To be recognized as a leading fire safety company in India, trusted for excellence in fire safeguard, prevention, and protection services.</p>
      </div>
    </div>
  )
}

export default Vission
