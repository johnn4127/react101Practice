import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div>
      <Link to='/'>Home</Link>
      <Link to='/movie1'>Movie1</Link>
      <Link to='/movie2'>Movie2</Link>
      <Link to='/movie3'>movie3</Link>
      <Link to='/movie4'>movie4</Link>

      </div>
    </div>
  )
}

export default Navbar