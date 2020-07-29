import React, { useState } from 'react';
import "./Task.css";

// Props
// task object with completed and description field

const Task = (props) => {
    // State
    // completed
    // description
    const [completed, setCompleted] = useState(props.task.completed)

    // set up handler on the checkbox later? Might have to use a reference
    const checkbox = completed ? (<i className="fa fa-square 5x"> </i>) : (<i className="fa fa-check-square"></i>);
    const complete = completed ? '' : 'completed';

    const completeTask = () => {
        console.log("check clicked!")
        setCompleted(!completed);
        console.log(completed);
    }

    return (
        // <div className = "container">
            <div className="task">
                <p className={`description task-element ${complete}`}>{props.task.description}  </p>
                <div className = "task-element checkbox" onClick={completeTask}>
                    {checkbox}
                </div>
            </div>
        // </div>


    )
}

export default Task;