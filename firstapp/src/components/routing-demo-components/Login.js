import React from 'react'

function Login() {
  return (
    <div>
    <h1 className="display-1 text-center text-secondary">User Login</h1>
    <form className='w-50 mx-auto'>
     <input type="text" name="" id="" className="form-control mb-3" placeholder='Username' />
     <input type="text" name="" id="" className="form-control mb-3" placeholder='Password' />
    
     <button type="submit" className="btn btn-success d-block mx-auto">Login</button>
    </form>
 </div>
  )
}

export default Login