import LinkTo from '@/components/LinkTo'
import NewsTable from '@/components/NewsTable'
import React from 'react'

const News = ({newss} : any) => {
    return (
        <div>
            <h1>Latest News</h1>
            <p>(using server-side-rendering SSR)</p>
            <NewsTable newss={newss} />
            <LinkTo path='/' title='Home' />
            <p>Filter by category</p>
          <div className='flex flex-row' >
            <LinkTo path='/news/sports' title='sports' />
            <LinkTo path='/news/politics' title='politics' />
          </div>
        </div>
    )
}

export default News

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:4000/news`)
    const newss = await res.json()
    return {
        props: {
            newss
        }
    }

}