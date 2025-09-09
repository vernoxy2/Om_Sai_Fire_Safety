import React from 'react'
import ProductHead from './sections/ProductHead'
import BestPro from './sections/BestPro'
import Knowledge from './sections/Knowledge'
import ProTeb from './sections/ProTeb'

const Products = () => {
  return (
    <div className='bg-black'>
      {/* Products Page */}
      <ProductHead/>
      <BestPro/>
      <ProTeb/>
      <Knowledge/>
    </div>
  )
}

export default Products
