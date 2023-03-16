import Footer from '@/components/Footer'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
        <h1>Login Page</h1>
    </div>
  )
}

export default Login


Login.getLayout = function PageLayout(page : React.Component){
    return <>
    {page}
    <Footer/>
    </>
}