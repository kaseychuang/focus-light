import React, {useState} from 'react';
import TaskList from './TaskList';
import Timer from "./Timer";
import Quote from './Quote';
import TimeSelector from './TimeSelector';
import './App.css';
import { withCookies } from 'react-cookie';

const App = (props) => {
    const [time, setTime] = useState(0);
    const options = {
        "5 minutes": 300,
        "10 minutes": 600, 
        "20 minutes": 1200, 
        "30 minutes" : 1800,
        "1 hour": 3600, 
        "2 hours": 7200
    }
    
    const setTimer = (newTime) => {
        setTime(newTime);
    }

    return (
        <div className="container" id = "focus-light">
            <h1 id = "brand">FOCUS LIGHT</h1>
            <Quote />
            <div className="row">
                <div className="col-6">
                    <TaskList cookies={props.cookies} title="My Tasks" />
                </div>
                <div className="col-6">
                    <TimeSelector options = {options} setTimer = {setTimer}/>
                    <Timer time = {time}/>
                </div>
            </div>

        </div>
    )
}

export default withCookies(App);