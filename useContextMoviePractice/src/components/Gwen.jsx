import React,{useContext} from 'react'

import { CharacterPowersContext } from './Movie1'
const Gwen = () => {
    const powerInfo = useContext(CharacterPowersContext)
    console.log(powerInfo)
  return (

    <div>
        <h1>Gwen</h1>
        <img src="https://ca-times.brightspotcdn.com/dims4/default/8e8801e/2147483647/strip/true/crop/2640x1760+959+0/resize/2400x1600!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcb%2Fb0%2F7007d68042bcb773e30a57cf7350%2Fet-spiderman-across-the-spiderverse-2023-004.JPG" alt="" />
        <p>Power:{powerInfo}</p>
    </div>
  )
}

export default Gwen