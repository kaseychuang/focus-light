import React, { useState } from 'react';
import Task from './Task';
import './TaskList.css';

// Props
// title: title of the list (default = My Tasks)

const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);
    const [taskToAdd, setTaskToAdd] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            description: taskToAdd,
            completed: true
        }
        setTasks(tasks.concat(newTask));
        setTaskToAdd("");
    }

    const renderedTasks = tasks.map((task) => {
        return (<Task key={task.description} task={task} />)
    })

    return (
        <div id = "task-list" className="container task-list">
            <h1 id = "title">{props.title || "My Tasks"}</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        id = "task-input"
                        className="mr-2"
                        placeholder="task description"
                        type="text" name="description"
                        required
                        value={taskToAdd}
                        onChange={(e) => { setTaskToAdd(e.target.value) }}
                    />
                    <button id = "add-button" className="btn btn-success btn-sm" type="submit">Add Task</button>
                </div>
            </form>
            <div className="container">
                {renderedTasks}
            </div>
        </div>
    )
}

export default TaskList;