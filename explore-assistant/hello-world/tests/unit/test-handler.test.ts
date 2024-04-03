import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
import prisma from '../../client';
import { jest, describe, test, expect } from '@jest/globals';

// prisma クライアントのモックを設定
jest.mock('../../client', () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>(),
}));

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

// 必要に応じてモックをリセットする関数
export const resetPrismaMock = () => {
    mockReset(prismaMock);
};
