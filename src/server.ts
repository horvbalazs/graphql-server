import { join } from 'node:path';
import { readFileSync } from 'fs';
import resolvers from './resolvers';
import { gql, ApolloServer } from 'apollo-server-express';
import { prisma } from './db/client';
import express, { Express } from 'express';

export async function createServer(): Promise<Express> {
    const typeDefs = gql(
        readFileSync(join(__dirname, '..', 'schema.graphql'), 'utf-8'),
    );

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
            dbClient: prisma,
        },
        introspection: true,
    });

    const app = express();

    await server.start();

    server.applyMiddleware({ app, cors: true });

    return app;
}
