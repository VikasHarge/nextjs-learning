import LinkTo from '@/components/LinkTo'
import { useRouter } from 'next/router'
import React from 'react'

const Product = () => {

  const router = useRouter() 
  const productId = router.query?.productId

  return (
    <div>
      <h1>
        Product no. {productId}
      </h1>
      <LinkTo path='/products' title='back' />
      <div>
        <ul>
          <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={() => { router.push(`/products/${productId}/reviews/1`) }} >Reviews 1</li>
          <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={() => { router.push(`/products/${productId}/reviews/2`) }} >Reviews 2</li>
          <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={() => { router.push(`/products/${productId}/reviews/3`) }} >Reviews 3</li>
          <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={() => { router.push(`/products/${productId}/reviews/4`) }} >Reviews 4</li>
        </ul>
      </div>
    </div>
  )
}

export default Product