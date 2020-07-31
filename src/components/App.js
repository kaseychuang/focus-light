import React from 'react';
import TaskList from './TaskList';
import Timer from "./Timer";
import { withCookies } from 'react-cookie';

const App = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <TaskList cookies={props.cookies} title="Tuesday Tasks" />
                </div>
                <div className="col-6">
                    <Timer />
                </div>
            </div>

        </div>
    )
}

export default withCookies(App);