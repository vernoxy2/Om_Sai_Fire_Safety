import React from 'react'
import SerHeader from './sections/SerHeader'
import WeDo from './sections/WeDo'
import OurService from '../Home/sections/OurService'
import OurValue from './sections/OurValue'

const Services = () => {
  return (
    <div className='bg-black'>
      <SerHeader/>
      <WeDo/>
      <OurValue/>
    </div>
  )
}

export default Services
