import { getMovies, getMovie } from './dummy'

const resolvers = {
    Query: {
        movies: (_, { limit }) => getMovies(limit),
        movie: (_, { id }) => getMovie(id),
    }
}

export default resolvers