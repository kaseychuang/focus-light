import React, { useState, useEffect } from 'react';
import './Timer.css';
import UIfx from 'uifx';
import alertAudio from '../alert.mp3';

// props
// time: given in seconds 
const Timer = (props) => {
    const [isRunning, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(10);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const alert = new UIfx(
        alertAudio, 
        {
            volume: 0.5, 
            throttleMs: 100
        }
    )

    // timer set up 
    useEffect(() => {
        setTime(props.time);
    }, [props.time])

    // Sets up Interval to make time count down
    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            alert.play();
                            clearInterval(interval);
                        } else {
                            setHours(hours - 1);
                            setMinutes(59);
                        }
                    }
                    else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
        } else if (!isRunning || (seconds === 0 && minutes === 0 && hours === 0)) {
            clearInterval(interval);
            setRunning(false);
        }
        return () => clearInterval(interval);
    }, [isRunning, seconds, minutes, hours, alert])

    // Sets Time given time in SECONDS
    const setTime = (time) => {
        time = time || 60; // make default 60 seconds
        const numHours = Math.floor(time /3600);
        time = time - (numHours * 3600)
        const numMin = Math.floor(time / 60);
        const numSec = time - (numMin * 60);
        setHours(numHours);
        setMinutes(numMin);
        setSeconds(numSec);
    }

    // Resets the timer 
    const reset = () => {
        setRunning(false);
        setTime(props.time);
    }

    // CONDITIONAL RENDERING
    const button = () => {
        if (isRunning) {
            return (<button onClick={() => { setRunning(false) }} className="btn btn-danger btn-block">Stop</button>)
        }
        else {
            return (<button onClick={() => { setRunning(true) }} className="btn btn-primary btn-block">Start</button>)
        }
    }

    return (
        <div className = "container" id="timer">
            <h1>TIMER</h1>
            <div className = "container" id="face">
                <h1 className = "container-fluid" id="time" >
                    {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h1>
            </div>

            <div id="buttons" className="row">
                <div className="col-6">
                    {button()}
                </div>
                <div className="col-6">
                    <button onClick={reset} className="btn btn-dark btn-block">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Timer;