import type { TGameDB } from '@/types';

import db from './db';

const getGame = async () => {
  const game = await db.game.get(1);

  return game;
};

const addGame = async (data: TGameDB) => {
  const { board, answer } = data;

  if (!!board && !!answer) {
    const _ = await db.game.add({ board, answer });
  }
};

const updateGame = async (data: TGameDB) => {
  const { board, answer } = data;

  if (board) {
    const _ = await db.game.update(1, { board, answer });
  }
};

export { getGame, addGame, updateGame };
