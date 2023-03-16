import { useRouter } from 'next/router'
import React from 'react'

const CommentTable = ({comments}:any) => {
    const router = useRouter()


  return (
    <table className='h-6' >
    <thead>
        <tr>
            <th>ID</th>
            <th>Text</th>
        </tr>
    </thead>
    <tbody>
        {
            comments.map((comment: any, i: number) => {

                return <tr key={comment.id} className='p-6x'>
                    <td className='p-6x' >{comment.id}</td>
                    <td className='p-6x' >{comment.text}</td>
                </tr>
            })
        }
    </tbody>
</table>
  )
}

export default CommentTable