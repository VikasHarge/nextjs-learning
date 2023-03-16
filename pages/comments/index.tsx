
import Button from '@/components/Buttons'
import { CommentType } from '@/interfaces/types'
import React, { useState } from 'react'

const LoadComments = () => {

    const [comments, setComments] = useState<CommentType[] | null>(null)

    const fetchComments = async ()=>{

        const resp = await fetch(`http://localhost:3000/api/comments`)
        const comments : CommentType[] = await resp.json();

        setComments(comments)
    }

  return (
    <div>
        <h1>Load Comments from nextjs backend</h1>
        <Button onClick={fetchComments} >Load</Button>
        
    </div>
  )
}

export default LoadComments