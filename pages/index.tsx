import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LinkTo from '@/components/LinkTo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Js learning</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col justify-center items-center' >
        <h1 className='text-3xl  font-bold mb-6 ' >Next js learning</h1>
        <div className='flex' >
        <LinkTo path='/blogs' title='blogs' />
        <LinkTo path='/products' title='Products' />
        <LinkTo path='/users' title='Users' />
        <LinkTo path='/posts' title='Posts' />
        <LinkTo path='/camps' title='Camps' />
        <LinkTo path='/news' title='News' />
        <LinkTo path='/events' title='Events' />
        <LinkTo path='/dashboard' title='dashboard' />
        </div>


        <h1 className='text-3xl  font-bold mb-6 mt-12 ' >Next js Backend learning</h1>
        <div className='flex' >
        <LinkTo path='/comments' title='comments' />
        </div>
      </main>
    </>
  )
}


