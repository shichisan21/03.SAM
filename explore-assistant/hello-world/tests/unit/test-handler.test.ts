import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy, JestMockExtended } from 'jest-mock-extended';
import prisma from '../../client';

jest.mock('./client', () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>(),
}));

() => {
    mockReset(prismaMock);
};

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;