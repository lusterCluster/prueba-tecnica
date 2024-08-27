import React from 'react'
import useTailwindClassConverter from '../../hooks/tailwind/useTailwindConverter'
import { ProductClasses } from '../../pages/products/productClasses'
import SearchBar from '../SearchBar'



const MobileHeader = () => {
  return (
    <div className={useTailwindClassConverter(ProductClasses.productList.mobileHeaderContainer) }>          
          <SearchBar/>
          <p className="material-symbols-sharp text-[24px] text-white stretc">
add_circle
</p>

        </div>
  )
}

export default MobileHeader