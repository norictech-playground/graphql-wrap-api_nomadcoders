import fetch from 'node-fetch'

const getMovies = (limit) => {
    let url = `${process.env.API_URL}`
    url += '?limit=' + (limit ?? 10)

    const movies = fetch(url)
                    .then(res => res.json())
                    .then(json => json.data.movies)
    return movies
}

export {
    getMovies
}