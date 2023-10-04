import React, {createContext,useContext, useState} from 'react'
import './App.css'
import Center from './components/Center'
import Guard from './components/Guard'
import Forward from './components/Forward'


//App -> Guard-> Pointguard, Shootingguard
export const PlayerContext = createContext()

function App() {

    
const [team, setTeam] = useState('Denver Nuggets');
  
  return (
    <>
      <div>
       <PlayerContext.Provider value={team}>
        {/* Guard, Forward, and Center should all be able to access the value team */}
      <Guard />
      <Center/>
      <Forward/>
      </PlayerContext.Provider>
      </div>
    </>
  )
}

export default App
