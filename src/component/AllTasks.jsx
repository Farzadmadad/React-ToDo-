import React from 'react'

export default function AllTasks(props) {
    //console.log(props.tasks)
  return (
   <div className='list-task'>
     
        <ul>
        {
            props.tasks && props.tasks.map( (task,index) => {
                return(
                    
                <li key={index}>
                    
                    {task.titel}:{task.description}
                    <button onClick={() =>props.deletTask(index)}>Done</button>
                </li>
                )
            })
        }
    </ul>
   </div>
  )
}
