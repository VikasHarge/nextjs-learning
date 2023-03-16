import LinkTo from '@/components/LinkTo'
import { useRouter } from 'next/router'
import React from 'react'

const Products = () => {

    const router = useRouter()

  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
        <h1>Select Product</h1>
        <LinkTo path='/' title='Back' />
        <div>
            <ul>
                <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={()=>{router.push('/products/1')}} >Product 1</li>
                <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={()=>{router.push('/products/2')}} >Product 2</li>
                <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={()=>{router.push('/products/3')}} >Product 3</li>
                <li className='bg-red mb-2 text-white p-2x rounded-[4px]' onClick={()=>{router.push('/products/4')}} >Product 4</li>
            </ul>
        </div>
    </div>
  )
} 

export default Products