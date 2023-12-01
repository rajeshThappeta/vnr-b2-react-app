import {useContext} from 'react'
import { usersContext } from '../../contexts/usersContext'

function UsersCount() {

    let [users]=useContext(usersContext)

  return (
    <div>UsersCount {users.length}</div>
  )
}

export default UsersCount