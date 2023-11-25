import {useState} from 'react'
import AddTodo from './AddTodo'
import TasksList from './TasksList'
import TasksCount from './TasksCount'

function ManageTodos() {

    //state of AddTodo component
    let [tasks,setTasks]=useState([])

  return (
    <div>
        <div className="row mt-5">
            <div className="col-sm-4">
                <AddTodo tasks={tasks} setTasks={setTasks} />
            </div>
            <div className="col-sm-4">
                <TasksList tasks={tasks} />
            </div>
            <div className="col-sm-4">
                <TasksCount tasks={tasks} />
            </div>
        </div>
    </div>

  )
}

export default ManageTodos