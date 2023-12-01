import React from 'react'
import UsersCount from './UsersCount'
import UsersList from './UsersList'

function Users() {
  return (
    <div>
        <UsersList />
        <UsersCount />
    </div>
  )
}

export default Users