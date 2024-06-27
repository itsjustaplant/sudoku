'use server';

import type { TGame } from '@/types';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createGame(payload: TGame): Promise<TGame> {
  const { time, isWin, date } = payload;
  const game = await prisma.game.create({ data: { isWin, time, date } });
  return game;
}

async function readGames(): Promise<TGame[]> {
  const games = await prisma.game.findMany();
  return games;
}

export {
  createGame,
  readGames
};
