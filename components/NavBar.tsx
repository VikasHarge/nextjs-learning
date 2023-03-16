import { useRouter } from 'next/router'
import React from 'react'
import LinkTo from './LinkTo'
import { useSession, signIn, signOut } from "next-auth/react"
import Button from './Buttons'

const NavBar = () => {

  const router = useRouter()

  const {data : session} = useSession()




  return (
    <div className='w-full h-fit bg-lightBlue py-4x px-12x flex justify-center ' >
      <nav className='flex flex-row w-[90%] justify-between items-center' >
        <div>
          <h1>NextJs</h1>
        </div>
        <ul className='flex flex-row gap-4' >
          {
            session ? <>
            <h1>{session.user?.name}</h1>
            <button onClick={() => signOut()}>Sign out</button>
            </> : <>
            <h1>Please Login</h1>
            <Button
            onClick={()=>signIn()}
            >Login</Button>
            </>
          }
        </ul>
      </nav>
    </div>
  )
}

export default NavBar