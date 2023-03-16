import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps : {session, ...pageProps} }: AppProps) {

  if(Component?.getLayout as any){
    return Component.getLayout(<Component {...pageProps} />)
  }

  return <>
  <SessionProvider session={session} >
  <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </SessionProvider>
  </>
}
