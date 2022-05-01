import React, { useState, useEffect } from 'react'
import axios from "./Axios"
import YouTube from 'react-youtube'
import "./Row.css"
import movieTrailer from "movie-trailer"


const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplayer: 1,
        }

    }
    function handleClick(movie) {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search())
                    setTrailerUrl(urlParams.get("v"))
                })
                .catch((error) => console.log(error))
        }
    }
    // console.log(movies)
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map((movie, index) => (
                    <img key={index} src={isLargeRow ? `${base_url}${movie.poster_path}` : `${base_url}${movie.backdrop_path}`} alt={movie.name} onClick={handleClick(movie)} className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
export default Row