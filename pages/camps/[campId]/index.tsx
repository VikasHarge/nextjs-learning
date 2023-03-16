import LinkTo from '@/components/LinkTo';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react'

const CampDetail = ({camp} : any) => {

    const router = useRouter();

    if(router.isFallback){
        return <div>Loading...</div>
    }




  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
        <h1>Camp Details</h1>
        <div>
            <p>{camp.id}</p>
            <p>{camp.title}</p>
            <p>{camp.discription}</p>
            <p>{camp.price}</p>
        </div>
        <LinkTo path='/camps' title='Back' />
    </div>
  )
}

export default CampDetail


export async function getStaticPaths() {

    return {
        paths : [
            {params : { campId : '1'}}
        ],
        fallback : true,
    }
    
}

export  const getStaticProps : GetStaticProps = async (context : any) => {

    const {params} = context

    const res = await fetch(`http://localhost:4000/camps/${params.campId}`)

    const camp = await res.json();

    if(!camp.id){
        return {
            notFound : true
        }
    } 

    return {
        props : {
            camp
        }
    }
    
}