import LinkTo from '@/components/LinkTo'
import UserTable from '@/components/UserTable'
import React from 'react'



const Users = ({ users }: any) => {
    return (
        <div>
            <h1>List of users</h1>
            <UserTable users={users} />

            <LinkTo path='/' title='back' />
        </div>
    )
}

export default Users

// to enable data fetching in pre rendering

export async function getStaticProps() {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();
    console.log(users);

    return {
        props: {
            users
        }
    }

}
