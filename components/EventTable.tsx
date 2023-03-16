import { useRouter } from 'next/router'
import React from 'react'

const EventTable = ({events}:any) => {
    const router = useRouter()

    if(!events) return <h1>No Events</h1>

  return (
    <table className='h-6' >
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>category</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        {
            events.map((event: any, i: number) => {

                return <tr key={event.id} className='p-6x'>
                    <td className='p-6x' >{event.id}</td>
                    <td className='p-6x' >{event.title}</td>
                    <td className='p-6x' >{event.description}</td>
                    <td className='p-6x' >{event.category}</td>
                    <td className='p-6x' >{event.date}</td>
                </tr>
            })
        }
    </tbody>
</table>
  )
}

export default EventTable