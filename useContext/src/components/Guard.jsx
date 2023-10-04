
import React, {useState, useContext} from 'react';
import {PlayerContext} from '../App'




const Guard = () => {
    const team = useContext(PlayerContext)
    const [height, setHeight] = useState(72)
    const [handles,setHandles] = useState(50)
    const [assists, setAssists] = useState(80)
    const [dunk, setDunk] = useState(78)

    
  return (
    <div>
        
        <h3>Create a Player</h3>
        <p>Team: {team}</p>
        <p>Height: {height}</p>
        <p>Handles: {handles}</p>
        <p>Assists: {assists}</p>
        <p>Dunk: {dunk}</p>
    </div>
  )
}

export default Guard