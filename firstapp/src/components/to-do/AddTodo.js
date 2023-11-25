import {useState} from 'react'
import {useForm} from 'react-hook-form'

function AddTodo(props) { //{tasks:[],setTasks:function}


        let {register,handleSubmit}=useForm()

        function handlFormSubmit(taskObj){
            props.setTasks([...props.tasks,taskObj])
        }

  return (
    <div className='text-center'>
        <p className="display-4 lead text-warning">Add New Todo</p>
        <form  onSubmit={handleSubmit(handlFormSubmit)}>
            <input type="text" name="" id="" className="form-control mb-4" {...register("task")} />
            <button type="submit" className="btn btn-light">Add</button>
        </form>
    </div>
  )
}

export default AddTodo