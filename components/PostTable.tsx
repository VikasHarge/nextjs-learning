import { useRouter } from 'next/router'
import React from 'react'

const PostTable = ({posts}:any) => {
    const router = useRouter()

  return (
    <table className='h-6' >
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>detail</th>
        </tr>
    </thead>
    <tbody>
        {
            posts.map((post: any, i: number) => {

                return <tr key={post.id} className='p-6x'>
                    <td className='p-6x' >{post.id}</td>
                    <td className='p-6x' >{post.title}</td>
                    <td className='p-6x' onClick={()=>router.push(`/posts/${post.id}`)} >click</td>
                </tr>
            })
        }
    </tbody>
</table>
  )
}

export default PostTable