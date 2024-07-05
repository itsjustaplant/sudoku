import type { TGameDB } from '@/types';

import db from './db';

const getGame = async () => {
  const game = await db.game.get(1);

  return game;
};

const addGame = async (data: TGameDB) => {
  const { board, answer, time } = data;

  if (!!board && !!answer) {
    const _ = await db.game.add({ board, answer, time });
  }
};

const updateGame = async (data: TGameDB) => {
  const { board, answer, time } = data;

  if (board) {
    const _ = await db.game.update(1, { board, answer, time });
  }
};

export { getGame, addGame, updateGame };
