import React from 'react'

const Button = ({children, ...rest} : any) => {
  return (
    <button className='bg-blue p-6x text-white rounded-[6px]' {...rest} >{children}</button>
  )
}

export default Button