import { getMovies } from './dummy'

const resolvers = {
    Query: {
        movies: (_, { limit }) => getMovies(limit),
    }
}

export default resolvers