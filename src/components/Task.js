import React, { useState } from 'react';
import "./Task.css";

// Props
// task object with completed and description field
const Task = (props) => {
    // State
    // completed
    // description
    const [completed, setCompleted] = useState(props.task.completed)

    const checkbox = completed ? (<i className="fa fa-square 5x"> </i>) : (<i className="fa fa-check-square"></i>);
    const complete = completed ? '' : 'completed';

    const completeTask = () => {
        setCompleted(!completed);
    }

    return (
        <div className="task">
            <p className={`description task-element ${complete}`}>{props.task.description}  </p>
            <div className="task-element checkbox" onClick={completeTask}>
                {checkbox}
            </div>
        </div>
    )
}

export default Task;