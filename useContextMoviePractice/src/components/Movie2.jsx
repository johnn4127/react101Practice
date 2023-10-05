import React, { useState, useContext } from 'react'
import { MovieContext } from '../App'
const Movie2 = () => {

    const [title, setTitle] = useState('Spider-Man 2(2004)')
    const movieInfo = useContext(MovieContext)




    return (
        <div>
            <h1>Title: {title}</h1>
            <img src="https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" alt="" />
            {movieInfo && movieInfo.map((movieData, index) => (
                <div key={index}>
                    <p > Rating: {movieData.rating} </p>
                    <p > Genre: {movieData.genre} </p>

                </div>
            ))}
        </div>
    )
}

export default Movie2