import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SerHeader from './sections/SerHeader';
import WeDo from './sections/WeDo';
import OurValue from './sections/OurValue';
import SafetySolution from '../../components/SafetySolution';
import FAQ from './sections/FAQ';
import TabView from './TabView/TabView';
import { useMetaTags } from '../../hooks/useMetaTags';

const SERVICE_META = {
  'fire-hydrant-systems': {
    title: 'Fire Hydrant Systems Service & Installation | Om Sai Fire Safety',
    description: 'Expert design, installation, and maintenance of high-pressure industrial fire hydrant systems, hose pipes, landing valves, and pump rooms.',
    keywords: 'fire hydrant system, hydrant valve, fire pump room, hose reel, industrial fire hydrant installation, Om Sai Fire Safety',
  },
  'fire-extinguisher-services': {
    title: 'Fire Extinguisher Supply, Installation & Refilling | Om Sai Fire Safety',
    description: 'Complete range of ISI certified fire extinguishers: ABC powder, CO2, Foam, Water type supply, refilling, and hydraulic testing services.',
    keywords: 'fire extinguisher refilling, fire extinguisher supply, ABC powder extinguisher, CO2 extinguisher, fire safety equipment Vapi',
  },
  'fire-alarm-detection-systems': {
    title: 'Fire Alarm & Smoke Detection Systems | Om Sai Fire Safety',
    description: 'Advanced conventional and addressable fire alarm panels, smoke detectors, heat sensors, and automatic fire warning systems.',
    keywords: 'fire alarm system, smoke detector, heat detector, fire alarm panel installation, fire detection systems',
  },
  'water-sprinkler-system': {
    title: 'Automatic Water Sprinkler Systems | Om Sai Fire Safety',
    description: 'High-performance automatic fire sprinkler system design, piping installation, and testing for commercial and industrial buildings.',
    keywords: 'automatic water sprinkler, fire sprinkler system, sprinkler heads, industrial fire suppression',
  },
  'fire-safety-audits-training': {
    title: 'Fire Safety Audits & Emergency Drill Training | Om Sai Fire Safety',
    description: 'Comprehensive fire safety audits, risk assessment, compliance certification, and hands-on staff fire drill training.',
    keywords: 'fire safety audit, fire drill training, safety compliance, industrial fire risk assessment',
  },
  'annual-maintenance-contracts-amc': {
    title: 'Fire Safety AMC (Annual Maintenance Contracts) | Om Sai Fire Safety',
    description: 'Reliable fire protection equipment maintenance, periodic testing, and emergency support under flexible AMC plans.',
    keywords: 'fire safety AMC, fire extinguisher maintenance contract, fire hydrant maintenance, fire system AMC',
  },
};

const Services = () => {
  const { tabSlug } = useParams();
  const tabRef = useRef(null);

  useEffect(() => {
    if (tabSlug && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [tabSlug]);

  const activeMeta = tabSlug && SERVICE_META[tabSlug] ? SERVICE_META[tabSlug] : {
    title: 'Fire Safety Services – Installation, Maintenance & Training | Om Sai Fire Safety',
    description: 'Om Sai Fire Safety offers professional services including fire extinguisher installation, fire alarm system setup, maintenance AMC, and training for residential, commercial, and industrial spaces.',
    keywords: 'Om Sai Fire Safety, fire extinguisher services, fire alarm system installation, fire hydrant systems, fire protection company, fire safety equipment, fire protection services, fire safety services, fire extinguisher installation, fire alarm maintenance, fire safety training',
  };

  const currentUrl = tabSlug 
    ? `https://omsaifiresafteysolutions.com/services/${tabSlug}`
    : 'https://omsaifiresafteysolutions.com/services';

  useMetaTags({
    title: activeMeta.title,
    description: activeMeta.description,
    keywords: activeMeta.keywords,
    url: currentUrl,
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
  );
};

export default Services;
