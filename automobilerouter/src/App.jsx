
import {Route, Routes, Link} from 'react-router-dom'
import Bmw from './components/Bmw'
import Homepage from './components/Homepage'
import Ferrari from './components/Ferrari'
import Toyota from './components/Toyota'
import './App.css'


const App = () => {
  return (
    <>

    <div>
      <Link to="/">Home</Link>
      <Link to="/toyota">Toyota</Link>
      <Link to="/ferrari">Ferrari</Link>
      <Link to="/bmw">BMW</Link>

    </div>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/toyota' element={<Toyota/>}/>
        <Route path='/ferrari' element={<Ferrari/>}/>
        <Route path='/bmw' element={<Bmw/>}/>
      </Routes>

      </>
  )
}

export default App