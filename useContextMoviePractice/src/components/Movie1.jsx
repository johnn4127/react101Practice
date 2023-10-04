import React, { useState, useContext, createContext } from 'react'
import { MovieContext } from '../App'
import Gwen from './Gwen';
import Miles from './Miles';
export const CharacterPowersContext = createContext();


const Movie1 = () => {

    const [title, setTitle] = useState('Into the Spider-Verse')
    const movieInfo = useContext(MovieContext)
    const [powers, setPowers] = useState('Spider-Power')

    return (
        <div>
            <h1>Title: {title}</h1>
            <h2>map</h2>
            <CharacterPowersContext.Provider value={powers}>
            <Gwen />
            <Miles/>
            </CharacterPowersContext.Provider>
            {movieInfo && movieInfo.map((movieData, index) => (
                <div key={index}>
                    <p > Rating: {movieData.rating} </p>
                    <p > Genre: {movieData.genre} </p>

                </div>
            ))}
        </div>
    )
}

export default Movie1