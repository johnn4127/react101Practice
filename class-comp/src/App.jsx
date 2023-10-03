import React from 'react'
import ClassForm from './components/ClassForm'
import FunctionalForm from './components/FunctionalForm'
import './App.css'

function App() {

  return (
    <>
      <div>
      <ClassForm accountnumber={'123'} id={1}/>
      <FunctionalForm accountnumber={'123'} id={1}/>
      </div>
    </>
  )
}

export default App
