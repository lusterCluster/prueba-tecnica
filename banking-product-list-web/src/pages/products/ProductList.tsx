import React, { useEffect } from 'react'
import { ProductClasses } from './productClasses'
import MobileHeader from '../../components/mobile/MobileHeader'
import useMutation from '../../store/reducer/useMutation'
import { fetchProductList, IProduct, ProductType } from '../../rest/productListService'
import { ACTIONS } from '../../store/reducer/interfaces'
import { convertToTailwindClass } from '../../util/tailwind/classConverter'
import ProductMobile from '../../components/mobile/ProductMobile'

const placeholder: ProductType = [
      
]

const ProductList = () =>  {
  
  const {state, handleStateMutation} = useMutation<ProductType>(placeholder)
  useEffect(()=>{
    fetchProductList()
    .then(products => {
        // Aquí tienes los datos que fueron retornados
         handleStateMutation(products,ACTIONS.ADDED)})        
    .catch(error => {
        console.error('Error:', error);
    });
    

  },[fetchProductList])

  if(state.length === 0) {
    return (
      <>
        Loading ...
      </>
    )
  }
    return (
      <div className={convertToTailwindClass(ProductClasses.productList.container)} >        
        <MobileHeader/> 
        {/* <div className='grid grid-cols-6 grid-rows-12 bg-white rounded-[26px] w-full col-start-2 col-span-10  h-[850px]'>
          
        </div> */}
        <div className='visible sm:invisible mt-[56px]'></div>       
        {state[0].map((product:IProduct) => (        
            <ProductMobile fields={product}/>    
        ))}      
      </div>
    )
  
}

export default ProductList