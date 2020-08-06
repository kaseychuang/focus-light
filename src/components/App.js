import React from 'react';
import TaskList from './TaskList';
import Timer from "./Timer";
import Quote from './Quote';
import './App.css';
import { withCookies } from 'react-cookie';

const App = (props) => {

    return (
        <div className="container" id = "focus-light">
            <h1 id = "brand">FOCUS LIGHT</h1>
            <Quote />
            <div className="row">
                <div className="col-6">
                    <TaskList cookies={props.cookies} title="Tuesday Tasks" />
                </div>
                <div className="col-6">
                    <Timer time = {5}/>
                </div>
            </div>

        </div>
    )
}

export default withCookies(App);