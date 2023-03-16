import LinkTo from '@/components/LinkTo'
import Link from 'next/link'
import React from 'react'

const SecondBlog = () => {
  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
        <h1>My Second blog</h1>
        <LinkTo path='/blogs' title='back' />
    </div>
  )
}

export default SecondBlog