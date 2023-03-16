import LinkTo from '@/components/LinkTo'
import Link from 'next/link'
import React from 'react'

const FirstBlog = () => {
  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
        <h1>My first blog</h1>
        <LinkTo path='/blogs' title='back' />
    </div>
  )
}

export default FirstBlog