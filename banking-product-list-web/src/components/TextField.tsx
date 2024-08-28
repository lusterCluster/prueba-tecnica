import React, { FC } from 'react'
import { IProduct } from '../rest/productListService'
import { HeadingTypes } from '../pages/products/ProductListDesktop'



type Props = {
    type:React.HTMLInputTypeAttribute
    _name: HeadingTypes
    value: string
    isValid: boolean
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const TextField:FC<Props> = ( {type, _name,handleChange,value, isValid}) => {
  const outLineColor = isValid ? "border-onSurface" : "border-onError"
  const labelColor = isValid ? "text-secondaryOnSurface" : "text-onError"
  return (
    <span className='flex-col' >        
    <p className={` ${labelColor} text-sm`} >{_name}</p>
        <input
            className={` ${outLineColor}  bg-background focus:outline-secondaryOnSurface border-[0.5px] border-solid rounded-[5px] h-[40px] w-[320px] px-[9px]`}
              type={type}              
              name={_name}
              value={value}
              onChange={handleChange}          
            />
    <p className={` ${labelColor} `} >{isValid ? "" : "Este campo es requerido"}</p>
    </span>
    
  )
}

export default TextField