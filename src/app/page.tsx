import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1 className=''>Welcome Page!</h1>
      <Link href='/about'>
      About
      </Link>
      <Link href='/products'>
        products
      </Link>
    </div>
  )
}

export default page
