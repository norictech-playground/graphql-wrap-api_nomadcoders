import { config } from 'dotenv/config'
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

// // gql related
import typeDefs from './gql/schema'
import resolvers from './gql/resolvers'

const server = new ApolloServer({ typeDefs, resolvers });

const app = express()
server.applyMiddleware({ app })

app.listen({ port: process.env.PORT }, () => console.log(`Server running on port ${process.env.PORT}`)); // http://localhost:{port}/graphql