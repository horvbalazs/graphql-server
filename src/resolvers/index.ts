import { Resolvers } from '../generated/graphql';
import { queryResolvers } from './query.resolvers';
import { mutationResolvers } from './mutation.resolvers';
import { bookResolvers } from './book.resolvers';
import { authorResolvers } from './author.resolvers';

const resolvers: Resolvers = {
    Query: queryResolvers,
    Mutation: mutationResolvers,
    Book: bookResolvers,
    Author: authorResolvers,
};

export default resolvers;