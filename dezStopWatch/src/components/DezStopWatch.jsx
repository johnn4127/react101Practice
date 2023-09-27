import React,{useState,useEffect, useRef} from 'react'


const DezStopWatch = () => {
    const [lapse, setLapse] = useState(0)
    const [running, setRunning] = useState(false)
    let intervalRef = useRef(null)


    useEffect(() => {
      //runs when the component mounts (aka on initialization)
    

        //the return below will run when the component unmounts
      return () =>  {
        clearInterval(intervalRef.current)
      }
    }, [])
    
    const handleClearClick = () =>{
        //I want this to make the clock stop
        clearInterval(intervalRef.current)
        setLapse(0)
        setRunning(false)
    }

    const handleRunClick = () => {
        //Needs to check if the clock is running
        if(running){
            //stop the clock by allowing the user to pause
            clearInterval(intervalRef.current)
        }
        else {
            let startTime = Date.now() -lapse;
            console.log('This is the start time', startTime)
            
            intervalRef.current = setInterval(()=>{
                setLapse(Date.now()- startTime)
            }, 0)
        }
        setRunning(!running)
    }
  return (
    <div>
        <label>{lapse}</label>
        <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'} </button>
        <button onClick={handleClearClick}> Clear</button>

    </div>
  )
}

export default DezStopWatch