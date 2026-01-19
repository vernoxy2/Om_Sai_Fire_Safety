import React from 'react'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import SerHeader from './sections/SerHeader'
import WeDo from './sections/WeDo'
import OurValue from './sections/OurValue'
import SafetySolution from '../../components/SafetySolution'
import FAQ from './sections/FAQ'
import TabView from './TabView/TabView'
import { useMetaTags } from '../../hooks/useMetaTags'

const Services = () => {

  const { tabSlug } = useParams();
  const tabRef = useRef(null);

  useEffect(() => {
    if (tabSlug && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [tabSlug]);

  useMetaTags({
    title:
      "Fire Safety Services – Installation, Maintenance & Training | Om Sai Fire Safety",
    description:
      "Om Sai Fire Safety offers professional services including fire extinguisher installation, fire alarm system setup, maintenance, and training for residential, commercial, and industrial spaces.",
    keywords:
      "Om Sai Fire Safety, fire extinguisher services, fire alarm system installation, fire hydrant systems, fire protection company, fire safety equipment, fire protection services, fire safety services, fire extinguisher installation, fire alarm maintenance, fire safety training, Om Sai Fire Safety ",
    url: "https://www.omsaifiresafteysolutions.com/services",
  });

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
