import React, { useEffect, useRef } from 'react';
import ProductHead from './sections/ProductHead';
import BestPro from './sections/BestPro';
import Knowledge from './sections/Knowledge';
import ProTeb from './sections/ProTeb';
import { useParams } from 'react-router-dom';
import { useMetaTags } from '../../hooks/useMetaTags';

const PRODUCT_META = {
  'abc-powder': {
    title: 'ABC Powder Fire Extinguishers | Om Sai Fire Safety',
    description: 'High-quality ISI marked ABC dry powder fire extinguishers suitable for Class A, B, and C fire risks in homes, offices, and factories.',
    keywords: 'ABC powder fire extinguisher, dry chemical extinguisher, ISI fire extinguisher, Class A B C fire protection',
  },
  'hydrant-and-hose-reels': {
    title: 'Fire Hydrant Accessories & Hose Reels | Om Sai Fire Safety',
    description: 'Premium quality fire hose reels, landing valves, hose pipes, branch pipes, and fire hydrant accessories.',
    keywords: 'fire hose reel, hydrant valve, branch pipe, RRL hose pipe, fire hydrant fittings',
  },
  'detectors': {
    title: 'Smoke Detectors, Heat Detectors & Sensors | Om Sai Fire Safety',
    description: 'Reliable smoke detectors, optical sensors, heat detectors, and manual call points for early fire detection.',
    keywords: 'smoke detector, heat detector, optical smoke sensor, fire alarm sensor, manual call point',
  },
  'fire-doors': {
    title: 'Fire Rated Emergency Doors & Exit Doors | Om Sai Fire Safety',
    description: 'Certified 120-minute and 180-minute fire-rated steel doors, panic bars, and emergency exit hardware.',
    keywords: 'fire door, fire rated door, steel fire exit door, panic bar, emergency exit door',
  },
  'hvws-systems': {
    title: 'High Velocity Water Spray (HVWS) Systems | Om Sai Fire Safety',
    description: 'Specialized HVWS systems engineered for transformer protection and high-hazard industrial fire suppression.',
    keywords: 'HVWS system, high velocity water spray, transformer fire protection, spray nozzle system',
  },
  'safety-accessories': {
    title: 'Safety Signages, Helmets, Shoes & Accessories | Om Sai Fire Safety',
    description: 'Complete range of personal protective equipment (PPE), safety shoes, helmets, reflective jackets, and photoluminescent safety signages.',
    keywords: 'safety shoes, safety helmets, safety signage, photoluminescent signs, PPE equipment, reflective jacket',
  },
};

const Products = () => {
  const { tabSlug } = useParams();
  const tabRef = useRef(null);

  useEffect(() => {
    if (tabSlug && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [tabSlug]);

  const activeMeta = tabSlug && PRODUCT_META[tabSlug] ? PRODUCT_META[tabSlug] : {
    title: 'Fire Safety Products – Extinguishers, Helmets, Shoes & More | Om Sai Fire Safety',
    description: 'Explore Om Sai Fire Safety’s wide range of certified products: fire extinguishers, fire alarms, safety shoes, helmets, hydrant valves, branch pipes, and industrial fire safety equipment.',
    keywords: 'fire safety products, fire extinguishers, fire alarm systems, safety shoes, helmets, hydrant valves, branch pipes, industrial fire safety equipment, Om Sai Fire Safety',
  };

  const currentUrl = tabSlug 
    ? `https://omsaifiresafteysolutions.com/products/${tabSlug}`
    : 'https://omsaifiresafteysolutions.com/products';

  useMetaTags({
    title: activeMeta.title,
    description: activeMeta.description,
    keywords: activeMeta.keywords,
    url: currentUrl,
  });

  return (
    <div className='bg-black'>
      {/* Products Page */}
      <ProductHead/>
      <BestPro/>
      <div ref={tabRef}><ProTeb/></div>
      <Knowledge/>
    </div>
  );
};

export default Products;
