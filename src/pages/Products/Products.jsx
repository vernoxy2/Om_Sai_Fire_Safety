import React from 'react'
import ProductHead from './sections/ProductHead'
import BestPro from './sections/BestPro'
import Knowledge from './sections/Knowledge'
import ProTeb from './sections/ProTeb'
import { useParams } from 'react-router-dom'
import { useMetaTags } from '../../hooks/useMetaTags'




const Products = () => {

  const{tabSlug} = useParams();
  const tabRef = React.useRef(null);

  React.useEffect(() => {
    if (tabSlug && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [tabSlug]);

  useMetaTags({
    title:'Fire Safety Products – Extinguishers, Helmets, Shoes & More | Om Sai Fire Safety',
    description:'Explore Om Sai Fire Safety’s wide range of certified products: fire extinguishers, fire alarms, safety shoes, helmets, hydrant valves, branch pipes, and industrial fire safety equipment.', 
    keywords:'fire safety products, fire extinguishers, fire alarm systems, safety shoes, helmets, hydrant valves, branch pipes, industrial fire safety equipment, Om Sai Fire Safety fire safety products, fire extinguishers, fire alarm system, safety helmets, safety shoes, branch pipes, Om Sai Fire Safety, industrial safety equipment',
    url:'https://www.omsaifiresafteysolutions.com/products'
  })

  return (
    <div className='bg-black'>
      {/* Products Page */}
      <ProductHead/>
      <BestPro/>
      <div ref={tabRef}><ProTeb/></div>
      <Knowledge/>
    </div>
  )
}

export default Products
