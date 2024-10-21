import React from 'react'
import { Metadata } from 'next';

type Props = {
  params: { 
    productId: string 
  }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const title = await new Promise( (resolve) => {
    setTimeout(() => {
      resolve(`Product iphone ${params.productId}`)
    }, 100) // Simulate async loading of title
  })
  return {
    title: title as string
  }
}

const ProductDetails = ({params}: Props) => {
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  )
}

export default ProductDetails;