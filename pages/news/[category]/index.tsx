import LinkTo from '@/components/LinkTo'
import NewsTable from '@/components/NewsTable'
import React from 'react'

const NewsByCategory = ({news, category} : any )  => {
  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center' >
        <h1>News List By Category {category}</h1>
        <NewsTable newss={news} />
        <LinkTo path='/news' title='back' />
    </div>
  )
}

export default NewsByCategory


export async function getServerSideProps(context : any){
    const {params, req, res} = context

    console.log(context);
  
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie', ['name=vikas'])
    const {category} = params

    const resp = await fetch(`http://localhost:4000/news?category=${category}`)
    const news = await resp.json();


    return {
        props : {
            news,
            category
        }
    }
}