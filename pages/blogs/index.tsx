import LinkTo from '@/components/LinkTo'
import Link from 'next/link'
import React from 'react'

const Blogs = () => {
  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
        <h1>Welcome to my blogs</h1>
        <LinkTo path='/' title='Back' />
        <LinkTo path='/blogs/firstBlog' title='First Blog' />
        <LinkTo path='/blogs/secondBlog' title='Second Blog' />
    </div>
  )
}

export default Blogs