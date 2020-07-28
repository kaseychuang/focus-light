import React, { useState, useEffect } from 'react';
import Task from './Task';

// Props
// title: title of the list (default = My Tasks)

const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);
    const [taskToAdd, setTaskToAdd] = useState("");
    // tasks are objects with a completed, description fields 

    const onSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            description: taskToAdd,
            completed: false
        }
        setTasks(tasks.concat(newTask));
        setTaskToAdd("")
    }

    const renderedTasks = tasks.map((task) => {
        return <Task key = {task.description} task={task} />
    })

    return (
        <div>
            <h1>{props.title || "My Tasks"}</h1>
            {renderedTasks}

            <hr></hr>
            <form onSubmit = {onSubmit}>
                <label>Enter Task Description </label>
                <input type="text" name = "description" value = {taskToAdd} onChange = {(e) => {setTaskToAdd(e.target.value)} }/>
                <button>Add Task</button>
            </form>

        </div>
    )
}

export default TaskList;