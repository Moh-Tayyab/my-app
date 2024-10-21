"use client";
{/**route link navigation programmaticaly */}
import React from 'react'
import { useRouter } from 'next/navigation'

const OrderProduct = () => {
    const router = useRouter();
    
    const handleClick = () => {
        console.log('place order')
        router.replace  ('/');
    }
  return (
   <>
   <h1>Order Product</h1>
   <button onClick={handleClick}>Place Order</button>
   </>
  )
}

export default OrderProduct;
