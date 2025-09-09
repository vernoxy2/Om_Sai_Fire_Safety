import React from 'react'
import ProductHead from './sections/ProductHead'
import BestPro from './sections/BestPro'
import Knowledge from './sections/Knowledge'

const Products = () => {
  return (
    <div className='bg-black'>
      {/* Products Page */}
      <ProductHead/>
      <BestPro/>
      <Knowledge/>
    </div>
  )
}

export default Products
