import LinkTo from '@/components/LinkTo'
import { useRouter } from 'next/router'
import React from 'react'

const Reviews = () => {

    const router = useRouter()

    const productId = router.query?.productId
    const reviewtId = router.query?.productId

  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
        <h1>Review no {} of product no {}</h1>
        <LinkTo path='/products' title='Back' />
        <div>
            <ul>
                <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={()=>{router.push('/products/1')}} >Review 1</li>
                <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={()=>{router.push('/products/2')}} >Review 2</li>
                <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={()=>{router.push('/products/3')}} >Review 3</li>
                <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={()=>{router.push('/products/4')}} >Review 4</li>
            </ul>
        </div>
    </div>
  )
} 

export default Reviews