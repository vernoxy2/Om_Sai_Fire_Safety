import React from 'react'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import SerHeader from './sections/SerHeader'
import WeDo from './sections/WeDo'
import OurValue from './sections/OurValue'
import SafetySolution from '../../components/SafetySolution'
import FAQ from './sections/FAQ'
import TabView from './TabView/TabView'

const Services = () => {
  const { tabSlug } = useParams();
  const tabRef = useRef(null);

  useEffect(() => {
    if (tabSlug && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [tabSlug]);

  return (
    <div className='bg-black'>
      <SerHeader/>
      <WeDo/>
      <OurValue/>
      <div ref={tabRef}>
        <TabView/>
      </div>
      <FAQ/>
      <SafetySolution/>
    </div>
  )
}

export default Services
