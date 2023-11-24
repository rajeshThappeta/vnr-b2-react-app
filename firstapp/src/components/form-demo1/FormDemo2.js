import { useForm } from "react-hook-form";
import { useState } from "react";

function FormDemo2() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [users, setUsers] = useState([]);

  // console.log("errors :",errors)

  //form submission
  function handleFormSubmit(userObj) {
    setUsers([...users, userObj]);
  }

  //delete user
  function deleteUserByIndex(index){
    let copyUsers=[...users]
    copyUsers.splice(index,1)
    setUsers(copyUsers)
  }

  return (
    <div>
      <h1 className="display-1 text-center text-info">Form Demo</h1>
      <div className="row">
        <div className="col-sm-4">
          <form
            className="w-75 bg-light p-4 mx-auto mt-5"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Username"
              {...register("username", {
                required: true,
                minLength: 4,
                maxLength: 6,
              })}
            />

            {/* validation error message */}
            {errors.username?.type === "required" && (
              <p className="text-danger lead fs-5">Username is required</p>
            )}
            {errors.username?.type === "minLength" && (
              <p className="text-danger lead fs-5">
                Min length of username shd be 4
              </p>
            )}
            {errors.username?.type === "maxLength" && (
              <p className="text-danger lead fs-5">
                Max length of username is 6
              </p>
            )}
            <input
              type="password"
              className="form-control mb-3"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <p className="text-danger lead fs-5">Password is required</p>
            )}

            <select
              id=""
              className="form-select mb-3"
              {...register("skill", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Select skill
              </option>
              <option value="css">CSS</option>
              <option value="js">JavaScript</option>
              <option value="react">ReactJS</option>
            </select>

            {errors.skill?.type === "required" && (
              <p className="text-danger lead fs-5">Select a skill</p>
            )}

            <div className="mb-3">
              {/* male */}
              <div className="form-check">
                <input
                  type="radio"
                  id="m"
                  className="form-check-input"
                  {...register("gender", { required: true })}
                  value="male"
                />
                <label htmlFor="m" className="form-check-label">
                  Male
                </label>
              </div>
              {/* female */}
              <div className="form-check">
                <input
                  type="radio"
                  id="f"
                  className="form-check-input"
                  {...register("gender", { register: true })}
                  value="female"
                />
                <label htmlFor="f" className="form-check-label">
                  Female
                </label>
              </div>
            </div>
            {/* gender validation error message */}
            {errors.gender?.type === "required" && (
              <p className="text-danger lead fs-5">Select a gender</p>
            )}

            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
        <div className="col-sm-8">
          {users.length!==0? <table className="table text-center table-info">
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Skill</th>
                <th>Gender</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((userObj,index)=><tr key={index}>
                  <td>{userObj.username}</td>
                  <td>{userObj.password}</td>
                  <td>{userObj.skill}</td>
                  <td>{userObj.gender}</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>deleteUserByIndex(index)}>x</button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>:<p className="display-3 text-center mt-5 text-warning">No Users</p>}
         
        </div>
      </div>
    </div>
  );
}

export default FormDemo2;
