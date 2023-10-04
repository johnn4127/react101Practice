import React,{useContext} from 'react'

import { CharacterPowersContext } from './Movie1'
const Miles = () => {
    const powerInfo = useContext(CharacterPowersContext)
    console.log(powerInfo)
  return (

    <div>
        <h1>Miles</h1>
        <p>Power:{powerInfo}</p>
    </div>
    )
}

export default Miles