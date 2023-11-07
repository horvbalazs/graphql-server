import { PrismaClient } from '@prisma/client';

export type Context = {
    dbClient: PrismaClient;
};