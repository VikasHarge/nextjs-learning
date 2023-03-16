import { useRouter } from 'next/router'
import React from 'react'

const NewsTable = ({newss}:any) => {
    const router = useRouter()

  return (
    <table className='h-6' >
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
        </tr>
    </thead>
    <tbody>
        {
            newss.map((news: any, i: number) => {

                return <tr key={news.id} className='p-6x'>
                    <td className='p-6x' >{news.id}</td>
                    <td className='p-6x' >{news.title}</td>
                    <td className='p-6x' >{news.discription}</td>
                    <td className='p-6x' >{news.category}</td>
                </tr>
            })
        }
    </tbody>
</table>
  )
}

export default NewsTable