
import Button from '@/components/Buttons'
import CommentTable from '@/components/CommentTable'
import LinkTo from '@/components/LinkTo'
import { CommentType } from '@/interfaces/types'
import React, { useState } from 'react'



const LoadComments: React.FC = () => {




  const [comments, setComments] = useState<CommentType[] | null>(null)
  const [comment, setComment] = useState<string>("")

  const fetchComments = async () => {

    const resp = await fetch(`http://localhost:3000/api/comments`)
    const comments: CommentType[] = await resp.json();

    setComments(comments)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value)
  }

  const addComment = async ( e: React.MouseEvent<HTMLButtonElement> )=>{
      e.preventDefault()

      const resp = await fetch(`http://localhost:3000/api/comments`,
      {
        method : 'POST',
        body : JSON.stringify({
          comment
        }),
        headers : {
          'Content-Type' : 'application/json',
        },
      });
      const data = await resp.json()
      console.log(data);
      setComment('')
      fetchComments()
  }

  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
      <h1>Load Comments from nextjs backend</h1>

      <div className='flex flex-col gap-2' >
        <label htmlFor='comment' >Add Comment</label>
        <div>
          <input
            className='bg-lightBlue mb-2 p-6x '
            type='text'
            name='comment'
            id='comment'
            value={comment}
            onChange={handleInput}
          />
          <Button onClick={addComment} >Add</Button>
        </div>
      </div>

      <div className='flex flex-row gap-2' >
        <Button onClick={fetchComments} >Load</Button>
        <LinkTo path='/' title='Home' />
      </div>
      {
        comments && <CommentTable comments={comments} />
      }
    </div>
  )
}

export default LoadComments