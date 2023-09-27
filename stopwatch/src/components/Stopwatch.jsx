import React, { useState, useEffect } from "react";
import '../App.css'
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 1000); 
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };
  const convertToTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;
  };

  
  const reset = () => {
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">{time}  secondz</p>
      
      <div >
        <button onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;