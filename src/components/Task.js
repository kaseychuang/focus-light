import React, {useState} from 'react';

// Props
// task object with completed and description field

const Task = (props) => {
    // State
    // completed
    // description
    const [completed, setCompleted] = useState(props.task.completed)

    // set up handler on the checkbox later? Might have to use a reference

    return (
        <div>
            <p>{props.task.description}</p>
            <p>Completed: {completed.toString()}</p>
        </div>
    )
}

export default Task;