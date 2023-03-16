import Link from 'next/link'
import React from 'react'

type LinkProps = {
    path : string,
    title : string
}

const LinkTo = ({path, title} : LinkProps) => {
  return (
    <div className='p-6x' >
        <Link className='bg-blue p-6x text-white rounded-[6px]' href={path} >{title}</Link>
    </div>
  )
}

export default LinkTo