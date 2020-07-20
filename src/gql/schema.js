import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Movie {
    id: Int!
    name: String!
  }

  type Query {
    movies: [Movie]!
    movie(id: Int!): Movie
  }
`

export default typeDefs