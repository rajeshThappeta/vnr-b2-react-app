import React from 'react'

function Register() {
  return (
    <div>
       <h1 className="display-1 text-center text-secondary">User Regsitration</h1>
       <form className='w-50 mx-auto'>
        <input type="text" name="" id="" className="form-control mb-3" placeholder='Username' />
        <input type="text" name="" id="" className="form-control mb-3" placeholder='Password' />
        <input type="text" name="" id="" className="form-control mb-3" placeholder='Email' />
        <input type="text" name="" id="" className="form-control mb-3" placeholder='date of birth' />
        <button type="submit" className="btn btn-success d-block mx-auto">Register</button>
       </form>
    </div>
  )
}

export default Register