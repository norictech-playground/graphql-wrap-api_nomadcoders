import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
  }

  type Query {
    movies(limit: Int): [Movie]!
  }
`

export default typeDefs