import LinkTo from '@/components/LinkTo';
import PostTable from '@/components/PostTable';
import React from 'react'

const Posts = ({posts} : any) => {
  return (
    <div className='text-[12px] h-[40rem]  flex flex-col justify-start items-center ' >
        <h1>select Post to see details</h1>
        <PostTable posts={posts} />
        <LinkTo path='/' title='Home'/>
    </div>
  )
}

export default Posts


export async function getStaticProps(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json()

    return {
        props : {
            posts
        }
    }
}