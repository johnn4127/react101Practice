import React,{useContext} from 'react'

import { CharacterPowersContext } from './Movie1'
const Gwen = () => {
    const powerInfo = useContext(CharacterPowersContext)
    console.log(powerInfo)
  return (

    <div>
        <h1>Gwen</h1>
        <p>Power:{powerInfo}</p>
    </div>
  )
}

export default Gwen