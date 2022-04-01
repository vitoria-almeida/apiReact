import styles from './index.module.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {apikey} from '../../keyapi/key'

function Home() {
    const url = 'https://image.tmdb.org/t/p/w500'
    const [movies, setMovies] = useState([])
    useEffect(() => {
        //consumir api
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    })
  

    return(
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <a href=""><img src={`${url}${movie.poster_path}`} alt=""/></a>                  
                            <span>{movie.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home