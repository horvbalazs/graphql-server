import { QueryResolvers } from '../generated/graphql';

export const queryResolvers: QueryResolvers = {
    books: async (_, __, { dbClient }) => {
        const books = await dbClient.book.findMany();
        return books as any;
    },

    book: async (_, { id }, { dbClient }) => {
        const book = await dbClient.book.findFirst({ where: { id } });
        return book as any;
    },

    authors: async (_, __, { dbClient }) => {
        const authors = await dbClient.author.findMany();
        return authors as any;
    },

    author: async (_, { id }, { dbClient }) => {
        const author = await dbClient.author.findFirst({ where: { id } });
        return author as any;
    }
}