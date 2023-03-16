import LinkTo from '@/components/LinkTo'
import { useRouter } from 'next/router'
import React from 'react'

const PostDetails = ({ post }: any) => {


    const router = useRouter();

    if(router.isFallback){
        return <h1>Loading...</h1>
    }


    return (
        <>
            <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
                <div className='w-6/12' >
                    <h1>PostDetails</h1>
                    <div>
                        <p className='text-[1.5rem] font-bold' >Id : {post.id} </p>
                        <p>Title : {post.title} </p>
                        <p>Body : {post.body}</p>
                    </div>
                </div>
                <LinkTo path='/posts' title='back' />
            </div>

        </>
    )
}

export default PostDetails

//For Dynamic Data fetching
export async function getStaticPaths() {

    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    // const posts = await res.json()

    // const paths = posts.map((post : any)=>{

    //     return {
    //         params : {
    //             postId : `${post.id}`
    //         }
    //     }

    // }) 

    // console.log(paths);
    
    return {
        // paths,
        paths : [
            {params : {postId : '1'}},
            {params : {postId : '2'}},
            {params : {postId : '3'}},
        ],
        fallback: 'blocking'
    }  
}


export async function getStaticProps(context: any) {

    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post = await res.json()

    if(!post.id){
        return {
            notFound : true
        }
    }

    return {
        props: {
            post
        }
    }

}