import React, { useState, useContext } from 'react'
import { MovieContext } from '../App'
const Movie3 = () => {
    const [title, setTitle] = useState('Spider-Man')
    const movieInfo = useContext(MovieContext)




    return (
        <div>
            <h1>Title: {title}</h1>
            <img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg" alt="" />
            {movieInfo && movieInfo.map((movieData, index) => (
                <div key={index}>
                    <p > Rating: {movieData.rating} </p>
                    <p > Genre: {movieData.genre} </p>

                </div>
            ))}
        </div>
    )
}

export default Movie3