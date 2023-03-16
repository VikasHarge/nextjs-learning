import CampTable from '@/components/CampTable';
import LinkTo from '@/components/LinkTo';
import React from 'react'

import { GetStaticProps } from 'next';

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


export const getStaticProps : GetStaticProps = async () => {
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