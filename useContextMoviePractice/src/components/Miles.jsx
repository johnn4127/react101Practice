import React,{useContext} from 'react'

import { CharacterPowersContext } from './Movie1'
const Miles = () => {
    const powerInfo = useContext(CharacterPowersContext)
    console.log(powerInfo)
  return (

    <div>
        <h1>Miles</h1>
        <img src="https://assets.telegraphindia.com/telegraph/2023/Jul/1689594244_spiderman-miles.jpg" alt="" />
        <p>Power:{powerInfo}</p>
    </div>
    )
}

export default Miles