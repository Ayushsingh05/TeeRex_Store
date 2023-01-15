import React from 'react'
import { ProductsSection } from '../components/ProductsSection'
import { Search } from '../components/Search'
import { TopFilterSection } from '../components/TopFilterSection'

export const Products = () => {
  return (
    <div>
        <Search/>
        <TopFilterSection/>
        <ProductsSection/>
    </div>
  )
}
