import React from 'react'
import SerHeader from './sections/SerHeader'
import WeDo from './sections/WeDo'
import OurValue from './sections/OurValue'
import SafetySolution from '../../components/SafetySolution'
import FAQ from './sections/FAQ'
import TabView from './TabView/TabView'

const Services = () => {
  return (
    <div className='bg-black'>
      <SerHeader/>
      <WeDo/>
      <OurValue/>
      <TabView/>
      <FAQ/>
      <SafetySolution/>
    </div>
  )
}

export default Services
