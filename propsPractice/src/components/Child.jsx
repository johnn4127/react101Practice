import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1 >Child</h1>
        <button onClick={()=> props.changeWord('ania')}>Change Title</button>
        
    </div>
  )
}

export default Child