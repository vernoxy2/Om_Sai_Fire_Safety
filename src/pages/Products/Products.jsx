import React from 'react'
import ProductHead from './sections/ProductHead'
import BestPro from './sections/BestPro'
import Knowledge from './sections/Knowledge'
import ProTeb from './sections/ProTeb'
import { useParams } from 'react-router-dom'

const Products = () => {

  const{tabSlug} = useParams();
  const tabRef = React.useRef(null);

  React.useEffect(() => {
    if (tabSlug && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [tabSlug]);

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
