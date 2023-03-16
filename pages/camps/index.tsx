import CampTable from '@/components/CampTable';
import LinkTo from '@/components/LinkTo';
import React from 'react'

const Camps = ({camps} : any) => {
  return (
    <div>
        <h1>Camp list</h1>
        <CampTable camps={camps} />
        <LinkTo path='/' title='home' />

        
    </div>
  )
}

export default Camps


export async function getStaticProps(){
    const res = await fetch(`http://localhost:4000/camps`);

    const camps = await res.json();

    console.log(camps)

    return {
        props : {
            camps
        },
        revalidate : 1,
    }
}