import React, {useState, useEffect} from 'react';
import './Timer.css';

// props
// time: given in seconds 
const Timer = (props) => {
    const [isRunning, setRunning] = useState(true);
    const [seconds, setSeconds] = useState(10);
    const [minutes, setMinutes] = useState(1);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        calculateTime();
    }, [])

    // useEffect(() => {
    //     if (isRunning){}
    // }, [isRunning])

    const myInterval = setInterval(() => {
        // check if we need to change minutes
        console.log(isRunning);
        if (isRunning){
            if (seconds > 0){
                setSeconds(seconds - 1);
            }
            if (seconds === 0){
                if (minutes === 0){
                    if (hours === 0){
                        clearInterval(myInterval);
                    }else{
                        setHours(hours - 1);
                        setMinutes(59);
                    }
                }
                else{
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }
    }, 1000)

    const calculateTime = () => {
        // calculate time and set state according to given time from props! 
        const time = props.time;

        
    }

    return (
            <div id="timer">
                <h1>TIMER</h1>
                <div id="face">
                    <h1 id="time" >
                    {hours < 10? `0${hours}`:hours}:{minutes < 10? `0${minutes}`:minutes}:{seconds < 10? `0${seconds}`:seconds}
                    </h1>
                </div>

                <div id="buttons" className="row">
                    <div className="col-4">
                        <button onClick = {() => {setRunning(true)}} className="btn btn-primary btn-block">Start</button>
                    </div>
                    <div className="col-4">
                        <button onClick = {() => {setRunning(false)}} className="btn btn-danger btn-block">Stop</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-dark btn-block">Reset</button>
                    </div>
                </div>
            </div>
    )
}

export default Timer;