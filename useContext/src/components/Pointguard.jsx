import React from 'react'
import {useState} from 'react'
import { PlayerContext } from '../App'



const Pointguard = () => {

    const [courtVision, setCourtVision] = useState(85)
    const[turnover, setTurnover] = useState(0)


  return (
    <div>
        <h2>Point Guard Stats</h2>
        <p>Ability to see the court: {courtVision}</p>
        <p>Likelihood to turn the ball over: {turnover}</p>
    </div>
  )
}

export default Pointguard