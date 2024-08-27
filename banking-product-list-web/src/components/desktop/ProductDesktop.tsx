import React from 'react'
import { IProduct } from '../../rest/productListService'

type Props = {
    fields: IProduct
}

const ProductDesktop:React.FC<Props> = ({fields}) => {
  return (
    <>
    <div className='flex flex-col gap-4 items-center' >
    <div>{fields.id}</div>
    <div>{fields.logo}</div>
    <div>{fields.name}</div>
    <div>{fields.description}</div>
    <div>{fields.date_release}</div>
    <div>{fields.date_release}</div>
    </div>
    </>
  )
}

export default ProductDesktop