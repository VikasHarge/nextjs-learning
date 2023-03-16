import LinkTo from '@/components/LinkTo'
import React from 'react'
import  useSWR from 'swr'

const Dashboard = () => {

    const handleFetch = async ()=>{
        const resp = await fetch(`http://localhost:4000/dashboard`)
        const data = await resp.json()

        return data
    }

    const {data, error, isLoading} = useSWR('dashboard', handleFetch)

    if (error) return <div className='w-full h-[80vh] flex flex-col justify-center items-center'>failed to load</div>
    if (isLoading) return <div className='w-full h-[80vh] flex flex-col justify-center items-center'>loading..</div>


  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
        <h1>Dashboard</h1>
        <div>
            <h1>ID :  {data.id}</h1>
            <h1>name :  {data.name}</h1>
            <h1>Role :  {data.Role}</h1>
        </div>
        <LinkTo path='/' title='home' />

    </div>
  )
}

export default Dashboard