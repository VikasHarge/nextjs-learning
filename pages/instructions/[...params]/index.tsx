import { useRouter } from 'next/router'
import React from 'react'

const AllRoutes = () => {
    const router = useRouter()

    console.log(router);
    
    return (
        <div>
            <h1>Catch All routes</h1>
        </div>
    )
}

export default AllRoutes