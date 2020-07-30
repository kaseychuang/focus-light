import React from 'react';
import TaskList from './TaskList';
import {withCookies} from 'react-cookie';

const App = (props) => {
    return (
        <div className="container">
            <TaskList cookies = {props.cookies} title = "Tuesday Tasks"/>
        </div>
    )
}

export default withCookies(App);