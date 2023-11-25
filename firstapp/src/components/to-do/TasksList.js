import React from 'react'

function TasksList(props) { //{tasks:[]}
  return (
    <div className='text-center'>
    <p className="display-4 lead text-warning">Tasks List</p>
    {
        props.tasks.map((taskObj,index)=><p className='lead fs-3 text-white' key={index}>{taskObj.task}</p>)
    }
   
</div>
  )
}

export default TasksList