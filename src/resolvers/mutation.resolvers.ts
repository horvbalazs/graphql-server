import { MutationResolvers } from '../generated/graphql';

export const mutationResolvers: MutationResolvers = {
    createBook: async (_, args, { dbClient }) => {
        if (!args.authorId) {
            throw new Error('Invalid author!');
        }

        const book = await dbClient.book.create({
            data: {
                authorId: args.authorId,
                title: args.title,
            },
        });

        return book as any;
    },

    createAuthor: async (_, args, { dbClient }) => {
        const author = await dbClient.author.create({
            data: {
                name: args.name,
                dateOfBirth: args.dateOfBirth
            },
        });
        return author as any;
    }
}