import fetch from 'node-fetch'
import axios from 'axios'

let movieUrl = `${process.env.API_URL}`
let movieList = movieUrl + 'list_movies.json'
let movieDetail = movieUrl + 'movie_details.json'

const getMovies = (limit) => {
    movieList += '?limit=' + (limit ?? 10)

    const movies = fetch(movieList)
                    .then(res => res.json())
                    .then(json => json.data.movies)
    return movies
}

const getMovie = async (id) => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(movieDetail, {
        params: {
            movie_id: id
        }
    })

    return movie
}

export {
    getMovies, 
    getMovie
}