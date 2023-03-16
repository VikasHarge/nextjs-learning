import { useRouter } from 'next/router'
import React from 'react'

const CampTable = ({camps}:any) => {
    const router = useRouter()

  return (
    <table className='h-6' >
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        {
            camps.map((camp: any, i: number) => {

                return <tr key={camp.id} className='p-6x'>
                    <td className='p-6x' >{camp.id}</td>
                    <td className='p-6x' >{camp.title}</td>
                    <td className='p-6x' >{camp.discription}</td>
                    <td className='p-6x' >{camp.price}</td>
                    <td className='p-6x' onClick={()=>router.push(`/camps/${camp.id}`)} >click</td>
                </tr>
            })
        }
    </tbody>
</table>
  )
}

export default CampTable