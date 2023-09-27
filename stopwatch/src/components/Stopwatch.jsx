import React, {useState, useEffect} from 'react'

const Stopwatch = () => {
    const [count, setCount] = useState(0);
    const [isActive, setisActive] = useState(false)

    const startStop = ()=>{ //startStop arrow function. if isActive is at first false then isActive will change to true. Trying to implement start stop. if isActive is false then isActive will change to true.
        if(isActive === false){
            setisActive(true)
        }
        if(isActive === true){
            setisActive(false)
        }
        console.log(isActive)
    }
    const reset = ()=>{ //reset arrow function. isActive will now pause. count is now at 0. Successfully resetting the count.
        setisActive(false)
        setCount(0)
        console.log(count)
    }

    useEffect(()=>{
        let interval = 0
        if(isActive === true){
            interval = setInterval(()=>{
                setCount(count + 1);
            }, 1000)
        }
        return()=>clearInterval(interval);

    })






  return (
    <div>
        <div> 
            {count}
        </div>
    <button onClick={startStop}> 
    {/* if isActive is true then it will show Pause if isactive is false then it will show start */}
        {isActive ? "Pause" : "Start"} 
    </button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch