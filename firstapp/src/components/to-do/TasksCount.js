import React from 'react'

function TasksCount(props) { //{tasks:[]}
  return (
    <div className='text-center'>
    <p className="display-4 lead text-warning">Tasks Count</p>
     <h2 className='text-white'>{props.tasks.length}</h2>

</div>
  )
}

export default TasksCount