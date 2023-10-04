import React, { useState, useContext } from 'react'
import { MovieContext } from '../App'
const Movie4 = () => {

    const [title, setTitle] = useState('Spider-Man:No Way Home')
    const movieInfo = useContext(MovieContext)


    return (
        <div>
            <h1>Title: {title}</h1>
            <h2>map</h2>
            {movieInfo && movieInfo.map((movieData, index) => (
                <div key={index}>
                    <p > Rating: {movieData.rating} </p>
                    <p > Genre: {movieData.genre} </p>

                </div>
            ))}
        </div>
    )
}

export default Movie4