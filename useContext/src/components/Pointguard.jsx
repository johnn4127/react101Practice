import React, { useContext } from 'react'
import {useState} from 'react'
import { PlayerContext } from '../App'



const Pointguard = () => {

    const [courtVision, setCourtVision] = useState(85)
    const[turnover, setTurnover] = useState(0)

    const team = useContext(PlayerContext)
  return (
    <div>
        <h2>Point Guard Stats</h2>
        <p>Team: {team}</p>
        <p>Ability to see the court: {courtVision}</p>
        <p>Likelihood to turn the ball over: {turnover}</p>
    </div>
  )
}

export default Pointguard