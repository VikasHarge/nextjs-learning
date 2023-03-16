import LinkTo from '@/components/LinkTo'
import Link from 'next/link'
import React from 'react'

const SecondBlog = () => {
  return (
    <div>
        <h1>My Second blog</h1>
        <LinkTo path='/blogs' title='back' />
    </div>
  )
}

export default SecondBlog