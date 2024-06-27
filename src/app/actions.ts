'use server';

import { createGame, readGames } from '@/db/client';
import type { TGame } from '@/types';

export async function postGame(payload: TGame): Promise<TGame> {
  const res = await createGame(payload);
  return res;
}

export async function getGames(): Promise<TGame[]> {
  const res = await readGames();
  return res;
}
