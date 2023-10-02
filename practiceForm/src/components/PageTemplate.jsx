import React from 'react'
import Navbar1 from './Navbar1'

export default function PageTemplate(props) {
  return (
    <div>
        <Navbar1/>
        {props.children}
    </div>
  )
}