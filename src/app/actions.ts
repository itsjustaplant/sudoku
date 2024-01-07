'use server';

import { createGame, readGames } from '@/db/client';
import type { Game } from '@/types';

export async function postGame(payload: Game): Promise<Game> {
  const res = await createGame(payload);
  return res;
}

export async function getGames(): Promise<Game[]> {
  const res = await readGames();
  return res;
}
