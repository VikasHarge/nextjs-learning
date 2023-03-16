import EventTable from '@/components/EventTable'
import LinkTo from '@/components/LinkTo'
import React, { useState } from 'react'

const Events = ({events}:any) => {

    const [eventList, setEventList] = useState(events)


    const filterEvents = async (category : string)=>{

        const resp =  await fetch(`http://localhost:4000/events?category=${category}`)
        const filteredEvent = await resp.json()

        setEventList(filteredEvent)

    }

  


  return (
    <div>
        <h1>Event Table</h1>
        <div>
            <h3>Filter events</h3>
            <div className='flex flex-row gap-2'>
                <button 
                    className='bg-blue text-white p-6x rounded-[6px]'
                    onClick={()=>filterEvents('sports')} >
                    Sports
                </button>
                <button 
                    className='bg-blue text-white p-6x rounded-[6px]'
                    onClick={()=>filterEvents('politics')} >
                    politics
                </button>
                <button 
                    className='bg-blue text-white p-6x rounded-[6px]'
                    onClick={()=>filterEvents('technology')} >
                    technology
                </button>
                <button 
                    className='bg-blue text-white p-6x rounded-[6px]'
                    onClick={()=>filterEvents('science')} >
                    science
                </button>
                <button 
                    className='bg-blue text-white p-6x rounded-[6px]'
                    onClick={()=>filterEvents('cultural')} >
                    cultural
                </button>
            </div>
        </div>            
        <EventTable  events={eventList} />
        <LinkTo path='/' title='home' />
    </div>
  )
}

export default Events


export async function getServerSideProps(){
    const resp = await fetch(`http://localhost:4000/events`)
    const events = await resp.json()

    return {
        props : {
            events
        }
    }
}