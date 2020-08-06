import React from 'react';
import "./TimeSelector.css";
// props
// callback (to pass selected time back on submit)
// options object (name, value)  
const TimeSelector = (props) => {

    const getOptions = () => {
        const options = props.options || {"One":1, "Two":2, "Three":3}
        console.log(options)
        return Object.keys(options).map((option) => {
            return <option value = {options[option]}>{option}</option>
        })
    }
    
    const onClick = () => {
        const e = document.getElementById('time-select')
        const time = e.options[e.selectedIndex].value;
        if (time !== "Select Time Interval..."){
            props.setTimer(time);
        }
        console.log("Set time: " + time)
    }

    return (
        <div className = "container" id = "time-selector">
            <div className="input-group">
                <select className="custom-select" id="time-select">
                    <option selected>Select Time Interval...</option>
                    {getOptions()}
                </select>
                <div className="input-group-append">
                    <button onClick = {onClick} className="btn btn-success" type="button">Set Timer</button>
                </div>
            </div>
        </div>
    )
}

export default TimeSelector;