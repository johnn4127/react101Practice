import React, { useState, useEffect, useRef } from 'react';

const DezStopWatch = () => {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);
  let intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleClearClick = () => {
    clearInterval(intervalRef.current);
    setLapse(0);
    setRunning(false);
  };

  const convertToTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;
    
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
  };

  const handleRunClick = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      let startTime = Date.now() - lapse;
      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }
    setRunning(!running);
  };

  return (
    <div>
      <div>
        <h1 className='titleStop'>Stopwatch</h1>
      </div>
      <div className='clock'>
        <label className='timer'>{convertToTime(lapse)}</label>
      </div>
      <div className='stopWatchButtons'>
        <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={handleClearClick}>Clear</button>
      </div>
    </div>
  );
};

export default DezStopWatch;
