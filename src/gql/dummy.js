let movies = [
    {
        "id": 1,
        "name": "Naruto"
    }
]

const getMovies = () => movies

const getMovie = id => {
    const filteredMovies = movies.filter((items) => items.id === id)
    return filteredMovies[0]
}

export {
    getMovies,
    getMovie
}