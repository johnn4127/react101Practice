import React, { useState, useContext } from 'react'
import { MovieContext } from '../App'
const Movie4 = () => {

    const [title, setTitle] = useState('Spider-Man:No Way Home')
    const movieInfo = useContext(MovieContext)


    return (
        <div>
            <h1>Title: {title}</h1>
            <img src="https://m.media-amazon.com/images/M/MV5BNzE5NTk5NDQ0NV5BMl5BanBnXkFtZTgwNjU3ODIxMjI@._V1_.jpg" alt="" />
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