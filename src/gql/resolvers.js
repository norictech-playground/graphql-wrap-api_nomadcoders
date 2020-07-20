import { getMovies, getMovie } from './dummy'

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getMovie(id)
    }
}

export default resolvers