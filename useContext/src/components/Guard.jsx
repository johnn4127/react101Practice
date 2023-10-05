
import React, {useState, useContext} from 'react';
import {PlayerContext} from '../App'
import Pointguard from './Pointguard';




const Guard = () => {
    const team = useContext(PlayerContext)
    const [height, setHeight] = useState(72)
    const [handles,setHandles] = useState(50)
    const [assists, setAssists] = useState(80)
    const [dunk, setDunk] = useState(78)

    
  return (
    <div>
        
        <h3>Guard</h3>
        <p>Team: {team}</p>
        <p>Height: {height}</p>
        <p>Handles: {handles}</p>
        <p>Assists: {assists}</p>
        <p>Dunk: {dunk}</p>
        <Pointguard/>
    </div>
  )
}

export default Guard