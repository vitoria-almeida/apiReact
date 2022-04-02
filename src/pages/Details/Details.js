import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { apikey } from '../../keyapi/key'
import styles from './Details.module.css'


function Details() {
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const url = 'https://image.tmdb.org/t/p/w500'
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US&page=1`)
        .then(responde => responde.json())
        .then(data => {
            const movie = {
                id,
                title: data.title,
                synopsis: data.overview,
                image: `${url}${data.poster_path}`,
                release: data.release_date
            }

            setMovie(movie)
        })

    }, [id])

    return (
        <div className={styles.detailsComponent}>
            <div className={styles.movie}>
                <img src={movie.image} alt={movie.synopsis}/>           
                <div className={styles.details}>
                    <h1>{movie.title}</h1>
                    <span>Synopsis: {movie.synopsis}</span>
                    <span className={styles.releaseDate}>Release Date: {movie.release}</span>
                    <Link to="/">
                        <button>Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Details