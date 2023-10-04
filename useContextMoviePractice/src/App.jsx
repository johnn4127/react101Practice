import React,{useState, useContext,createContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import Movie1 from './components/Movie1'
import Movie2 from './components/Movie2'
import Movie3 from './components/Movie3'
import Movie4 from './components/Movie4'
import Navbar from './components/Navbar'
import './App.css'


export const MovieContext = createContext();



const App = () => {

  const [rating,setRating]=useState('PG-13')
  const [genre,setGenre] = useState('action, adventure')
  

  return (
    <div>
      
      <MovieContext.Provider value={[{rating:rating, genre:genre}]}>
        <Navbar/>
      <Routes>
        
      <Route path='/' element={<Homepage/>}/>
      <Route path='/movie1' element={<Movie1/>}/>
      <Route path='/movie2' element={<Movie2/>}/>
      <Route path='/movie3' element={<Movie3/>}/>
      <Route path='/movie4' element={<Movie4/>}/>
        
      </Routes>
     
      </MovieContext.Provider>


    </div>
  )
}

export default App
