import {useContext} from 'react'
import { todosContext } from '../../contexts/TodosContext'

function TasksList() { 

  let [tasks]= useContext(todosContext)
  return (
    <div className='text-center'>
    <p className="display-4 lead text-warning">Tasks List</p>
    {
        tasks.map((taskObj,index)=><p className='lead fs-3 text-white' key={index}>{taskObj.task}</p>)
    }
   
</div>
  )
}

export default TasksList