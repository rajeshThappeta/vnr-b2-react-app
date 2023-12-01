import React from 'react'
import { todosContext } from "../../contexts/TodosContext";
import { useContext } from "react";

function TasksCount() { 
  let [tasks, setTasks] = useContext(todosContext);
  return (
    <div className='text-center'>
    <p className="display-4 lead text-warning">Tasks Count</p>
     <h2 className='text-white'>{tasks.length}</h2>

</div>
  )
}

export default TasksCount