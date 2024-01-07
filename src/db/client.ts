'use server';

import { PrismaClient } from '@prisma/client';

import type { Game } from '@/types';

const prisma = new PrismaClient();

async function createGame(payload: Game): Promise<Game> {
  const { time, isWin, date } = payload;
  const game = await prisma.game.create({ data: { isWin, time, date } });
  return game;
}

async function readGames(): Promise<Game[]> {
  const games = await prisma.game.findMany();
  return games;
}

export {
  createGame,
  readGames
};
