import {useState} from 'react'

function FormDemo1() {

    let [username,setUsername]=useState('')
    let [password,setPassword]=useState('')


    //username handler
    function handleUsername(event){
       setUsername(event.target.value)
    }
    //password handler
    function handlePassword(event){
        setPassword(event.target.value)
    }

    //form submition handler
    function handleFormSubmit(event){
        //prevent page reload
        event.preventDefault();
        console.log({username,password})

    }

  return (
    <div>
        <h1 className="display-1 text-center text-info">Form Demo</h1>

        <form className='w-50 mx-auto mt-5' onSubmit={handleFormSubmit}>
            <input type="text" name="username" className='form-control mb-3' placeholder='Username' onChange={handleUsername} />
            <input type="password" name="password"  className="form-control mb-3" onChange={handlePassword} />
            <button type="submit" className="btn btn-success">Login</button>
        </form>
    </div>
  )
}

export default FormDemo1




