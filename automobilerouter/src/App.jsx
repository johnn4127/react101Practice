
import {Route, Routes, Link} from 'react-router-dom'
import Bmw from './components/Bmw'
import Homepage from './components/Homepage'
import Lexus from './components/Lexus'
import Toyota from './components/Toyota'
import './App.css'


const App = () => {
  return (
    <>

    <div>
      <Link to="/">Home</Link>
      <Link to="/toyota">Toyota</Link>
      <Link to="/lexus">Lexus</Link>
      <Link to="/bmw">BMW</Link>

    </div>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/toyota' element={<Toyota/>}/>
        <Route path='/lexus' element={<Lexus/>}/>
        <Route path='/bmw' element={<Bmw/>}/>
      </Routes>

      </>
  )
}

export default App