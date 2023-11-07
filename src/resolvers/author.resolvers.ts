import { AuthorResolvers } from '../generated/graphql';

export const authorResolvers: AuthorResolvers = {
    books: async ({ id }, _, { dbClient }) => {
        const books = await dbClient.book.findMany({ where: { authorId: id } });
        console.log(books);
        return books as any;
    }
}