import React from 'react'

const UserTable = ({users}:any) => {
  return (
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
        </tr>
    </thead>
    <tbody>
        {
            users.map((user: any, i: number) => {

                return <tr key={user.id} className='p-6x'>
                    <td className='p-6x' >{user.name}</td>
                    <td className='p-6x' >{user.email}</td>
                    <td className='p-6x' >{user.website}</td>
                </tr>
            })
        }
    </tbody>
</table>
  )
}

export default UserTable