import {useEffect,useState} from 'react'

function EffectsDemo() {

    let [users,setUsers]=useState([])

    // useEffect(()=>{
    //    //make HTTP req
    //    fetch('https://jsonplaceholder.typicode.com/users')
    //    .then(res=>res.json())
    //    .then(userData=>setUsers(userData))
    //    .catch(err=>console.log(err))
    // },[])

    function getUsersData(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(userData=>setUsers(userData))
        .catch(err=>console.log(err))
    }
    

  return (
    <div className='text-center container'>
        <h1 className="display-1 ">Side effects Demo</h1>
        <button className="btn btn-primary m-5" onClick={getUsersData}>Get User</button>
        {/* render users data table */}
        {/* <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(userObj=><tr key={userObj.id}>
                        <td>{userObj.id}</td>
                        <td>{userObj.name}</td>
                        <td>{userObj.username}</td>
                        <td>{userObj.email}</td>
                    </tr>)
                }
            </tbody>
        </table> */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {
                users.map(userObj=><div className='col ' key={userObj.id}>
                    <div className="card card-body h-100">
                        <h2>{userObj.id}</h2>
                        <p className="lead">{userObj.name}</p>
                        <p className="lead fs-1">{userObj.name}</p>
                        <p className="lead">{userObj.username}</p>
                        <p className="lead">{userObj.email}</p>
                    </div>
                </div>)
            }
        </div>

     </div>
  )
}

export default EffectsDemo