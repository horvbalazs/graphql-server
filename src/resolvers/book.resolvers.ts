import { BookResolvers } from '../generated/graphql';

export const bookResolvers: BookResolvers = {
    author: async ({ author: { id } }, _, { dbClient }) => {
        const author = await dbClient.author.findFirst({ include: { books: { where: { authorId: id } } } });
        console.log(author);
        return author as any;
    }
}